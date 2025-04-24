<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Models\Project;
use App\Models\User;
use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;

use App\Http\Resources\TaskResource;
use App\Http\Resources\ProjectResource;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

use App\Notifications\UserTaskNotification;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query =Task::query();

        if (request("name")) {
            $query->where("name","like","%". request("name") ."%");
        }
        if (request("status")) {
            $query->where("status", request("status"));
        }
        $sortField =request("sort_field", 'created_at');
        $sortDirection =request("sort_direction", "desc");

        $tasks = $query ->orderBy($sortField, $sortDirection) -> paginate(10)->onEachSide(1);

        return inertia("Task/Index", [
            "tasks" => TaskResource::collection($tasks),
            'queryParams' => request()->query() ?: null,
            'success' => session('success'),
            'translations' => __('task'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $projects = Project::query()->orderBy('name', 'asc')->get();
        $users = User::query()->where('role', '!=', 'admin')->orderBy('name', 'asc')->get();

        return Inertia("Task/Create", [
            'projects' => ProjectResource::collection($projects),
            'users' => UserResource::collection($users),
            'translations' => __('createTask'),
        ]);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTaskRequest $request)
    {

        $data = $request->validated();
        /** @var $image Illuminate\Http\UploadedFile*/
        $image = $data['image'] ?? null;
        $data['created_by'] = Auth::id();
        $data['updated_by'] = Auth::id();
        if ($image){
            $data['image_path'] = $image->store('task/'.Str::random(), 'public');
        }
        $task = Task::create($data);

        $user = User::find($request->assigned_user_id);  // Récupérer l'utilisateur auquel assigner la tâche

        $data = [
        'subject' => 'Nouvelle tâche assignée',
        'message' => 'Vous avez une nouvelle tâche à accomplir.',
        'task_id' => $task->id,  // L'ID de la tâche assignée
        ];
        // Envoyer la notification
        $user->notify(new UserTaskNotification($data));

        return to_route('task.index')->with('success', 'Task was created');
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {
        return inertia('Task/Show', [
            'task' => new TaskResource($task),
            'translations' => __('showTask'),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Task $task)
    {
        $projects = Project::query()->orderBy('name', 'asc')->get();
        $users = User::query()
        ->where('role', '!=', 'admin')
        ->orderBy('name', 'asc')
        ->get();
    
        return Inertia("Task/Edit", [
            'task' => new TaskResource($task),
            'projects' => ProjectResource::collection($projects),
            'users' => UserResource::collection($users),
            'translations' => __('editTask'),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTaskRequest $request, Task $task)
    {
         // Les données sont déjà validées par UpdateTaskRequest
    $data = $request->validated();
    
    // Mise à jour des informations de base
    $updateData = [
        'name' => $data['name'],
        'description' => $data['description'],
        'status' => $data['status'],
        // 'priority' => $data['priority'],
        'due_date' => $data['due_date'],
        'assigned_user_id' => $data['assigned_user_id'],
        'project_id' => $data['project_id'], // Permet de changer le projet associé
        'updated_by' => Auth::id(),
    ];
    
    // Traitement de l'image si présente
    if ($request->hasFile('image')) {
        // Suppression de l'ancienne image si elle existe
        if ($task->image_path) {
            Storage::disk('public')->deleteDirectory(dirname($task->image_path));
        }
        
        // Stockage de la nouvelle image
        $updateData['image_path'] = $request->file('image')->store('task/'.Str::random(), 'public');
    }
    
    // Mise à jour du projet
    $task->update($updateData);

    //code pour notification
    $user = User::find($request->assigned_user_id);  // Récupérer l'utilisateur auquel assigner la tâche

    $data = [
    'subject' => 'Nouvelle tâche assignée',
    'message' => 'Vous avez une nouvelle tâche à accomplir.',
    'task_id' => $task->id,  // L'ID de la tâche assignée
    ];
    // Envoyer la notification
    $user->notify(new UserTaskNotification($data));
    
    // Redirection avec message de succès
    return to_route('task.index')->with('success', "Task \"{$task->name}\" was updated successfully");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        $name = $task->name;
        $task->delete();
        if ($task->image_path) {
            Storage::disk('public')->deleteDirectory(dirname($task->image_path));
        }
        return to_route('task.index')->with('success', "Task \"$name\" was deleted");
    }

}
