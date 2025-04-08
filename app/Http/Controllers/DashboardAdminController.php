<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;
use App\Models\Project;
use App\Models\User;

use Inertia\Inertia;


class DashboardAdminController extends Controller
{
    // Dans votre DashboardController.php

public function index()
{
    $totalProjects = Project::count();
    $totalTasks = Task::count();
    $totalUsers = User::count();
    
    $totalPendingTasks = Task::where('status', 'pending')->count();
    $totalProgressTasks = Task::where('status', 'in_progress')->count();
    $totalCompletedTasks = Task::where('status', 'completed')->count();
    
    // Récupération des tâches en retard (deadline dépassée)
    $overdueTasks = Task::where('due_date', '<', now())
        ->whereIn('status', ['pending', 'in_progress'])
        ->with(['project', 'assignedUser']) // Si vous avez ces relations
        ->get();
    
    // Récupération des projets sans tâches
    $projectsWithoutTasks = Project::whereDoesntHave('tasks')
        ->get();
    
    return Inertia::render('DashboardAdmin', [
        'totalProjects' => $totalProjects,
        'totalTasks' => $totalTasks,
        'totalUsers' => $totalUsers,
        'totalPendingTasks' => $totalPendingTasks,
        'totalProgressTasks' => $totalProgressTasks,
        'totalCompletedTasks' => $totalCompletedTasks,
        'overdueTasks' => $overdueTasks,
        'projectsWithoutTasks' => $projectsWithoutTasks,
    ]);
}
}
