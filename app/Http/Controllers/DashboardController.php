<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;
use App\Http\Resources\TaskResource;


class DashboardController extends Controller
{
    public function index() {
        $user = auth()->user();

        $totalPendingTasks = Task::query()
           ->where('status', 'pending')
           ->count();
        $myPendingTasks = Task::query()
           ->where('status', 'pending')
           ->where('assigned_user_id', $user->id)
           ->count();

           $totalProgressTasks = Task::query()
           ->where('status', 'in_progress')
           ->count();
        $myProgressTasks = Task::query()
           ->where('status', 'in_progress')
           ->where('assigned_user_id', $user->id)
           ->count();

        $totalCompletedTasks = Task::query()
           ->where('status', 'completed')
           ->count();
        $myCompletedTasks = Task::query()
           ->where('status', 'completed')
           ->where('assigned_user_id', $user->id)
           ->count();
        
        $activeTasks = Task::query()
            ->whereIn('status', ['pending', 'in_progress'])
            ->where('assigned_user_id', $user->id)
            ->limit(10)
            ->get();
        $activeTasks = TaskResource::collection($activeTasks);
        return inertia('Dashboard', [
         'translations' => [
            'dashboard' => __('dashboard2.dashboard'),
            'pending_tasks' => __('dashboard2.pending_tasks'),
            'in_progress_tasks' => __('dashboard2.in_progress_tasks'),
            'completed_tasks' => __('dashboard2.completed_tasks'),
            'my_active_tasks' => __('dashboard2.my_active_tasks'),
            'id' => __('dashboard2.id'),
            'project_name' => __('dashboard2.project_name'),
            'task_name' => __('dashboard2.task_name'),
            'status' => __('dashboard2.status'),
            'due_date' => __('dashboard2.due_date'),
            'view_all_tasks' => __('dashboard2.view_all_tasks'),
            'no_tasks' => __('dashboard2.no_tasks'),
         ],
         'totalPendingTasks' => $totalPendingTasks, 
         'myPendingTasks' => $myPendingTasks,
         'totalProgressTasks' => $totalProgressTasks,
         'myProgressTasks' => $myProgressTasks,
         'totalCompletedTasks' => $totalCompletedTasks,
         'myCompletedTasks' => $myCompletedTasks,
         'activeTasks' => $activeTasks   
      ]);
   }
}
