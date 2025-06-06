<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserCrudResource;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $query = User::query();
        $query = User::where("role", "!=", "admin");

        if (request("name")) {
            $query->where("name","like","%". request("name") ."%");
        }

        if (request("email")) {
            $query->where("email","like","%". request("email") ."%");
        }
       
        $sortField =request("sort_field", 'created_at');
        $sortDirection =request("sort_direction", "desc");

        $users = $query ->orderBy($sortField, $sortDirection) -> paginate(10)->onEachSide(1);

        return inertia("User/Index", [
            "users" => UserCrudResource::collection($users),
            'queryParams' => request()->query() ?: null,
            'success' => session('success'),
            'translations' => __('user'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia('User/Create',  [
            'translations' => [
                'create_title' => __('createUser.create_title'),
                'new_user' => __('createUser.new_user'),
                'name' => __('createUser.name'),
                'email' => __('createUser.email'),
                'password' => __('createUser.password'),
                'confirmation_password' => __('createUser.confirmation_password'),
                'submit' => __('createUser.submit'),
                'cancel' => __('createUser.cancel'),
            ],
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
        $data = $request->validated();
        $data['email_verified_at'] = time();
        $data['password'] = bcrypt($data['password']);
        User::create($data);

        return to_route('user.index')->with('success', 'User was created');
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        return inertia('User/Edit', [
            'user' => new UserCrudResource($user),
            'translations' => __('editUser'),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        // Les données sont déjà validées par UpdateUserRequest
        $data = $request->validated();
        $password = $data['password'] ?? null; 
        if ($password) {
            $data['password'] = bcrypt($password);
        }else {
            unset($data['password']);
        }
        // Mise à jour du projet
        $user->update($data);
    
    // Redirection avec message de succès
    return to_route('user.index')->with('success', "User \"{$user->name}\" was updated successfully");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $name = $user->name;
        $user->delete();
        return to_route('user.index')->with('success', "User \"$name\" was deleted");
    }
}
