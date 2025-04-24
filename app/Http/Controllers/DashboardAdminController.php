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

public function index2()
{
    // Récupération des statistiques de base
    // $totalUsers = User::count(); //Inclut l'admin
    $totalUsers = User::where('role', '!=', 'admin')->count();  // Exclut les admins
    $totalTasks = Task::count();
    
    // Appel de la procédure stockée pour le nombre de projets
    $result = DB::select("CALL CountProjects()");
    $totalProjects = $result[0]->total_projects;
    
    // Statistiques sur les tâches par statut
    $tasksByStatus = [
        'pending' => Task::where('status', 'pending')->count(),
        'in_progress' => Task::where('status', 'in_progress')->count(),
        'completed' => Task::where('status', 'completed')->count(),
    ];
    
    // Tâches en retard (avec informations essentielles seulement)
    $overdueTasks = Task::where('due_date', '<', now())
        ->whereIn('status', ['pending', 'in_progress'])
        ->with(['project:id,name', 'assignedUser:id,name']) // Sélection des champs utiles uniquement
        ->get(['id', 'name', 'due_date', 'project_id', 'assigned_user_id']);
    
    // Données pour graphique d'évolution des tâches par mois
    $tasksTrend = DB::table('tasks')
        ->selectRaw('MONTH(created_at) as month, COUNT(*) as count')
        ->whereYear('created_at', date('Y'))
        ->groupBy('month')
        ->orderBy('month')
        ->get();
    
    return Inertia::render('DashboardAdmin', [
        'translations' => [
            'dashboard' => __('messages.dashboard'),
            'projects' => __('messages.projects'),
            'tasks' => __('messages.tasks'),
            'users' => __('messages.users'),
            'task_status' => __('messages.task_status'),
            'task_trend' => __('messages.task_trend'),
            'overdue_tasks' => __('messages.overdue_tasks'),
            'download_report' => __('messages.download_report'),
            'name' => __('messages.name'),
            'due_date' => __('messages.due_date'),
            'project' => __('messages.project'),
            'assigned_to' => __('messages.assigned_to'),
            'no_overdue_tasks' => __('messages.no_overdue_tasks'),

            'pending' => __('messages.pending'),
            'in_progress' => __('messages.in_progress'),
            'completed' => __('messages.completed'),

            'months' => __('messages.months'),
            'tasks' => __('messages.tasks'),
        ],
        'totalProjects' => $totalProjects,
        'totalTasks' => $totalTasks,
        'totalUsers' => $totalUsers,
        'tasksByStatus' => $tasksByStatus,
        'overdueTasks' => $overdueTasks,
        'tasksTrend' => $tasksTrend,
    ]);
}
}