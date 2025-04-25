// import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
// import { Head, Link, router } from "@inertiajs/react";
// import Pagination from "@/Components/Pagination";
// import {PROJECT_STATUS_TEXT_MAP, PROJECT_STATUS_CLASS_MAP} from "@/constants.jsx";
// import TextInput from "@/Components/TextInput";
// import SelectInput from "@/Components/SelectInput";
// //import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/16/solid';
// import TableHeading from "@/Components/TableHeading";

// export default function Index({auth, projects, queryParams = null,
//     success
//  }) {
//     queryParams = queryParams || {}
//     const searchFieldChanged = (name, value) => {
//         if (value) {
//             queryParams[name] = value
//         } else {
//             delete queryParams[name]
//         }

//         router.get(route('project.index'), queryParams)
//     }

//     const onKeyPress = (name, e) => {
//         if (e.key !== 'Enter') return;

//         searchFieldChanged(name, e.target.value);
//     }

//     const sortChanged = (name) => {
//         if (name === queryParams.sort_field) {
//             if (queryParams.sort_direction === "asc") {
//                 queryParams.sort_direction = "desc";
//             } else {
//                 queryParams.sort_direction = "asc";
//             }
//         } else {
//             queryParams.sort_field = name;
//             queryParams.sort_direction = 'asc';
//         }
//         router.get(route('project.index'), queryParams)
//     };

//     const deleteProject = (project) => {
//         if(!window.confirm('Are you sure you want to delete the project?'))
//         {
//             return;
//         }   
//             router.delete(route('project.destroy', project.id)) 
//     }
  

//     return (
//             <AuthenticatedLayout

//                 user= {auth.user}
//                 header={
//                 <div className="flex justify-between items-center"> 
//                     <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
//                         Projects                       
//                     </h2>

//                     {
//                         auth.user.role === 'admin' &&
//                     <Link href={route("project.create")} className="bg-emerald-500 py-1 px-3 text-white rounded
//                     shadow transition-all hover:bg-emerald-600">
//                         Add new
//                     </Link>
//                 }
//                 </div>  
//             }
//             >
            
//             <Head title="Projects"/>
//             <div className="py-12">
//                 <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
//                 { success && (
//                 <div className="bg-emerald-500 py-2 px-4 text-white rounded mb-4">
//                     {success}
//                 </div>
//                 )}
//                     <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
//                         <div className="p-6 text-gray-900 dark:text-gray-100">
//                            {/* Projects */}
//                            {/* <pre> {JSON.stringify(projects, undefined, 2)}</pre> */}
                           
//                            <div className="overflow-auto">
//                            <table className="w-full text-sm text-left rtl:text-right
//                            text-gray-500 dark:text-gray-400">
//                             <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
//                                         <tr className="text-nowrap">
//                                            <TableHeading name="id" sort_field={queryParams.sort_field} sort_direction={queryParams.sort_direction} sortChanged={sortChanged} >
//                                               ID
//                                            </TableHeading>

//                                             <th className="px-3 py-3">Image</th>
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

//                                             {
//                                                 auth.user.role === 'admin' &&
//                                             <th className="px-3 py-3">Actions</th>
//                                             }
//                                         </tr>
//                                     </thead>
//                             <thead className="text-xs text-gray-700 uppercase 
//                                 bg-gray-50 dark:bg-gray-700 dark:text-gray-400
//                                 border-b-2 border-gray-500">
//                                     <tr className="text-nowrap">
//                                         <th className="px-3 py-3"></th>
//                                         <th className="px-3 py-3"></th>
//                                         <th className="px-3 py-3">
//                                             <TextInput className="w-full"
//                                             defaultValue={queryParams.name}
//                                             placeholder="Project Name"
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

//                                         {
//                                             auth.user.role === 'admin' &&
//                                         <th className="px-3 py-3"></th>
//                                         }
//                                     </tr>
//                                 </thead>
//                                 <tbody>             
//                                     {projects.data.map((project) => (
//                                         <tr className="bg-white border-b dark:bg-gray-800
//                                         dark:border-gray-700" key={project.id}>
//                                             <td className="px-3 py-2">{project.id}</td>
//                                             <td> <img src={project.image_path} style={{width: 60}} />
//                                             </td>

//                                             <th className="px-3 py-2 text-gray-100 text-nowrap hover:underline">
//                                                 <Link href={route('project.show', project.id)}>{project.name}</Link>
                                                
//                                             </th>
//                                             <td className="px-3 py-2">
//                                                 {/* {project.status} */}
//                                                 <span className={
//                                                     "px-2 py-1 rounded text-white " +
//                                                     PROJECT_STATUS_CLASS_MAP[project.status]
//                                                     }>
//                                                        {PROJECT_STATUS_TEXT_MAP[project.status]}
//                                                 </span>
//                                             </td>
//                                             <td className="px-3 py-2 text-nowrap">{project.created_at}</td>
//                                             <td className="px-3 py-2 text-nowrap">{project.due_date}</td>
//                                             <td className="px-3 py-2">{project.createdBy.name}</td>

