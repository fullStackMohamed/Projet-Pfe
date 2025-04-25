// import TableHeading from "@/Components/TableHeading";
// import Pagination from "@/Components/Pagination";
// import {TASK_STATUS_TEXT_MAP, TASK_STATUS_CLASS_MAP} from "@/constants.jsx";
// import TextInput from "@/Components/TextInput";
// import SelectInput from "@/Components/SelectInput";
// import { Link, router, usePage } from "@inertiajs/react";


// export default function TasksTable({tasks, success, queryParams=null, hideProjectColumn=false }) {
//         const user = usePage().props.auth.user; 
//         const { auth } = usePage().props;
//         console.log(auth.user);


//        queryParams = queryParams || {}
      
//         const searchFieldChanged = (name, value) => {
//               if (value) {
//                     queryParams[name] = value
//                 } else {
//                     delete queryParams[name]
//                 }
//                 {auth.user.role == 'admin' &&
//                     router.get(route('task.index'), queryParams)
//                 } 
//                 {auth.user.role == 'user' &&
//                 router.get(route('myTasks.index'), queryParams)
//                 }  
//             }
        
//             const onKeyPress = (name, e) => {
//                 if (e.key !== 'Enter') return;
        
//                 searchFieldChanged(name, e.target.value);
//             }
        
//             const sortChanged = (name) => {
//                 if (name === queryParams.sort_field) {
//                     if (queryParams.sort_direction === "asc") {
//                         queryParams.sort_direction = "desc";
//                     } else {
//                         queryParams.sort_direction = "asc";
//                     }
//                 } else {
//                     queryParams.sort_field = name;
//                     queryParams.sort_direction = 'asc';
//                 }
//                 {auth.user.role == "admin" &&
//                 router.get(route('task.index'), queryParams)
//                 }
//                 {auth.user.role == "user" &&
//                     router.get(route('myTasks.index'), queryParams)
//                 }
//             };   

//         const deleteTask = (task) => {
//             if(!window.confirm('Are you sure you want to delete the task?'))
//             {
//                 return;
//             }   
//                 { auth.user.role == "admin" &&
//                 router.delete(route('task.destroy', task.id)) 
//                 }
//                 { auth.user.role == "user" &&
//                     router.delete(route('myTasks.destroy', task.id)) 
//                 }
//             }
            
//             return (
//             <>
//                 { success && (
//                 <div className="bg-emerald-500 py-2 px-4 text-white rounded mb-4">
//                     {success}
//                 </div> )}
              
//                 <div className="overflow-auto">
//                            <table className="w-full text-sm text-left rtl:text-right
//                            text-gray-500 dark:text-gray-400">
//                             <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">                              
//                                         <tr className="text-nowrap">
//                                            <TableHeading name="id" sort_field={queryParams.sort_field} sort_direction={queryParams.sort_direction} sortChanged={sortChanged} >
//                                               ID
//                                            </TableHeading>

//                                             <th className="px-3 py-3">Image</th>

//                                             {!hideProjectColumn && ( <th className="px-3 py-3">Project Name</th> )}

//                                             <TableHeading name="name" sort_field={queryParams.sort_field} sort_direction={queryParams.sort_direction} sortChanged={sortChanged} >
//                                               Name
//                                             </TableHeading>

