// import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
// import { Head, Link, router } from "@inertiajs/react";
// import Pagination from "@/Components/Pagination";
// import TextInput from "@/Components/TextInput";
// import TableHeading from "@/Components/TableHeading";

// export default function Index({auth, users, queryParams = null,
//     success
//  }) {
//     queryParams = queryParams || {}
//     const searchFieldChanged = (name, value) => {
//         if (value) {
//             queryParams[name] = value
//         } else {
//             delete queryParams[name]
//         }

//         router.get(route('user.index'), queryParams)
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
//         router.get(route('user.index'), queryParams)
//     };

//     const deleteUser = (user) => {
//         if(!window.confirm('Are you sure you want to delete the user?'))
//         {
//             return;
//         }   
//             router.delete(route('user.destroy', user.id)) 
//     }
  

//     return (
//             <AuthenticatedLayout

//                 user= {auth.user}
//                 header={
//                 <div className="flex justify-between items-center"> 
//                     <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
//                         Users                       
//                     </h2>
//                     <Link href={route("user.create")} className="bg-emerald-500 py-1 px-3 text-white rounded
//                     shadow transition-all hover:bg-emerald-600">
//                         Add new
//                     </Link>
//                 </div>  
//             }
//             >
            
//             <Head title="Users" />
//             <div className="py-12">
//                 <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
//                 { success && (
//                 <div className="bg-emerald-500 py-2 px-4 text-white rounded mb-4">
//                     {success}
//                 </div>
//                 )}
//                     <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
//                         <div className="p-6 text-gray-900 dark:text-gray-100">
//                            {/* Users */}
//                            {/* <pre> {JSON.stringify(users, undefined, 2)}</pre> */}
                           
//                            <div className="overflow-auto">
//                            <table className="w-full text-sm text-left rtl:text-right
//                            text-gray-500 dark:text-gray-400">
//                             <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
//                                         <tr className="text-nowrap">
//                                            <TableHeading name="id" sort_field={queryParams.sort_field} sort_direction={queryParams.sort_direction} sortChanged={sortChanged} >
//                                               ID
//                                            </TableHeading>

//                                             <TableHeading name="name" sort_field={queryParams.sort_field} sort_direction={queryParams.sort_direction} sortChanged={sortChanged} >
//                                               Name
//                                             </TableHeading>

//                                             <TableHeading name="email" sort_field={queryParams.sort_field} sort_direction={queryParams.sort_direction} sortChanged={sortChanged} >
//                                                Email
//                                            </TableHeading>

//                                            <TableHeading name="created_at" sort_field={queryParams.sort_field} sort_direction={queryParams.sort_direction} sortChanged={sortChanged} >
//                                               Create Date
//                                            </TableHeading>
                                          
//                                             <th className="px-3 py-3">Actions</th>
//                                         </tr>
//                                     </thead>
//                             <thead className="text-xs text-gray-700 uppercase 
//                                 bg-gray-50 dark:bg-gray-700 dark:text-gray-400
//                                 border-b-2 border-gray-500">
//                                     <tr className="text-nowrap">
//                                         <th className="px-3 py-3"></th>
//                                         <th className="px-3 py-3">
//                                             <TextInput className="w-full"
//                                             defaultValue={queryParams.name}
//                                             placeholder="User Name"
//                                             onBlur={e => searchFieldChanged('name', e.target.value)}
//                                             onKeyPress={e => onKeyPress('name', e)} />
//                                         </th>
//                                         <th className="px-3 py-3">
//                                         <TextInput className="w-full"
//                                             defaultValue={queryParams.email}
//                                             placeholder="User Email"
//                                             onBlur={e => searchFieldChanged('email', e.target.value)}
//                                             onKeyPress={e => onKeyPress('email', e)} />
//                                         </th>
//                                         <th className="px-3 py-3"></th>
//                                         <th className="px-3 py-3"></th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {users.data.map((user) => (
//                                         <tr className="bg-white border-b dark:bg-gray-800
//                                         dark:border-gray-700" key={user.id}>
//                                             <td className="px-3 py-2">{user.id}</td>
                                         
//                                             <th className="px-3 py-2 text-gray-100 text-nowrap">
//                                                 {user.name}                                               
//                                             </th>

//                                             <td className="px-3 py-2">
//                                                 {user.email}                                               
//                                             </td>

//                                             <td className="px-3 py-2 text-nowrap">{user.created_at}</td>
//                                             <td className="px-3 py-2 text-nowrap">
//                                             <Link href={route('user.edit', user.id)}
//                                                 className="font-medium text-blue-600 
//                                                 dark:text-blue-500 hover:underline mx-1"
//                                                 >
//                                                     Edit
//                                                 </Link>

//                                                 <button
//                                                 onClick={(e) => deleteUser(user)}
//                                                 href={route('user.destroy', user.id)}
//                                                 className="font-medium text-red-600 
//                                                 dark:text-red-500 hover:underline mx-1"
//                                                 >
//                                                     Delete
//                                                 </button>
//                                             </td>

//                                     </tr>
//                                     ))}
                                    
//                                 </tbody>
//                            </table>
//                            </div>
//                            <Pagination links={users.meta.links}/>
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
import TextInput from "@/Components/TextInput";
import TableHeading from "@/Components/TableHeading";