//                                             {
//                                                 auth.user.role === 'admin' &&
//                                             <td className="px-3 py-2 text-nowrap">
                           
//                                             <Link href={route('project.edit', project.id)}
//                                                 className="font-medium text-blue-600 
//                                                 dark:text-blue-500 hover:underline mx-1"
//                                                 >
//                                                     Edit
//                                                 </Link>

//                                                 <button
//                                                 onClick={(e) => deleteProject(project)}
//                                                 href={route('project.destroy', project.id)}
//                                                 className="font-medium text-red-600 
//                                                 dark:text-red-500 hover:underline mx-1"
//                                                 >
//                                                     Delete
//                                                 </button>
//                                             </td>
//                                         }
                                             
//                                     </tr>
//                                     ))}
                                    
//                                 </tbody>
//                            </table>
//                            </div>
//                            <Pagination links={projects.meta.links}/>
//                         </div>
//                     </div>
//                 </div>
//             </div>
            
//               </AuthenticatedLayout>
//         )      
// }



import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import Pagination from "@/Components/Pagination";
// import {PROJECT_STATUS_TEXT_MAP, PROJECT_STATUS_CLASS_MAP} from "@/constants.jsx";
import { PROJECT_STATUS_CLASS_MAP} from "@/constants.jsx";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";
//import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/16/solid';
import TableHeading from "@/Components/TableHeading";

import { useTranslations } from "@/useTranslations";

