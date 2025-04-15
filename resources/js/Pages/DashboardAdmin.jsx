// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
// import { Head } from '@inertiajs/react';

// export default function Dashboard({ 
//     auth, 
//     totalProjects,
//     totalTasks,
//     totalUsers,
    
//     totalPendingTasks,
//     totalProgressTasks,
//     totalCompletedTasks,
    
//    }) 
// {
//     // Calculer les pourcentages arrondis
//     const pendingPercentage = Math.round((totalPendingTasks / totalTasks) * 100);
//     const progressPercentage = Math.round((totalProgressTasks / totalTasks) * 100);
//     const completedPercentage = Math.round((totalCompletedTasks / totalTasks) * 100);
    
//     return (
//         <AuthenticatedLayout
//             user={auth.user}
//             header={
//                 <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
//                     Dashboard
//                 </h2>
//             }
//         >
//             <Head title="Dashboard" />

//             <div className="py-12">
//                 {/* Section pour les métriques principales */}
//                 <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 mb-6">
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                         {/* Carte pour les projets */}
//                         <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
//                             <div className="p-6 text-gray-900 dark:text-gray-100">
//                                 <h3 className="text-purple-500 text-2xl font-semibold">Projets</h3>
//                                 <p className="text-xl mt-4">{totalProjects}</p>
//                                 <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
//                                     Nombre total de projets
//                                 </p>
//                             </div>
//                         </div>
                        
//                         {/* Carte pour les tâches */}
//                         <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
//                             <div className="p-6 text-gray-900 dark:text-gray-100">
//                                 <h3 className="text-indigo-500 text-2xl font-semibold">Tâches</h3>
//                                 <p className="text-xl mt-4">{totalTasks}</p>
//                                 <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
//                                     Nombre total de tâches
//                                 </p>
//                             </div>
//                         </div>
                        
//                         {/* Carte pour les utilisateurs */}
//                         <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
//                             <div className="p-6 text-gray-900 dark:text-gray-100">
//                                 <h3 className="text-cyan-500 text-2xl font-semibold">Utilisateurs</h3>
//                                 <p className="text-xl mt-4">{totalUsers}</p>
//                                 <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
//                                     Nombre total d'utilisateurs
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Section pour le statut des tâches */}
//                 <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
//                     <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Statut des tâches</h2>
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                         <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
//                             <div className="p-6 text-gray-900 dark:text-gray-100">
//                                 <h3 className="text-amber-500 text-2xl font-semibold">Tâches en attente</h3>
//                                 <p className="text-xl mt-4">{totalPendingTasks}</p>
//                                 <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
//                                     {pendingPercentage}% du total
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
//                             <div className="p-6 text-gray-900 dark:text-gray-100">
//                                 <h3 className="text-blue-500 text-2xl font-semibold">Tâches en cours</h3>
//                                 <p className="text-xl mt-4">{totalProgressTasks}</p>
//                                 <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
//                                     {progressPercentage}% du total
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
//                             <div className="p-6 text-gray-900 dark:text-gray-100">
//                                 <h3 className="text-green-500 text-2xl font-semibold">Tâches terminées</h3>
//                                 <p className="text-xl mt-4">{totalCompletedTasks}</p>
//                                 <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
//                                     {completedPercentage}% du total
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </AuthenticatedLayout>
//     );
// }





