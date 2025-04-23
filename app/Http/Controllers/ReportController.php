<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Task;
use App\Models\User;
use Barryvdh\DomPDF\Facade\Pdf;
use Carbon\Carbon;

class ReportController extends Controller
{
    /**
     * Générer et télécharger un rapport PDF global sur tous les projets
     */
public function generateAllProjectsReport()
{
    // Récupérer tous les projets avec leurs tâches et utilisateurs
    $projects = Project::with(['tasks.assignedUser'])->get();
    
    // Calculer les statistiques simples
    $stats = [
        'total_projects' => Project::count(),
        'total_tasks'    => Task::count(),
        'total_users'    => User::count(),
    ];
    
    // Données pour la vue
    $data = [
        'projects' => $projects,
        'stats' => $stats,
        'date' => date('d/m/Y H:i'),
    ];
    
    $data['trans_rep'] = __('reportPdf'); //ajout variable de translation
    //dd($data);
    
    // Générer le PDF
    $pdf = PDF::loadView('pdf.all_projects_report', $data);
    
    // Télécharger le PDF
    return $pdf->download('rapport-global.pdf');
}
}