export default function Index({auth, users, queryParams = null,
    success,
    translations
 }) {
    queryParams = queryParams || {}
    const searchFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value
        } else {
            delete queryParams[name]
        }

        router.get(route('user.index'), queryParams)
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
        router.get(route('user.index'), queryParams)
    };

    const deleteUser = (user) => {
        // if(!window.confirm('Are you sure you want to delete the user?'))
        if(!window.confirm(translations.confirm_delete))

        {
            return;
        }   
            router.delete(route('user.destroy', user.id)) 
    }
  

    return (
            <AuthenticatedLayout

                user= {auth.user}
                header={
                <div className="flex justify-between items-center"> 
                    <h2 className="text-xl font-semibold leading-tight text-slate-800 dark:text-slate-200">
                        {/*Users*/} {translations.users}
                    </h2>
                    <Link href={route("user.create")} className="bg-blue-600 py-2 px-5 text-white rounded-md
                    shadow-md transition-all hover:bg-blue-700 font-medium">
                        {/* Add new */} {translations.add_new}
                    </Link>
                </div>  
            }
            >
            
            {/* <Head title="Users" /> */}
            <Head title={translations.users} />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                { success && (
                <div className="bg-blue-500 py-3 px-5 text-white rounded-md mb-6 shadow-md">
                    {success}
                </div>
                )}
                    <div className="overflow-hidden bg-white shadow-md sm:rounded-lg dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                           {/* Users */}
                           {/* <pre> {JSON.stringify(users, undefined, 2)}</pre> */}
                           
                           <div className="overflow-auto">
                           <table className="w-full text-sm text-left rtl:text-right
                           text-slate-600 dark:text-slate-300">
                            <thead className="text-xs font-medium text-slate-700 uppercase bg-slate-100 dark:bg-slate-700 dark:text-slate-300 border-b border-slate-300 dark:border-slate-600">
                                        <tr className="text-nowrap">
                                           <TableHeading name="id" sort_field={queryParams.sort_field} sort_direction={queryParams.sort_direction} sortChanged={sortChanged} >
                                              ID
                                           </TableHeading>

                                            <TableHeading name="name" sort_field={queryParams.sort_field} sort_direction={queryParams.sort_direction} sortChanged={sortChanged} >
                                              {/* Name */} {translations.name}
                                            </TableHeading>

                                            <TableHeading name="email" sort_field={queryParams.sort_field} sort_direction={queryParams.sort_direction} sortChanged={sortChanged} >
                                               {/* Email */} {translations.email}
                                           </TableHeading>

                                           <TableHeading name="created_at" sort_field={queryParams.sort_field} sort_direction={queryParams.sort_direction} sortChanged={sortChanged} >
                                              {/* Create Date */} {translations.create_date}
                                           </TableHeading>
                                          
                                            <th className="px-4 py-3">{/*Actions*/} {translations.actions}</th>
                                        </tr>
                                    </thead>
                            <thead className="text-xs text-slate-700 
                                bg-slate-50 dark:bg-slate-700 dark:text-slate-300
                                border-b border-slate-300 dark:border-slate-600">
                                    <tr className="text-nowrap">
                                        <th className="px-4 py-3"></th>
                                        <th className="px-4 py-3">
                                            <TextInput className="w-full"
                                            defaultValue={queryParams.name}
                                            // placeholder="User Name"
                                            placeholder={translations.user_name}
                                            onBlur={e => searchFieldChanged('name', e.target.value)}
                                            onKeyPress={e => onKeyPress('name', e)} />
                                        </th>
                                        <th className="px-4 py-3">
                                        <TextInput className="w-full"
                                            defaultValue={queryParams.email}
                                            // placeholder="User Email"
                                            placeholder={translations.user_email}
                                            onBlur={e => searchFieldChanged('email', e.target.value)}
                                            onKeyPress={e => onKeyPress('email', e)} />
                                        </th>
                                        <th className="px-4 py-3"></th>
                                        <th className="px-4 py-3"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.data.map((user) => (
                                        <tr className="bg-white border-b dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700
                                        dark:border-slate-700" key={user.id}>
                                            <td className="px-4 py-3 text-slate-500 dark:text-slate-400">{user.id}</td>
                                         
                                            <th className="px-4 py-3 text-slate-800 dark:text-slate-200 text-nowrap font-medium">
                                                {user.name}                                               
                                            </th>

                                            <td className="px-4 py-3">
                                                {user.email}                                               
                                            </td>

                                            <td className="px-4 py-3 text-nowrap text-slate-500 dark:text-slate-400">{user.created_at}</td>
                                            <td className="px-4 py-3 text-nowrap">
                                            <Link href={route('user.edit', user.id)}
                                                className="font-medium text-blue-600 
                                                dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mx-2"
                                                >
                                                    {/* Edit */} {translations.edit}
                                                </Link>

                                                <button
                                                onClick={(e) => deleteUser(user)}
                                                href={route('user.destroy', user.id)}
                                                className="font-medium text-red-600 
                                                dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 mx-2"
                                                >
                                                    {/* Delete */} {translations.delete}
                                                </button>
                                            </td>

                                    </tr>
                                    ))}
                                    
                                </tbody>
                           </table>
                           </div>
                           <Pagination links={users.meta.links}/>
                        </div>
                    </div>
                </div>
            </div>


                            
              </AuthenticatedLayout>
        )      
}