<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;
use App\Models\Project;
use App\Models\User;

use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class DashboardAdminController extends Controller
{
    // Dans votre DashboardController.php

public function index()
{
    //$totalProjects = Project::count(); //methode 1
    $totalTasks = Task::count();
    $totalUsers = User::count();

    // Appel de la procédure pour obtenir le nombre total de projets methode 2 appel procedure
    $result = DB::select("CALL CountProjects()");
    // Le résultat est un tableau, donc on récupère le champ total_projects
    $totalProjects = $result[0]->total_projects;
    
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