import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ 
    auth, 
    totalProjects,
    totalTasks,
    totalUsers,
    
    totalPendingTasks,
    totalProgressTasks,
    totalCompletedTasks,
    
    // Add default values to avoid errors
    overdueTasks = [],
    projectsWithoutTasks = []
   }) 
{
    // Calculate rounded percentages
    const pendingPercentage = totalTasks ? Math.round((totalPendingTasks / totalTasks) * 100) : 0;
    const progressPercentage = totalTasks ? Math.round((totalProgressTasks / totalTasks) * 100) : 0;
    const completedPercentage = totalTasks ? Math.round((totalCompletedTasks / totalTasks) * 100) : 0;
    
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" /> 

            <form className="flex justify-end" action={route('reports.all.download')}>
                <button type="submit" 
                className="inline-flex items-center px-2 py-1 bg-blue-400 text-white 
                font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 
                focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-400"
                >
                    Télécharger le rapport
                </button>
            </form>

            <div className="py-12">
                {/* Main metrics section */}
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Projects card */}
                        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                            <div className="p-6 text-gray-900 dark:text-gray-100">
                                <h3 className="text-purple-500 dark:text-purple-400 text-2xl font-semibold">Projects</h3>
                                <p className="text-xl mt-4">{totalProjects}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                    Total number of projects
                                </p>
                            </div>
                        </div>
                        
                        {/* Tasks card */}
                        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                            <div className="p-6 text-gray-900 dark:text-gray-100">
                                <h3 className="text-indigo-500 dark:text-indigo-400 text-2xl font-semibold">Tasks</h3>
                                <p className="text-xl mt-4">{totalTasks}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                    Total number of tasks
                                </p>
                            </div>
                        </div>
                        
                        {/* Users card */}
                        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                            <div className="p-6 text-gray-900 dark:text-gray-100">
                                <h3 className="text-cyan-500 dark:text-cyan-400 text-2xl font-semibold">Users</h3>
                                <p className="text-xl mt-4">{totalUsers}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                    Total number of users
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Alerts section */}
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 mb-6">
                    {/* Overdue tasks - with check that overdueTasks is defined */}
                    {overdueTasks && overdueTasks.length > 0 && (
                        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4 dark:bg-red-900/30 dark:border-red-500 dark:text-gray-200">
                            <div className="flex items-center mb-2">
                                <span className="text-red-600 dark:text-red-400 text-xl font-semibold">⚠️ Overdue Tasks ({overdueTasks.length})</span>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                                    <thead className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                                        <tr>
                                            <th className="px-4 py-2 text-left">Name</th>
                                            <th className="px-4 py-2 text-left">Project</th>
                                            <th className="px-4 py-2 text-left">Due Date</th>
                                            <th className="px-4 py-2 text-left">Status</th>
                                            <th className="px-4 py-2 text-left">Assigned To</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700 dark:text-gray-300">
                                        {overdueTasks.map(task => (
                                            <tr key={task.id} className="border-t dark:border-gray-700">
                                                <td className="px-4 py-2">{task.name}</td>
                                                <td className="px-4 py-2">{task.project?.name || 'N/A'}</td>
                                                <td className="px-4 py-2 text-red-600 dark:text-red-400 font-medium">
                                                    {new Date(task.due_date).toLocaleDateString()}
                                                </td>
                                                <td className="px-4 py-2">
                                                    <span className={`px-2 py-1 rounded text-xs ${
                                                        task.status === 'pending' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300' : 
                                                        'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300'
                                                    }`}>
                                                        {task.status === 'pending' ? 'Pending' : 'In Progress'}
                                                    </span>
                                                </td>
                                                <td className="px-4 py-2">{task.assigned_user?.name || 'Not assigned'}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* Projects without tasks - with check that projectsWithoutTasks is defined */}
                    {projectsWithoutTasks && projectsWithoutTasks.length > 0 && (
                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 dark:bg-yellow-900/30 dark:border-yellow-500 dark:text-gray-200">
                            <div className="flex items-center mb-2">
                                <span className="text-yellow-600 dark:text-yellow-400 text-xl font-semibold">⚠️ Projects Without Tasks ({projectsWithoutTasks.length})</span>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                                    <thead className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                                        <tr>
                                            <th className="px-4 py-2 text-left">Project Name</th>
                                            <th className="px-4 py-2 text-left">Creation Date</th>
                                            <th className="px-4 py-2 text-left">Admin</th>
                                            <th className="px-4 py-2 text-left">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700 dark:text-gray-300">
                                        {projectsWithoutTasks.map(project => (
                                            <tr key={project.id} className="border-t dark:border-gray-700">
                                                <td className="px-4 py-2">{project.name}</td>
                                                <td className="px-4 py-2">{new Date(project.created_at).toLocaleDateString()}</td>
                                                <td className="px-4 py-2">{project.createdBy?.name || 'Unknown'}</td>
                                                <td className="px-4 py-2">
                                                    <a 
                                                        href={`/task/create?project_id=${project.id}`} 
                                                        className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300"
                                                    >
                                                        Add Task
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>

                {/* Task status section */}
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Task Status</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                            <div className="p-6 text-gray-900 dark:text-gray-100">
                                <h3 className="text-amber-500 dark:text-amber-400 text-2xl font-semibold">Pending Tasks</h3>
                                <p className="text-xl mt-4">{totalPendingTasks}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                    {pendingPercentage}% of total
                                </p>
                            </div>
                        </div>

                        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                            <div className="p-6 text-gray-900 dark:text-gray-100">
                                <h3 className="text-blue-500 dark:text-blue-400 text-2xl font-semibold">In Progress Tasks</h3>
                                <p className="text-xl mt-4">{totalProgressTasks}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                    {progressPercentage}% of total
                                </p>
                            </div>
                        </div>

                        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                            <div className="p-6 text-gray-900 dark:text-gray-100">
                                <h3 className="text-green-500 dark:text-green-400 text-2xl font-semibold">Completed Tasks</h3>
                                <p className="text-xl mt-4">{totalCompletedTasks}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                    {completedPercentage}% of total
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