//                                             <TableHeading name="status" sort_field={queryParams.sort_field} sort_direction={queryParams.sort_direction} sortChanged={sortChanged} >
//                                                 Status
//                                            </TableHeading>
//                                            <TableHeading name="created_at" sort_field={queryParams.sort_field} sort_direction={queryParams.sort_direction} sortChanged={sortChanged} >
//                                               Create Date
//                                            </TableHeading>
//                                            <TableHeading name="due_date" sort_field={queryParams.sort_field} sort_direction={queryParams.sort_direction} sortChanged={sortChanged} >
//                                               Due Date
//                                            </TableHeading>
//                                             <th className="px-3 py-3">Created By</th>
//                                             <th className="px-3 py-3">Actions</th>
//                                         </tr>
//                                     </thead>
//                             <thead className="text-xs text-gray-700 uppercase 
//                                 bg-gray-50 dark:bg-gray-700 dark:text-gray-400
//                                 border-b-2 border-gray-500">
//                                     <tr className="text-nowrap">
//                                         <th className="px-3 py-3"></th>
//                                         <th className="px-3 py-3"></th>
//                                         {!hideProjectColumn && <th className="px-3 py-3"></th>}
//                                         <th className="px-3 py-3">
//                                             <TextInput className="w-full"
//                                             defaultValue={queryParams.name}
//                                             placeholder="Task Name"
//                                             onBlur={e => searchFieldChanged('name', e.target.value)}
//                                             onKeyPress={e => onKeyPress('name', e)} />
//                                         </th>
//                                         <th className="px-3 py-3">
//                                             <SelectInput 
//                                                 className="w-full" 
//                                                 defaultValue={queryParams.status}
//                                                 onChange={ (e) =>
//                                                 searchFieldChanged('status', e.target.value)
//                                             } >
//                                                 <option value="">Select Status</option>
//                                                 <option value="pending">Pending</option>
//                                                 <option value="in_progress">In Progress</option>
//                                                 <option value="completed">Completed</option>
//                                             </SelectInput>
//                                         </th>
//                                         <th className="px-3 py-3"></th>
//                                         <th className="px-3 py-3"></th>
//                                         <th className="px-3 py-3"></th>
//                                         <th className="px-3 py-3"></th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {tasks.data.map((task) => (
//                                         <tr className="bg-white border-b dark:bg-gray-800
//                                         dark:border-gray-700" key={task.id}>
//                                             <td className="px-3 py-2">{task.id}</td>
//                                             <td> <img src={task.image_path} style={{width: 60}} />
//                                             </td>
//                                             {!hideProjectColumn && ( 
//                                                   <td className="px-3 py-2">{task.project.name}</td>
//                                             )}
//                                             <th className="px-3 py-2  text-gray-100 hover:underline">
//                                                 {auth.user.role == "admin" &&
//                                                 <Link href={route('task.show', task.id)}>
//                                                     {task.name}
//                                                 </Link>
//                                                }
//                                                 {auth.user.role == "user" &&
//                                                 <Link href={route('myTasks.show', task.id)}>
//                                                     {task.name}
//                                                 </Link>
//                                                }
//                                             </th>
//                                             <td className="px-3 py-2">
//                                                 {/* {task.status} */}
//                                                 <span className={
//                                                     "px-2 py-1 text-nowrap rounded text-white " +
//                                                     TASK_STATUS_CLASS_MAP[task.status]
//                                                     }>
//                                                        {TASK_STATUS_TEXT_MAP[task.status]}
//                                                 </span>
//                                             </td>
//                                             <td className="px-3 py-2 text-nowrap">{task.created_at}</td>
//                                             <td className="px-3 py-2 text-nowrap">{task.due_date}</td>
//                                             <td className="px-3 py-2">{task.createdBy.name}</td>
//                                             <td className="px-3 py-2 text-nowrap">
                                            
//                                             {auth.user.role == 'admin' &&
                                           
//                                             <Link href={route('task.edit', task.id)}
//                                                 className="font-medium text-blue-600 
//                                                 dark:text-blue-500 hover:underline mx-1"
//                                                 >
//                                                     Edit
//                                             </Link>
//                                             } 

//                                             {auth.user.role == 'user' &&
                                           
//                                            <Link href={route('myTasks.edit', task.id)}
//                                                className="font-medium text-blue-600 
//                                                dark:text-blue-500 hover:underline mx-1"
//                                                >
//                                                    Edit
//                                             </Link>
//                                             } 

//                                             {
//                                             auth.user.role === 'admin' && 
//                                                 <button 
//                                                 onClick={(e) => deleteTask(task)}
//                                                 className="font-medium text-red-600 
//                                                 dark:text-red-500 hover:underline mx-1"
//                                                 >
//                                                     Delete
//                                                 </button>
//                                             }
                                                
                                            
//                                             </td>

//                                     </tr>
//                                     ))}
                                    
//                                 </tbody>
//                            </table>
//               </div>
//               <Pagination links={tasks.meta.links}/>
//           </>
//        )
// }