export default function Index({auth, projects, queryParams = null,
    success, translations, isAdmin
 }) {
    queryParams = queryParams || {}
    const searchFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value
        } else {
            delete queryParams[name]
        }

        const routeToCall = isAdmin?route('project.index'):route('myProjects');
        router.get(routeToCall, queryParams);
        // router.get(route('project.index'), queryParams)
    }

    const onKeyPress = (name, e) => {
        if (e.key !== 'Enter') return;

        searchFieldChanged(name, e.target.value);
    }

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

        const routeToCall = isAdmin?route('project.index'):route('myProjects');
        router.get(routeToCall, queryParams);
        // router.get(route('project.index'), queryParams)
    };

    const deleteProject = (project) => {
        // if(!window.confirm('Are you sure you want to delete the project?'))
        if (!window.confirm(translations.delete_confirmation))
        {
            return;
        }   
            router.delete(route('project.destroy', project.id)) 
    }

    const { PROJECT_STATUS_TEXT_MAP } = useTranslations();
  

    return (
            <AuthenticatedLayout
                user= {auth.user}
                header={
                <div className="flex justify-between items-center"> 
                    <h2 className="text-xl font-semibold leading-tight text-slate-800 dark:text-slate-200">
                        {/* Projects*/} {translations.projects}
                    </h2>

                    {
                        auth.user.role === 'admin' &&
                    <Link href={route("project.create")} className="bg-blue-600 py-2 px-5 text-white rounded-md
                    shadow-md transition-all hover:bg-blue-700 font-medium">
                        {/*Add new*/} {translations.add_new}
                    </Link>
                }
                </div>  
            }
            >
            
            {/* <Head title="Projects"/> */}
            <Head title={translations.projects}/>

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                { success && (
                <div className="bg-blue-500 py-3 px-5 text-white rounded-md mb-6 shadow-md">
                    {success}
                </div>
                )}
                    <div className="overflow-hidden bg-white shadow-md sm:rounded-lg dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                           {/* Projects */}
                           {/* <pre> {JSON.stringify(projects, undefined, 2)}</pre> */}
                           
                           <div className="overflow-auto">
                           <table className="w-full text-sm text-left rtl:text-right
                           text-slate-600 dark:text-slate-300">
                            <thead className="text-xs font-medium text-slate-700 uppercase bg-slate-100 dark:bg-slate-700 dark:text-slate-300 border-b border-slate-300 dark:border-slate-600">
                                        <tr className="text-nowrap">
                                           <TableHeading name="id" sort_field={queryParams.sort_field} sort_direction={queryParams.sort_direction} sortChanged={sortChanged} >
                                              {/* ID */} {translations.id}
                                           </TableHeading>

                                            <th className="px-4 py-3">{/*Image*/} {translations.image}</th>
                                            <TableHeading name="name" sort_field={queryParams.sort_field} sort_direction={queryParams.sort_direction} sortChanged={sortChanged} >
                                              {/*Name*/} {translations.name}
                                            </TableHeading>

                                            <TableHeading name="status" sort_field={queryParams.sort_field} sort_direction={queryParams.sort_direction} sortChanged={sortChanged} >
                                                {/* Status */} {translations.status}
                                           </TableHeading>
                                           <TableHeading name="created_at" sort_field={queryParams.sort_field} sort_direction={queryParams.sort_direction} sortChanged={sortChanged} >
                                              {/* Create Date */} {translations.create_date}
                                           </TableHeading>
                                           <TableHeading name="due_date" sort_field={queryParams.sort_field} sort_direction={queryParams.sort_direction} sortChanged={sortChanged} >
                                              {/* Due Date */} {translations.due_date}
                                           </TableHeading>
                                            <th className="px-4 py-3">{/*Created By*/} {translations.created_by}</th>

                                            {
                                                auth.user.role === 'admin' &&
                                            <th className="px-4 py-3">{/*Actions*/} {translations.actions} </th>
                                            }
                                        </tr>
                                    </thead>
                            <thead className="text-xs text-slate-700 
                                bg-slate-50 dark:bg-slate-700 dark:text-slate-300
                                border-b border-slate-300 dark:border-slate-600">
                                    <tr className="text-nowrap">
                                        <th className="px-4 py-3"></th>
                                        <th className="px-4 py-3"></th>
                                        <th className="px-4 py-3">
                                            <TextInput className="w-full"
                                            defaultValue={queryParams.name}
                                            // placeholder="Project Name"
                                            placeholder={translations.project_name}
                                            onBlur={e => searchFieldChanged('name', e.target.value)}
                                            onKeyPress={e => onKeyPress('name', e)} />
                                        </th>
                                        <th className="px-4 py-3">
                                            <SelectInput 
                                                className="w-full" 
                                                defaultValue={queryParams.status}
                                                onChange={ (e) =>
                                                searchFieldChanged('status', e.target.value)
                                            } >
                                                <option value="">{/*Select Status*/} {translations.select_status}</option>
                                                <option value="pending">{/*Pending*/} {translations.pending}</option>
                                                <option value="in_progress">{/*In Progress*/}{translations.in_progress}</option>
                                                <option value="completed">{/*Completed*/}{translations.completed}</option>
                                            </SelectInput>
                                        </th>
                                        <th className="px-4 py-3"></th>
                                        <th className="px-4 py-3"></th>
                                        <th className="px-4 py-3"></th>

                                        {
                                            auth.user.role === 'admin' &&
                                        <th className="px-4 py-3"></th>
                                        }
                                    </tr>
                                </thead>
                                <tbody>             
                                    {projects.data.map((project) => (
                                        <tr className="bg-white border-b dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700
                                        dark:border-slate-700" key={project.id}>
                                            <td className="px-4 py-3 text-slate-500 dark:text-slate-400">{project.id}</td>
                                            <td className="px-4 py-3"> 
                                                <img src={project.image_path} className="w-16 h-16 object-cover rounded-md" />
                                            </td>
                                            {
                                            auth.user.role === 'admin' &&
                                            <th className="px-4 py-3 text-slate-800 dark:text-slate-200 text-nowrap hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                                <Link href={route('project.show', project.id)}>{project.name}</Link>            
                                            </th>
                                            }

                                            {auth.user.role === 'user' &&
                                            <th className="px-4 py-3 text-slate-800 dark:text-slate-200 text-nowrap hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                                <Link href={route('my-Project.show', project.id)}>{project.name}</Link>            
                                            </th>
                                            }
                                            <td className="px-4 py-3">
                                                {/* {project.status} */}
                                                <span className={
                                                    "px-3 py-1 rounded text-white font-medium text-xs " +
                                                    PROJECT_STATUS_CLASS_MAP[project.status]
                                                    }>
                                                       {PROJECT_STATUS_TEXT_MAP[project.status]}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-nowrap text-slate-500 dark:text-slate-400">{project.created_at}</td>
                                            <td className="px-4 py-3 text-nowrap text-slate-500 dark:text-slate-400">{project.due_date}</td>
                                            <td className="px-4 py-3 font-medium">{project.createdBy.name}</td>

                                            {
                                                auth.user.role === 'admin' &&
                                            <td className="px-4 py-3 text-nowrap">
                           
                                            <Link href={route('project.edit', project.id)}
                                                className="font-medium text-blue-600 
                                                dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mx-2"
                                                >
                                                    {/* Edit */} {translations.edit}
                                                </Link>

                                                <button
                                                onClick={(e) => deleteProject(project)}
                                                href={route('project.destroy', project.id)}
                                                className="font-medium text-red-600 
                                                dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 mx-2"
                                                >
                                                    {/* Delete */} {translations.delete}
                                                </button>
                                            </td>
                                        }
                                             
                                    </tr>
                                    ))}
                                    
                                </tbody>
                           </table>
                           </div>
                           <Pagination links={projects.meta.links}/>
                        </div>
                    </div>
                </div>
            </div>
            
            </AuthenticatedLayout>
        )      
}