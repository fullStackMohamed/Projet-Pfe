<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\MyTasksController;
use App\Http\Controllers\MyProjectsController;
use App\Http\Controllers\DashboardAdminController;

use App\Http\Middleware\AdminMiddleware;


// Redirection de la racine vers le tableau de bord
Route::get('/', function(){
    return Inertia::render('Welcome');
});

// Routes pour utilisateurs authentifiés et vérifiés
Route::middleware(['auth', 'admin'])->group(function() {
    // Tableau de bord
    Route::get('/dashboard2', [DashboardAdminController::class, 'index'])->name('dashboard2');
    
    // Routes pour projets
    Route::resource('project', ProjectController::class);
    
    // Routes pour tâches
    Route::resource('task', TaskController::class);
    
    // Routes pour gestion des utilisateurs - accessible uniquement aux admins
    Route::resource('user', UserController::class);
});

// Routes pour la gestion du profil (accessible à tous les utilisateurs authentifiés)
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


// Routes pour utilisateurs authentifiés et vérifiés
Route::middleware(['auth', 'user'])->group(function() {
    // Tableau de bord
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    // Routes pour mees tâches
    Route::get('/task-myTasks', [MyTasksController::class, 'myTasks'])->name('myTasks');
    Route::resource('myTasks', MyTasksController::class);

    //Mes projets
    Route::get('myProjects', [MyProjectsController::class, 'myProjects'])->name('myProjects');


});

// Inclusion des routes d'authentification
require __DIR__.'/auth.php';
