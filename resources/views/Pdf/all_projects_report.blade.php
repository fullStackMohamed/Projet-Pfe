<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Rapport Global</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            line-height: 1.5;
        }
        
        h1 {
            color: #2c3e50;
            text-align: center;
        }
        
        .stats {
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 30px;
        }
        
        .project {
            border: 1px solid #ddd;
            padding: 15px;
            margin-bottom: 20px;
            border-radius: 5px;
        }
        
        .project-title {
            font-size: 18px;
            font-weight: bold;
            color: #3498db;
        }
        
        .task {
            margin-left: 20px;
            padding: 10px;
            background-color: #f8f9fa;
            margin-top: 10px;
        }
        
        .badge {
            padding: 3px 8px;
            border-radius: 3px;
            color: white;
            font-size: 12px;
        }
        
        .completed {
            background-color: #2ecc71;
        }
        
        .in-progress {
            background-color: #f39c12;
        }
        
        .pending {
            background-color: #95a5a6;
        }
    </style>
</head>
<body>
    <h1>Rapport Global des Projets</h1>
    <p>Date de génération : {{ $date }}</p>

    <div class="stats">
        <h3>Statistiques</h3>
        <ul>
            <li>Total des projets : {{ $stats['total_projects'] }}</li>
            <li>Total des tâches : {{ $stats['total_tasks'] }}</li>
            <li>Total des utilisateurs : {{ $stats['total_users'] }}</li>
        </ul>
    </div>

    <h3>Liste des Projets</h3>
    @foreach($projects as $project)
        <div class="project">
            <div class="project-title">{{ $project->name }}</div>
            <p>Nombre de tâches : {{ count($project->tasks) }}</p>

            <h4>Tâches :</h4>
            @if(count($project->tasks) > 0)
                @foreach($project->tasks as $task)
                    <div class="task">
                        <strong>{{ $task->name }}</strong>
                        <br>
                        <span>Statut : 
                            @if($task->status == 'completed')
                                <span class="badge completed">Terminé</span>
                            @elseif($task->status == 'in_progress')
                                <span class="badge in-progress">En cours</span>
                            @else
                                <span class="badge pending">En attente</span>
                            @endif
                        </span>
                        <br>
                        <span>Assigné à : {{ $task->assignedUser ? $task->assignedUser->name : 'Non assigné' }}</span>
                    </div>
                @endforeach
            @else
                <p>Aucune tâche pour ce projet.</p>
            @endif
        </div>
    @endforeach
</body>
</html>