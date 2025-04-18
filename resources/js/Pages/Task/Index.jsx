// import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
// import { Head, Link } from "@inertiajs/react";
// import TasksTable from "./TasksTable";

// export default function Index({ auth, success, tasks, queryParams = null }) {

//     return (
//         <AuthenticatedLayout

//             user={auth.user}
//             header={
//                 <div className="flex justify-between items-center">
//                     <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
//                         Tasks
//                     </h2>
//                     {
//                         auth.user.role === 'admin' &&
//                         <Link href={route("task.create")} className="bg-emerald-500 py-1 px-3 text-white rounded
//                     shadow transition-all hover:bg-emerald-600">
//                             Add new
//                         </Link>
//                     }

//                 </div>
//             }
//         >

//             <Head title="Tasks" />
//             <div className="py-12">
//                 <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
//                     <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">

//                         <div className="p-6 text-gray-900 dark:text-gray-100">
//                             <TasksTable tasks={tasks} queryParams={queryParams} success={success} />
//                         </div>

//                     </div>
//                 </div>
//             </div>



//         </AuthenticatedLayout>
//     )
// }



import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import TasksTable from "./TasksTable";

export default function Index({ auth, success, tasks, queryParams = null, translations }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold leading-tight text-slate-800 dark:text-slate-200">
                        {/* Tasks */} {translations.tasks}
                    </h2>
                    
                    {auth.user.role === 'admin' && (
                        <Link 
                            href={route("task.create")} 
                            className="bg-blue-600 py-2 px-5 text-white rounded-md shadow-md transition-all hover:bg-blue-700 font-medium"
                        >
                            {/* Add new */} {translations.add_new}
                        </Link>
                    )}
                </div>
            }
        >
            {/* <Head title="Tasks" /> */}
            <Head title={translations.tasks} />

            
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-md sm:rounded-lg dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <TasksTable 
                                tasks={tasks} 
                                queryParams={queryParams} 
                                success={success}
                                translations={translations} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}