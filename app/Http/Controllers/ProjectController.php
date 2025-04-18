<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;

use App\Http\Resources\ProjectResource;
use App\Http\Resources\TaskResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

use Inertia\Inertia;

class ProjectController extends Controller

{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Project::query();

        if (request("name")) {
            $query->where("name","like","%". request("name") ."%");
        }
        if (request("status")) {
            $query->where("status", request("status"));
        }
        $sortField =request("sort_field", 'created_at');
        $sortDirection =request("sort_direction", "desc");

        $projects = $query ->orderBy($sortField, $sortDirection) -> paginate(10)->onEachSide(1);

        return inertia("Project/Index", [
            "projects" => ProjectResource::collection($projects),
            'queryParams' => request()->query() ?: null,
            'success' => session('success'),
            'translations' => __('project'),

        ]);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia('Project/Create',[
            'translations' => [
                'create_title' => __('createProject.create_title'),
                'new_project' => __('createProject.new_project'),
                'image' => __('createProject.image'),
                'name' => __('createProject.name'),
                'description' => __('createProject.description'),
                'due_date' => __('createProject.due_date'),
                'status' => __('createProject.status'),
                'select_status' => __('createProject.select_status'),
                'pending' => __('createProject.pending'),
                'in_progress' => __('createProject.in_progress'),
                'completed' => __('createProject.completed'),
                'cancel' => __('createProject.cancel'),
                'submit' => __('createProject.submit'),
            ]
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProjectRequest $request)
    {
        $data = $request->validated();
        /** @var $image Illuminate\Http\UploadedFile*/
        $image = $data['image'] ?? null;
        $data['created_by'] = Auth::id();
        $data['updated_by'] = Auth::id();
        if ($image){
            $data['image_path'] = $image->store('project/'.Str::random(), 'public');
        }
        Project::create($data);

        
        return to_route('project.index')->with('success', 'Project was created');
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        $query = $project->tasks();
        $sortField =request("sort_field", 'created_at');
        $sortDirection =request("sort_direction", "desc");

        if (request("name")) {
            $query->where("name","like","%". request("name") ."%");
        }
        if (request("status")) {
            $query->where("status", request("status"));
        }

        $tasks = $query->orderBy($sortField, $sortDirection)->paginate(10)->onEachSide(1);
        return inertia('Project/Show', [
            'project' => new ProjectResource($project),
            "tasks" => TaskResource::collection($tasks),
            'queryParams' => request()->query() ?: null,
            'success' => session('success'),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        return inertia('Project/Edit', [
            'project' => new ProjectResource($project),
            'translations' => __('editProject'),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    /*public function update(UpdateProjectRequest $request, Project $project)
    {
        $data = $request->validated();
        $image = $data['image'] ?? null;
        $data['updated_by'] = Auth::id();
        if ($image){
            if ($project->image_path){
                Storage::disk('public')->delete($project->image_path);
            }
            $data['image_path'] = $image->store('project/'.Str::random(), 'public');
        }
        dd($data);  // Vérifie les données avant la mise à jour
        $project->update($data);



        return to_route('project.index')->with('success', "Project \"$name\" was updated");
    }*/



    /**
       * Update the specified resource in storage.
    */
    public function update(UpdateProjectRequest $request, Project $project)
    {
    // Les données sont déjà validées par UpdateProjectRequest
    $data = $request->validated();
    
    // Mise à jour des informations de base
    $updateData = [
        'name' => $data['name'],
        'description' => $data['description'],
        'status' => $data['status'],
        'due_date' => $data['due_date'],
        'updated_by' => Auth::id(),
    ];
    
    // Traitement de l'image si présente
    if ($request->hasFile('image')) {
        // Suppression de l'ancienne image si elle existe
        if ($project->image_path) {
            Storage::disk('public')->deleteDirectory(dirname($project->image_path));
        }
        
        // Stockage de la nouvelle image
        $updateData['image_path'] = $request->file('image')->store('project/'.Str::random(), 'public');
    }
    
    // Mise à jour du projet
    $project->update($updateData);
    
    // Redirection avec message de succès
    return to_route('project.index')->with('success', "Project \"{$project->name}\" was updated successfully");
    }
     

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        $name = $project->name;
        $project->delete();
        if ($project->image_path) {
            Storage::disk('public')->deleteDirectory(dirname($project->image_path));
        }
        return to_route('project.index')->with('success', "Project \"$name\" was deleted");
    }
}
