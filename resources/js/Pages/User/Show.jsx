import { USER_STATUS_TEXT_MAP, USER_STATUS_CLASS_MAP } from "@/constants";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import TasksTable from "../Task/TasksTable";


export default function Show({auth, user, tasks, queryParams}) {
       return (
           <AuthenticatedLayout
              user= {auth.user}
              header={
              <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    {`Users "${user.name}"`}
              </h2>
              } 
              >
                  <Head title={`User "${user.name}"`} />   
                  <pre> {JSON.stringify(user)}</pre>
            
   
              <div className="pb-12">
                  <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                  <div>
                    <img 
                    src={user.image_path}
                    alt=""
                    className="w-full h-64 object-cover" />
                  </div>   

              <div className="p-6 text-gray-900 dark:text-100">
                <div className="grid gap-1 grid-cols-2 mt-2">
                    <div>
                        <div>
                            <label className="font-bold text-lg dark:text-gray-200">User ID</label>
                            <p className="mt-1 dark:text-white">{user.id}</p>    
                        </div>       

                        <div className="mt-4">
                            <label className="font-bold text-lg dark:text-gray-200">User Name</label>
                            <p className="mt-1 dark:text-white">{user.name}</p>    
                        </div> 

                        <div className="mt-4">
                            <label className="font-bold text-lg dark:text-gray-200">User Status</label>
                            <p className="mt-1 dark:text-white"> 
                                <span className={
                                    "px-2 py-1 rounded text-white " +
                                    USER_STATUS_CLASS_MAP[user.status]
                                }>
                                    {USER_STATUS_TEXT_MAP[user.status]}
                                </span>
                            </p>    
                        </div> 

                        <div className="mt-4">
                            <label className="font-bold text-lg dark:text-gray-200">Created By</label>
                            <p className="mt-1 dark:text-white">{user.createdBy.name}</p>    
                        </div> 
                    </div>

                    <div>
                        <div>
                            <label className="font-bold text-lg dark:text-gray-200">Due Date</label>
                            <p className="mt-1 dark:text-white">{user.due_date}</p>    
                        </div>   

                        <div className="mt-4">
                            <label className="font-bold text-lg dark:text-gray-200">Create Date</label>
                            <p className="mt-1 dark:text-white">{user.created_at}</p>    
                        </div>  

                        <div className="mt-4">
                            <label className="font-bold text-lg dark:text-gray-200">Updated By</label>
                            <p className="mt-1 dark:text-white">{user.updatedBy.name}</p>    
                        </div>   
                    </div>
                </div> 

                <div className="mt-4">
                    <label className="font-bold text-lg dark:text-gray-200">User Description</label>
                    <p className="mt-1 dark:text-white">{user.description}</p>    
                </div>  
              </div>

              </div>    
                  </div> 
              </div>       


                <div className="py-12">
                  <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
              <div className="p-6 text-gray-900 dark:text-100">
                        <TasksTable tasks={tasks} queryParams={queryParams} hideUserColumn={true} />
                
              </div>

              </div>    
                  </div> 
              </div>              
 
           </AuthenticatedLayout>   
       )       
}


