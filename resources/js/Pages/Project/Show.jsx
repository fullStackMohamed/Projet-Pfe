// import { PROJECT_STATUS_TEXT_MAP, PROJECT_STATUS_CLASS_MAP } from "@/constants";
import { PROJECT_STATUS_CLASS_MAP } from "@/constants";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import TasksTable from "../Task/TasksTable";

import { useTranslations } from "@/useTranslations";

export default function Show({auth, success, project, tasks, queryParams, translations, trans}) {

        const { PROJECT_STATUS_TEXT_MAP, } = useTranslations();


        return (
           <AuthenticatedLayout
               user= {auth.user}
                header={
                <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    {/* {`Projects "${project.name}"`} */}
                    {` ${trans.project} "${project.name}" `}
                </h2>
                
                {
                auth.user.role === 'admin' &&
                <Link href={route("project.edit", project.id)} className="bg-emerald-500 py-1 px-3 text-white rounded
                shadow transition-all hover:bg-emerald-600">
                    {/* Edit */} {trans.edit}
                </Link>
                }
                </div>
              } 
              >
                  {/* <Head title={`Project "${project.name}"`} />    */}
                  <Head title={` ${trans.project} "${project.name}" `} />   

                  {/* <pre> {JSON.stringify(project)}</pre> */}
         
                <div className="pb-12">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                            <div>
                                <img 
                                src={project.image_path}
                                alt=""
                                className="w-full h-64 object-cover" />
                            </div>   

                            <div className="p-6 text-gray-900 dark:text-100">
                                <div className="grid gap-1 grid-cols-2 mt-2">
                                    <div>
                                        <div>
                                            <label className="font-bold text-lg dark:text-gray-200">{/*Project ID*/} {trans.project_id} </label>
                                            <p className="mt-1 dark:text-white">{project.id}</p>    
                                        </div>       

                                        <div className="mt-4">
                                            <label className="font-bold text-lg dark:text-gray-200">{/*Project Name*/} {trans.project_name}</label>
                                            <p className="mt-1 dark:text-white">{project.name}</p>    
                                        </div> 

                                        <div className="mt-4">
                                            <label className="font-bold text-lg dark:text-gray-200">{/*Project Status*/} {trans.project_status}</label>
                                            <p className="mt-1 dark:text-white"> 
                                                <span className={
                                                    "px-2 py-1 rounded text-white " +
                                                    PROJECT_STATUS_CLASS_MAP[project.status]
                                                }>
                                                    {PROJECT_STATUS_TEXT_MAP[project.status]}
                                                </span>
                                            </p>    
                                        </div> 

                                        <div className="mt-4">
                                            <label className="font-bold text-lg dark:text-gray-200">{/*Created By*/} {trans.created_by}</label>
                                            <p className="mt-1 dark:text-white">{project.createdBy.name}</p> 
                                        </div> 
                                    </div>

                                    <div>
                                        <div>
                                            <label className="font-bold text-lg dark:text-gray-200">{/*Due Date*/} {trans.due_date}</label>
                                            <p className="mt-1 dark:text-white">{project.due_date}</p>    
                                        </div>   

                                        <div className="mt-4">
                                            <label className="font-bold text-lg dark:text-gray-200">{/*Create Date*/} {trans.create_date}</label>
                                            <p className="mt-1 dark:text-white">{project.created_at}</p>    
                                        </div>  

                                        <div className="mt-4">
                                            <label className="font-bold text-lg dark:text-gray-200">{/*Updated By*/} {trans.updated_by}</label>
                                            <p className="mt-1 dark:text-white">{project.updatedBy.name}</p>    
                                        </div>   
                                    </div>

                                </div> 

                                <div className="mt-4">
                                    <label className="font-bold text-lg dark:text-gray-200">{/*Project Description*/} {trans.description}</label>
                                    <p className="mt-1 dark:text-white">{project.description}</p>    
                                </div>  
                            </div>

                        </div>    
                    </div> 
                </div>       


                <div className="py-12">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                            <div className="p-6 text-gray-900 dark:text-100">
                                <TasksTable tasks={tasks} success={success} queryParams={queryParams} hideProjectColumn={true} translations={translations} />              
                            </div>
                        </div>    
                    </div> 
                </div>              
 
           </AuthenticatedLayout>   
       )       
}


