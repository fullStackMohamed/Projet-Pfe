<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title> {{$trans_rep['title']}} </title>
    
    <style>

        @if(app()->getLocale() == 'ar') 
        body {
            direction: rtl;
            font-family: 'Amiri', sans-serif;
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
    <h1> {{ $trans_rep['global_report'] }}</h1> 
    <p> {{ $trans_rep['generated_date'] }} : {{ $date }}</p>

    <div class="stats">
        <h3> {{$trans_rep['statistics']}} </h3>
        <ul>
            <li> {{ $trans_rep['total_projects'] }} : {{ $stats['total_projects'] }}</li> 
            <li> {{$trans_rep['total_tasks']}} : {{ $stats['total_tasks'] }}</li> 
            <li> {{$trans_rep['total_users']}}: {{ $stats['total_users'] }}</li>
        </ul>
    </div>

    <h3>{{$trans_rep['project_list']}}</h3>
    @foreach($projects as $project)
        <div class="project">
            <div class="project-title"> {{ $project->name }} </div>
            <p>{{$trans_rep['task_count']}} : {{ count($project->tasks) }}</p>

            <h4>{{$trans_rep['tasks']}} :</h4>

            @if(count($project->tasks) > 0)
                @foreach($project->tasks as $task)
                    <div class="task">
                        <strong>{{ $task->name }}</strong>
                        <br>
                         <span > {{$trans_rep['status']}} :
                            @if($task->status == 'completed')
                                 <span class="badge completed"> {{$trans_rep['completed']}} </span> 
                            @elseif($task->status == 'in_progress')
                                <span class="badge in-progress"> {{$trans_rep['in_progress']}} </span>
                            @else
                                 <span class="badge pending">{{$trans_rep['pending']}} </span> 
                            @endif
                        </span>
                        <br>
                        <span>{{$trans_rep['assigned_to']}} : {{ $task->assignedUser ? $task->assignedUser->name : $trans_rep['unassigned'] }}</span>

                    </div>
                @endforeach
            @else
                <p>{{$trans_rep['no_tasks']}}</p>

            @endif
        </div>
    @endforeach
</body>
</html>
