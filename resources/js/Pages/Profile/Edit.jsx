// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
// import { Head } from '@inertiajs/react';
// import DeleteUserForm from './Partials/DeleteUserForm';
// import UpdatePasswordForm from './Partials/UpdatePasswordForm';
// import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

// export default function Edit({auth, mustVerifyEmail, status }) {
//     return (
//         <AuthenticatedLayout
//             user = {auth.user}
//             header={
//                 <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
//                     Profile
//                 </h2>
//             }
//         >
//             <Head title="Profile" />

//             <div className="py-12">
//                 <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
//                     <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800">
//                         <UpdateProfileInformationForm
//                             mustVerifyEmail={mustVerifyEmail}
//                             status={status}
//                             className="max-w-xl"
//                         />
//                     </div>

//                     <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800">
//                         <UpdatePasswordForm className="max-w-xl" />
//                     </div>

//                     <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800">
//                         <DeleteUserForm className="max-w-xl" />
//                     </div>
//                 </div>
//             </div>
//         </AuthenticatedLayout>
//     );
// }



import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({ auth, mustVerifyEmail, status, trans_Profile, trans_ProfileForm, trans_profilePass, trans_profileDel }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    {/* Profile */} {trans_Profile.title}
                </h2>
            }
        >
            {/* <Head title="Profile" /> */}
            <Head title={trans_Profile.title} />

            <div className="py-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-lg">
                    {status && (
                        <div className="mb-4 rounded-md bg-green-50 dark:bg-green-900/30 p-4">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-green-800 dark:text-green-200">{status}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="space-y-6">
                        <div className="bg-white dark:bg-gray-800 shadow sm:rounded-lg overflow-hidden">
                            <div className="px-4 py-5 sm:px-6 bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">{/*Profile Information*/} {trans_Profile.profile_info}</h3>
                                </div>
                            </div>
                            <div className="px-4 py-5 sm:p-6">
                                <UpdateProfileInformationForm
                                    mustVerifyEmail={mustVerifyEmail}
                                    status={status}
                                    trans_ProfileForm={trans_ProfileForm}
                                />
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 shadow sm:rounded-lg overflow-hidden">
                            <div className="px-4 py-5 sm:px-6 bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                    </svg>
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">{/*Update Password*/} {trans_Profile.update_password}</h3>
                                </div>
                            </div>
                            <div className="px-4 py-5 sm:p-6">
                                <UpdatePasswordForm trans_profilePass={trans_profilePass} />
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 shadow sm:rounded-lg overflow-hidden">
                            <div className="px-4 py-5 sm:px-6 bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 dark:text-red-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">{/*Delete Account*/} {trans_Profile.delete_account}</h3>
                                </div>
                            </div>
                            <div className="px-4 py-5 sm:p-6">
                                <DeleteUserForm trans_profileDel={trans_profileDel} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}