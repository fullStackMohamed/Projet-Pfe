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

use App\Http\Controllers\ReportController;


// Redirection de la racine vers la page d'acceuil
Route::get('/', function(){
    return Inertia::render('Welcome');
});

// Routes pour utilisateurs authentifiés et vérifiés
Route::middleware(['auth', 'admin'])->group(function() {
    // Tableau de bord
    Route::get('/dashboard2', [DashboardAdminController::class, 'index2'])->name('dashboard2');
    
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
// Route::get('/project/34', [ProjectController::class, 'show'])->name('project.show'); //juste pour tester

// Routes pour utilisateurs authentifiés et vérifiés
Route::middleware(['auth', 'user'])->group(function() {
    // Tableau de bord
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    // Routes pour mees tâches
    Route::get('/task-myTasks', [MyTasksController::class, 'myTasks'])->name('myTasks');
    Route::resource('myTasks', MyTasksController::class);

    //Mes projets
    Route::get('myProjects', [MyProjectsController::class, 'myProjects'])->name('myProjects');
    Route::resource('my-Project', MyProjectsController::class);
    // Route::get('my-Project/{id}/show', [MyProjectsController::class, 'show'])->name('my-Project.show');
    // Route::get('my-Project/{id}/edit', [MyProjectsController::class, 'edit'])->name('my-Project.edit');

});


// Routes pour les rapports PDF
Route::middleware(['auth'])->group(function () {
    // Téléchargement de PDFs
    Route::get('/reports/all-projects', [ReportController::class, 'generateAllProjectsReport'])->name('reports.all.download');
});

//pour multi-langues
Route::get('/lang/{locale}', function ($locale) {
    if (!in_array($locale, ['en', 'fr', 'ar'])) {
        abort(400);
    }
    Session::put('locale', $locale);
    // App::setLocale($locale);
    return Redirect::back();
})->name('lang.switch');


// Inclusion des routes d'authentification
require __DIR__.'/auth.php';
