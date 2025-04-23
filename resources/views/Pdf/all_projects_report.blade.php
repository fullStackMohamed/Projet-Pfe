<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    {{-- <title>Rapport Global</title> --}}
    <title> {{$trans_rep['title']}} </title>
    
    <style>
        /* body {
            font-family: Arial, sans-serif;
            margin: 20px;
            line-height: 1.5;
        } */

        /* Appliquer la direction de texte à RTL pour l'arabe */
        @if(app()->getLocale() == 'ar') 
        body {
            direction: rtl;
            font-family: 'Amiri', sans-serif; /* Assure-toi que la police Amiri est disponible ou intègre-la */
        }
        @endif
        
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
<body @if(app()->getLocale() === 'ar') dir="rtl" style="text-align:right;" @endif>  
    <h1> {{--Rapport Global des Projets--}} {{ $trans_rep['global_report'] }}</h1> 
    <p>{{-- Date de génération --}} {{ $trans_rep['generated_date'] }} : {{ $date }}</p>

    <div class="stats">
        {{-- <h3>Statistiques</h3> --}}
        <h3> {{$trans_rep['statistics']}} </h3>
        <ul>
            <li>{{--Total des projets--}} {{ $trans_rep['total_projects'] }} : {{ $stats['total_projects'] }}</li> 
            <li> {{--Total des tâches--}}  {{$trans_rep['total_tasks']}} : {{ $stats['total_tasks'] }}</li> 
            <li>{{--Total des utilisateurs --}}  {{$trans_rep['total_users']}}: {{ $stats['total_users'] }}</li>
        </ul>
    </div>

    {{-- <h3>Liste des Projets</h3> --}}
    <h3>{{$trans_rep['project_list']}}</h3>
    @foreach($projects as $project)
        <div class="project">
            <div class="project-title">{{ $project->name }}</div>
            <p>{{$trans_rep['task_count']}} : {{ count($project->tasks) }}</p>
            {{-- <p>Nombre de tâches : {{ count($project->tasks) }}</p> --}}

            {{-- <h4>Tâches :</h4> --}}
            <h4>{{$trans_rep['tasks']}} :</h4>

            @if(count($project->tasks) > 0)
                @foreach($project->tasks as $task)
                    <div class="task">
                        <strong>{{ $task->name }}</strong>
                        <br>
                         <span >{{--Statut : --}} {{$trans_rep['status']}} :
                            @if($task->status == 'completed')
                                 <span class="badge completed">{{--Terminé--}} {{$trans_rep['completed']}} </span> 
                            @elseif($task->status == 'in_progress')
                                <span class="badge in-progress"> {{--En cours --}} {{$trans_rep['in_progress']}} </span>
                            @else
                                 <span class="badge pending">{{--En attente--}}{{$trans_rep['pending']}} </span> 
                            @endif
                        </span>
                        <br>
                        {{-- <span>Assigné à : {{ $task->assignedUser ? $task->assignedUser->name : 'Non assigné' }}</span> --}}
                        <span>{{$trans_rep['assigned_to']}} : {{ $task->assignedUser ? $task->assignedUser->name : $trans_rep['unassigned'] }}</span>

                    </div>
                @endforeach
            @else
                {{-- <p>Aucune tâche pour ce projet.</p> --}}
                <p>{{$trans_rep['no_tasks']}}</p>

            @endif
        </div>
    @endforeach
</body>
</html>
