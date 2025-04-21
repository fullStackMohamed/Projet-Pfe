import { TASK_STATUS_TEXT_MAP, TASK_STATUS_CLASS_MAP } from "@/constants";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { TASK_PRIORITY_CLASS_MAP, TASK_PRIORITY_TEXT_MAP } from "@/constants";

export default function Show({auth, task, translations}) {
       return (
           <AuthenticatedLayout
              user= {auth.user}
              header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    {/* {`Tasks "${task.name}"`} */}
                    {` ${translations.task} "${task.name}" `}
                    </h2>

                    <Link href={route("task.edit", task.id)} className="bg-emerald-500 py-1 px-3 text-white rounded
                    shadow transition-all hover:bg-emerald-600">
                        {/* Edit */} {translations.edit}
                    </Link>
                </div>
              } 
              >
                {/* <Head title={`Task "${task.name}"`} />   */}
                <Head title={` ${translations.task} "${task.name}" `} />   
 
                {/* <pre> {JSON.stringify(task)}</pre> */}
   
            <div className="pb-12">
                  <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                  <div>
                    <img 
                    src={task.image_path}
                    alt=""
                    className="w-full h-64 object-cover" />
                  </div>   

              <div className="p-6 text-gray-900 dark:text-100">
                <div className="grid gap-1 grid-cols-2 mt-2">
                    <div>
                        <div>
                            <label className="font-bold text-lg dark:text-gray-200">{/*Task ID*/} {translations.task_id} </label>
                            <p className="mt-1 dark:text-white">{task.id}</p>    
                        </div>       

                        <div className="mt-4">
                            <label className="font-bold text-lg dark:text-gray-200">{/*Task Name*/} {translations.task_name}</label>
                            <p className="mt-1 dark:text-white">{task.name}</p>    
                        </div> 

                        <div className="mt-4">
                            <label className="font-bold text-lg dark:text-gray-200">{/*Task Status*/} {translations.task_status}</label>
                            <p className="mt-1 dark:text-white"> 
                                <span className={
                                    "px-2 py-1 rounded text-white " +
                                    TASK_STATUS_CLASS_MAP[task.status]
                                }>
                                    {TASK_STATUS_TEXT_MAP[task.status]}
                                </span>
                            </p>    
                        </div> 

                        <div className="mt-4">
                            <label className="font-bold text-lg dark:text-gray-200">{/*Task Priority*/} {translations.task_priority}</label>
                            <p className="mt-1 dark:text-white"> 
                                <span className={
                                    "px-2 py-1 rounded text-white " +
                                    TASK_PRIORITY_CLASS_MAP[task.priority]
                                }>
                                    {TASK_PRIORITY_TEXT_MAP[task.priority]}
                                </span>
                            </p>    
                        </div> 
        
                        <div className="mt-4">
                            <label className="font-bold text-lg dark:text-gray-200">{/*Created By*/} {translations.created_by}</label>
                            <p className="mt-1 dark:text-white">{task.createdBy.name}</p>    
                        </div> 
                    </div>

                    <div>
                        <div>
                            <label className="font-bold text-lg dark:text-gray-200">{/*Due Date*/} {translations.due_date}</label>
                            <p className="mt-1 dark:text-white">{task.due_date}</p>    
                        </div>   

                        <div className="mt-4">
                            <label className="font-bold text-lg dark:text-gray-200">{/*Create Date*/} {translations.create_date}</label>
                            <p className="mt-1 dark:text-white">{task.created_at}</p>    
                        </div>  

                        <div className="mt-4">
                            <label className="font-bold text-lg dark:text-gray-200">{/*Updated By*/} {translations.updated_by}</label>
                            <p className="mt-1 dark:text-white">{task.updatedBy.name}</p>    
                        </div>

                        <div className="mt-4">
                            <label className="font-bold text-lg dark:text-gray-200">{/*Project*/} {translations.project}</label>
                            <p className="mt-1 dark:text-white">
                                <Link 
                                href={route("project.show", task.project.id)}
                                className="hover:underline"
                                >
                                    {task.project.name}
                                </Link>
                            </p>    
                        </div> 
                        
                        <div className="mt-4">
                            <label className="font-bold text-lg dark:text-gray-200">{/*Assigned User*/} {translations.assigned_user}</label>
                            <p className="mt-1 dark:text-white">{task.assignedUser.name}</p>    
                        </div>   
                    </div>
                </div> 

                <div className="mt-4">
                    <label className="font-bold text-lg dark:text-gray-200">{/*Task Description*/} {translations.description}</label>
                    <p className="mt-1 dark:text-white">{task.description}</p>    
                </div>  
              </div>

              </div>    
                  </div> 
              </div>       

           </AuthenticatedLayout>   
       )       
}


