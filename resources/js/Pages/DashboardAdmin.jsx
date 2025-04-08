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
    
    // Ajouter des valeurs par défaut pour éviter les erreurs
    overdueTasks = [],
    projectsWithoutTasks = []
   }) 
{
    // Calculer les pourcentages arrondis
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

            <div className="py-12">
                {/* Section pour les métriques principales */}
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Carte pour les projets */}
                        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                            <div className="p-6 text-gray-900 dark:text-gray-100">
                                <h3 className="text-purple-500 text-2xl font-semibold">Projets</h3>
                                <p className="text-xl mt-4">{totalProjects}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                    Nombre total de projets
                                </p>
                            </div>
                        </div>
                        
                        {/* Carte pour les tâches */}
                        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                            <div className="p-6 text-gray-900 dark:text-gray-100">
                                <h3 className="text-indigo-500 text-2xl font-semibold">Tâches</h3>
                                <p className="text-xl mt-4">{totalTasks}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                    Nombre total de tâches
                                </p>
                            </div>
                        </div>
                        
                        {/* Carte pour les utilisateurs */}
                        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                            <div className="p-6 text-gray-900 dark:text-gray-100">
                                <h3 className="text-cyan-500 text-2xl font-semibold">Utilisateurs</h3>
                                <p className="text-xl mt-4">{totalUsers}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                    Nombre total d'utilisateurs
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section pour les alertes */}
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 mb-6">
                    {/* Tâches en retard - avec vérification que overdueTasks est défini */}
                    {overdueTasks && overdueTasks.length > 0 && (
                        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4 dark:bg-red-900/20 dark:border-red-500">
                            <div className="flex items-center mb-2">
                                <span className="text-red-500 text-xl font-semibold">⚠️ Tâches en retard ({overdueTasks.length})</span>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                                    <thead className="bg-gray-100 dark:bg-gray-700">
                                        <tr>
                                            <th className="px-4 py-2 text-left">Titre</th>
                                            <th className="px-4 py-2 text-left">Projet</th>
                                            <th className="px-4 py-2 text-left">Date limite</th>
                                            <th className="px-4 py-2 text-left">Status</th>
                                            <th className="px-4 py-2 text-left">Assigné à</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {overdueTasks.map(task => (
                                            <tr key={task.id} className="border-t dark:border-gray-700">
                                                <td className="px-4 py-2">{task.title}</td>
                                                <td className="px-4 py-2">{task.project?.name || 'N/A'}</td>
                                                <td className="px-4 py-2 text-red-500 font-medium">
                                                    {new Date(task.deadline).toLocaleDateString()}
                                                </td>
                                                <td className="px-4 py-2">
                                                    <span className={`px-2 py-1 rounded text-xs ${
                                                        task.status === 'pending' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300' : 
                                                        'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                                                    }`}>
                                                        {task.status === 'pending' ? 'En attente' : 'En cours'}
                                                    </span>
                                                </td>
                                                <td className="px-4 py-2">{task.assignedUser?.name || 'Non assigné'}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* Projets sans tâches - avec vérification que projectsWithoutTasks est défini */}
                    {projectsWithoutTasks && projectsWithoutTasks.length > 0 && (
                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 dark:bg-yellow-900/20 dark:border-yellow-500">
                            <div className="flex items-center mb-2">
                                <span className="text-yellow-600 dark:text-yellow-400 text-xl font-semibold">⚠️ Projets sans tâches ({projectsWithoutTasks.length})</span>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                                    <thead className="bg-gray-100 dark:bg-gray-700">
                                        <tr>
                                            <th className="px-4 py-2 text-left">Nom du projet</th>
                                            <th className="px-4 py-2 text-left">Date de création</th>
                                            <th className="px-4 py-2 text-left">Responsable</th>
                                            <th className="px-4 py-2 text-left">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {projectsWithoutTasks.map(project => (
                                            <tr key={project.id} className="border-t dark:border-gray-700">
                                                <td className="px-4 py-2">{project.name}</td>
                                                <td className="px-4 py-2">{new Date(project.created_at).toLocaleDateString()}</td>
                                                <td className="px-4 py-2">{project.manager?.name || 'Non assigné'}</td>
                                                <td className="px-4 py-2">
                                                    <a 
                                                        href={`/projects/${project.id}/tasks/create`} 
                                                        className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300"
                                                    >
                                                        Ajouter une tâche
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

                {/* Section pour le statut des tâches */}
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Statut des tâches</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                            <div className="p-6 text-gray-900 dark:text-gray-100">
                                <h3 className="text-amber-500 text-2xl font-semibold">Tâches en attente</h3>
                                <p className="text-xl mt-4">{totalPendingTasks}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                    {pendingPercentage}% du total
                                </p>
                            </div>
                        </div>

                        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                            <div className="p-6 text-gray-900 dark:text-gray-100">
                                <h3 className="text-blue-500 text-2xl font-semibold">Tâches en cours</h3>
                                <p className="text-xl mt-4">{totalProgressTasks}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                    {progressPercentage}% du total
                                </p>
                            </div>
                        </div>

                        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                            <div className="p-6 text-gray-900 dark:text-gray-100">
                                <h3 className="text-green-500 text-2xl font-semibold">Tâches terminées</h3>
                                <p className="text-xl mt-4">{totalCompletedTasks}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                    {completedPercentage}% du total
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