import TableHeading from "@/Components/TableHeading";
import Pagination from "@/Components/Pagination";
// import { TASK_STATUS_TEXT_MAP, TASK_STATUS_CLASS_MAP } from "@/constants.jsx";
import { TASK_STATUS_CLASS_MAP } from "@/constants.jsx";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";
import { Link, router, usePage } from "@inertiajs/react";

import { useTranslations } from "@/useTranslations";

export default function TasksTable({ tasks, success, queryParams = null, hideProjectColumn = false, translations }) {
    const { auth } = usePage().props;
    
    queryParams = queryParams || {};
    
    const searchFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }
        
        if (auth.user.role === 'admin') {
            router.get(route('task.index'), queryParams);
        } 
        
        if (auth.user.role === 'user') {
            router.get(route('myTasks'), queryParams);
        }
    };
    
    const onKeyPress = (name, e) => {
        if (e.key !== 'Enter') return;
        searchFieldChanged(name, e.target.value);
    };
    
    const sortChanged = (name) => {
        if (name === queryParams.sort_field) {
            if (queryParams.sort_direction === "asc") {
                queryParams.sort_direction = "desc";
            } else {
                queryParams.sort_direction = "asc";
            }
        } else {
            queryParams.sort_field = name;
            queryParams.sort_direction = 'asc';
        }
        
        if (auth.user.role === "admin") {
            router.get(route('task.index'), queryParams);
        }
        
        if (auth.user.role === "user") {
            router.get(route('myTasks'), queryParams);
        }
    };

    const deleteTask = (task) => {
        // if (!window.confirm('Are you sure you want to delete the task?'))
        if (!window.confirm(translations.confirm_delete))
        {
            return;
        }
        
        if (auth.user.role === "admin") {
            router.delete(route('task.destroy', task.id));
        }
        
        if (auth.user.role === "user") {
            router.delete(route('myTasks.destroy', task.id));
        }
    };

    const { TASK_STATUS_TEXT_MAP } = useTranslations();

    
    return (
        <>
            {success && (
                <div className="bg-blue-500 py-3 px-5 text-white rounded-md mb-6 shadow-md">
                    {success}
                </div>
            )}
            
            <div className="overflow-auto">
                <table className="w-full text-sm text-left rtl:text-right text-slate-600 dark:text-slate-300">
                    <thead className="text-xs font-medium text-slate-700 uppercase bg-slate-100 dark:bg-slate-700 dark:text-slate-300 border-b border-slate-300 dark:border-slate-600">
                        <tr className="text-nowrap">
                            <TableHeading 
                                name="id" 
                                sort_field={queryParams.sort_field} 
                                sort_direction={queryParams.sort_direction} 
                                sortChanged={sortChanged}
                            >
                                {/* ID */} {translations.id}
                                {console.log(translations)}
                            </TableHeading>
                            
                            <th className="px-4 py-3">{/*Image*/} {translations.image}</th>
                            
                            {!hideProjectColumn && (
                                <th className="px-4 py-3">{/*Project Name*/} {translations.project_name} </th>
                            )}
                            
                            <TableHeading 
                                name="name" 
                                sort_field={queryParams.sort_field} 
                                sort_direction={queryParams.sort_direction} 
                                sortChanged={sortChanged}
                            >
                                {/* Name */} {translations.name}
                            </TableHeading>
                            
                            <TableHeading 
                                name="status" 
                                sort_field={queryParams.sort_field} 
                                sort_direction={queryParams.sort_direction} 
                                sortChanged={sortChanged}
                            >
                                {/* Status */} {translations.status}
                            </TableHeading>
                            
                            <TableHeading 
                                name="created_at" 
                                sort_field={queryParams.sort_field} 
                                sort_direction={queryParams.sort_direction} 
                                sortChanged={sortChanged}
                            >
                                {/* Create Date */} {translations.create_date}
                            </TableHeading>
                            
                            <TableHeading 
                                name="due_date" 
                                sort_field={queryParams.sort_field} 
                                sort_direction={queryParams.sort_direction} 
                                sortChanged={sortChanged}
                            >
                                {/* Due Date */} {translations.due_date}
                            </TableHeading>
                            
                            <th className="px-4 py-3">{/*Created By*/} {translations.created_by}</th>
                            <th className="px-4 py-3">{/*Actions*/} {translations.actions}</th>
                        </tr>
                    </thead>
                    
                    <thead className="text-xs text-slate-700 bg-slate-50 dark:bg-slate-700 dark:text-slate-300 border-b border-slate-300 dark:border-slate-600">
                        <tr className="text-nowrap">
                            <th className="px-4 py-3"></th>
                            <th className="px-4 py-3"></th>
                            {!hideProjectColumn && <th className="px-4 py-3"></th>}
                            <th className="px-4 py-3">
                                <TextInput 
                                    className="w-full"
                                    defaultValue={queryParams.name}
                                    // placeholder="Task Name"
                                    placeholder={translations.task_name}
                                    onBlur={e => searchFieldChanged('name', e.target.value)}
                                    onKeyPress={e => onKeyPress('name', e)} 
                                />
                            </th>
                            <th className="px-4 py-3">
                                <SelectInput 
                                    className="w-full" 
                                    defaultValue={queryParams.status}
                                    onChange={(e) => searchFieldChanged('status', e.target.value)}
                                >
                                    <option value="">{/*Select Status*/} {translations.select_status}</option>
                                    <option value="pending">{/*Pending*/} {translations.pending}</option>
                                    <option value="in_progress">{/*In Progress*/} {translations.in_progress}</option>
                                    <option value="completed">{/*Completed*/} {translations.completed}</option>
                                </SelectInput>
                            </th>
                            <th className="px-4 py-3"></th>
                            <th className="px-4 py-3"></th>
                            <th className="px-4 py-3"></th>
                            <th className="px-4 py-3"></th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {tasks.data.map((task) => (
                            <tr className="bg-white border-b dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 dark:border-slate-700" key={task.id}>
                                <td className="px-4 py-3 text-slate-500 dark:text-slate-400">{task.id}</td>
                                <td className="px-4 py-3">
                                    <img src={task.image_path} alt={task.name} className="w-23 h-16 object-cover rounded-md" />
                                </td>
                                
                                {!hideProjectColumn && (
                                    <td className="px-4 py-3">{task.project.name}</td>
                                )}
                                
                                <th className="px-4 py-3 text-slate-800 dark:text-slate-200 text-nowrap hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    {auth.user.role === "admin" && (
                                        <Link href={route('task.show', task.id)}>
                                            {task.name}
                                        </Link>
                                    )}
                                    
                                    {auth.user.role === "user" && (
                                        <Link href={route('myTasks.show', task.id)}>
                                            {task.name}
                                        </Link>
                                    )}
                                </th>
                                
                                <td className="px-4 py-3">
                                    <span className={
                                        "px-2 py-1 text-nowrap rounded text-white " +
                                        TASK_STATUS_CLASS_MAP[task.status]
                                    }>
                                        {TASK_STATUS_TEXT_MAP[task.status]}
                                    </span>
                                </td>
                                
                                <td className="px-4 py-3 text-nowrap text-slate-500 dark:text-slate-400">{task.created_at}</td>
                                <td className="px-4 py-3 text-nowrap text-slate-500 dark:text-slate-400">{task.due_date}</td>
                                <td className="px-4 py-3">{task.createdBy.name}</td>
                                
                                <td className="px-4 py-3 text-nowrap">
                                    {auth.user.role === 'admin' && (
                                        <Link 
                                            href={route('task.edit', task.id)}
                                            className="font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mx-2"
                                        >
                                            {/*Edit*/} {translations.edit}
                                        </Link>
                                    )}
                                    
                                    {auth.user.role === 'user' && task.assigned_user_id === auth.user.id && (
                                        <Link 
                                            href={route('myTasks.edit', task.id)}
                                            className="font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mx-2"
                                        >
                                            {/*Edit*/} {translations.edit} 
                                        </Link>
                                    )}
                                       <span className="text-nowrap text-gray-400 italic">{auth.user.role === 'user' && task.assigned_user_id !== auth.user.id && translations.not_allowed}</span> 

                                    
                                    {auth.user.role === 'admin' && (
                                        <button 
                                            onClick={() => deleteTask(task)}
                                            className="font-medium text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 mx-2"
                                        >
                                            {/*Delete*/} {translations.delete}
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            <Pagination links={tasks.meta.links} />
        </>
    );
}