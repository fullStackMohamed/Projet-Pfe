// import ApplicationLogo from '@/Components/ApplicationLogo';
// import Dropdown from '@/Components/Dropdown';
// import NavLink from '@/Components/NavLink';
// import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
// import { Link, usePage } from '@inertiajs/react';
// import { useState } from 'react';

// export default function AuthenticatedLayout({ header, children }) {
//     const user = usePage().props.auth.user;

//     const { auth } = usePage().props;
//     console.log(auth.user.id);

//     const [showingNavigationDropdown, setShowingNavigationDropdown] =
//         useState(false);

//     return (
//         <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
//             <nav className="border-b border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800">
//                 <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//                     <div className="flex h-16 justify-between">
//                         <div className="flex">
//                             <div className="flex shrink-0 items-center">
//                                 <Link href="/">
//                                     <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
//                                 </Link>
//                             </div>

//                             <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
//                                 {
//                                     auth.user.role === 'user' &&
//                                     <NavLink
//                                         href={route('dashboard')}
//                                         active={route().current('dashboard')}
//                                     >
//                                         Dashboard
//                                     </NavLink>
//                                 }

//                                 {
//                                     auth.user.role === 'admin' &&
//                                     <NavLink
//                                         href={route('dashboard2')}
//                                         active={route().current('dashboard2')}
//                                     >
//                                         Dashboard
//                                     </NavLink>
//                                 }

//                                 {auth.user.role === 'admin' && 
//                                 <>
//                                 <NavLink
//                                     href={route('project.index')}
//                                     active={route().current('project.index')}
//                                 >
//                                     Projects
//                                 </NavLink>

//                                 <NavLink
//                                     href={route('task.index')}
//                                     active={route().current('task.index')}
//                                 >
//                                     All tasks
//                                 </NavLink>
                               

//                                 <NavLink
//                                     href={route('user.index')}
//                                     active={route().current('user.index')}
//                                 >
//                                     Users
//                                 </NavLink>
//                                 </>
//                                 }

//                                 {auth.user.role === 'user' &&
//                                 <>
//                                 <NavLink
//                                 href={route('myProjects')}
//                                 active={route().current('myProjects')}
//                                 >
//                                     My Projects
//                                 </NavLink>

//                                 <NavLink
//                                     href={route('myTasks')}
//                                     active={route().current('myTasks')}
//                                 >
//                                     My Tasks
//                                 </NavLink>
//                                 </>
//                                 }
//                             </div>
//                         </div>

//                         <div className="hidden sm:ms-6 sm:flex sm:items-center">
//                             <div className="relative ms-3">
//                                 <Dropdown>
//                                     <Dropdown.Trigger>
//                                         <span className="inline-flex rounded-md">
//                                             <button
//                                                 type="button"
//                                                 className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
//                                             >
//                                                 {user.name}

//                                                 <svg
//                                                     className="-me-0.5 ms-2 h-4 w-4"
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                     viewBox="0 0 20 20"
//                                                     fill="currentColor"
//                                                 >
//                                                     <path
//                                                         fillRule="evenodd"
//                                                         d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                                                         clipRule="evenodd"
//                                                     />
//                                                 </svg>
//                                             </button>
//                                         </span>
//                                     </Dropdown.Trigger>

//                                     <Dropdown.Content>
//                                         <Dropdown.Link
//                                             href={route('profile.edit')}
//                                         >
//                                             Profile
//                                         </Dropdown.Link>
//                                         <Dropdown.Link
//                                             href={route('logout')}
//                                             method="post"
//                                             as="button"
//                                         >
//                                             Log Out
//                                         </Dropdown.Link>
//                                     </Dropdown.Content>
//                                 </Dropdown>
//                             </div>
//                         </div>

//                         <div className="-me-2 flex items-center sm:hidden">
//                             <button
//                                 onClick={() =>
//                                     setShowingNavigationDropdown(
//                                         (previousState) => !previousState,
//                                     )
//                                 }
//                                 className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none dark:text-gray-500 dark:hover:bg-gray-900 dark:hover:text-gray-400 dark:focus:bg-gray-900 dark:focus:text-gray-400"
//                             >
//                                 <svg
//                                     className="h-6 w-6"
//                                     stroke="currentColor"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path
//                                         className={
//                                             !showingNavigationDropdown
//                                                 ? 'inline-flex'
//                                                 : 'hidden'
//                                         }
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M4 6h16M4 12h16M4 18h16"
//                                     />
//                                     <path
//                                         className={
//                                             showingNavigationDropdown
//                                                 ? 'inline-flex'
//                                                 : 'hidden'
//                                         }
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M6 18L18 6M6 6l12 12"
//                                     />
//                                 </svg>
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 <div
//                     className={
//                         (showingNavigationDropdown ? 'block' : 'hidden') +
//                         ' sm:hidden'
//                     }
//                 >
//                     {
//                         auth.user.role === 'user' &&

//                         <div className="space-y-1 pb-3 pt-2">
//                             <ResponsiveNavLink
//                                 href={route('dashboard')}
//                                 active={route().current('dashboard')}
//                             >
//                                 Dashboard
//                             </ResponsiveNavLink>
//                         </div>
//                     }

//                     <div className="border-t border-gray-200 pb-1 pt-4 dark:border-gray-600">
//                         <div className="px-4">
//                             <div className="text-base font-medium text-gray-800 dark:text-gray-200">
//                                 {user.name}
//                             </div>
//                             <div className="text-sm font-medium text-gray-500">
//                                 {user.email}
//                             </div>
//                         </div>

//                         <div className="mt-3 space-y-1">
//                             <ResponsiveNavLink href={route('profile.edit')}>
//                                 Profile
//                             </ResponsiveNavLink>
//                             <ResponsiveNavLink
//                                 method="post"
//                                 href={route('logout')}
//                                 as="button"
//                             >
//                                 Log Out
//                             </ResponsiveNavLink>
//                         </div>
//                     </div>
//                 </div>
//             </nav>

//             {header && (
//                 <header className="bg-white shadow dark:bg-gray-800">
//                     <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
//                         {header}
//                     </div>
//                 </header>
//             )}

//             <main>{children}</main>
//         </div>
//     );
// }


import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function AuthenticatedLayout({ header, children }) {
    const { auth } = usePage().props;
    const user = auth.user;
    
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    
    // Add scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <nav className={`fixed w-full z-10 transition-all duration-300 ${
                scrolled ? 'bg-white/95 dark:bg-gray-800/95 shadow-md backdrop-blur-sm' : 'bg-white dark:bg-gray-800'
            } border-b border-gray-200 dark:border-gray-700`}>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <div className="flex shrink-0 items-center">
                                <Link href="/" className="flex items-center">
                                    <ApplicationLogo className="block h-8 w-auto fill-current text-indigo-600 dark:text-indigo-400" />
                                    <span className="ml-2 font-semibold text-gray-800 dark:text-gray-200">TaskManager</span>
                                </Link>
                            </div>

                            <div className="hidden md:ml-8 md:flex md:space-x-6">
                                {auth.user.role === 'user' && (
                                    <NavLink
                                        href={route('dashboard')}
                                        active={route().current('dashboard')}
                                        className="text-sm font-medium text-gray-600 transition-colors hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
                                    >
                                        Dashboard
                                    </NavLink>
                                )}

                                {auth.user.role === 'admin' && (
                                    <NavLink
                                        href={route('dashboard2')}
                                        active={route().current('dashboard2')}
                                        className="text-sm font-medium text-gray-600 transition-colors hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
                                    >
                                        Dashboard
                                    </NavLink>
                                )}

                                {auth.user.role === 'admin' && (
                                    <>
                                        <NavLink
                                            href={route('project.index')}
                                            active={route().current('project.index')}
                                            className="text-sm font-medium text-gray-600 transition-colors hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
                                        >
                                            Projects
                                        </NavLink>

                                        <NavLink
                                            href={route('task.index')}
                                            active={route().current('task.index')}
                                            className="text-sm font-medium text-gray-600 transition-colors hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
                                        >
                                            All Tasks
                                        </NavLink>

                                        <NavLink
                                            href={route('user.index')}
                                            active={route().current('user.index')}
                                            className="text-sm font-medium text-gray-600 transition-colors hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
                                        >
                                            Users
                                        </NavLink>
                                    </>
                                )}

                                {auth.user.role === 'user' && (
                                    <>
                                        <NavLink
                                            href={route('myProjects')}
                                            active={route().current('myProjects')}
                                            className="text-sm font-medium text-gray-600 transition-colors hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
                                        >
                                            My Projects
                                        </NavLink>

                                        <NavLink
                                            href={route('myTasks')}
                                            active={route().current('myTasks')}
                                            className="text-sm font-medium text-gray-600 transition-colors hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
                                        >
                                            My Tasks
                                        </NavLink>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="hidden md:flex md:items-center">
                            <div className="relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <button
                                            type="button"
                                            className="flex items-center rounded-full bg-gray-100 p-1 text-sm transition-all hover:bg-gray-200 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
                                        >
                                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                                                <span className="text-sm font-medium">
                                                    {user.name.charAt(0).toUpperCase()}
                                                </span>
                                            </div>
                                            <span className="ml-2 mr-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                                                {user.name}
                                            </span>
                                            <svg
                                                className="h-4 w-4 text-gray-500"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content width="48" className="mt-1">
                                        <div className="border-b border-gray-200 px-4 py-3 dark:border-gray-600">
                                            <p className="text-sm text-gray-700 dark:text-gray-300">{user.name}</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">{user.email}</p>
                                        </div>
                                        <Dropdown.Link
                                            href={route('profile.edit')}
                                            className="flex items-center"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                            </svg>
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route('logout')}
                                            method="post"
                                            as="button"
                                            className="flex items-center text-red-500 hover:bg-red-50 hover:text-red-700 dark:hover:bg-red-900/30"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                                            </svg>
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-mr-2 flex items-center md:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown(!showingNavigationDropdown)}
                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:outline-none dark:hover:bg-gray-700 dark:hover:text-gray-300"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`${showingNavigationDropdown ? 'block' : 'hidden'} md:hidden`}>
                    <div className="space-y-1 pb-3 pt-2">
                        {auth.user.role === 'user' && (
                            <>
                                <ResponsiveNavLink
                                    href={route('dashboard')}
                                    active={route().current('dashboard')}
                                >
                                    Dashboard
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                    href={route('myProjects')}
                                    active={route().current('myProjects')}
                                >
                                    My Projects
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                    href={route('myTasks')}
                                    active={route().current('myTasks')}
                                >
                                    My Tasks
                                </ResponsiveNavLink>
                            </>
                        )}
                        
                        {auth.user.role === 'admin' && (
                            <>
                                <ResponsiveNavLink
                                    href={route('dashboard2')}
                                    active={route().current('dashboard2')}
                                >
                                    Dashboard
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                    href={route('project.index')}
                                    active={route().current('project.index')}
                                >
                                    Projects
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                    href={route('task.index')}
                                    active={route().current('task.index')}
                                >
                                    All Tasks
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                    href={route('user.index')}
                                    active={route().current('user.index')}
                                >
                                    Users
                                </ResponsiveNavLink>
                            </>
                        )}
                    </div>

                    <div className="border-t border-gray-200 pb-3 pt-4 dark:border-gray-600">
                        <div className="flex items-center px-4">
                            <div className="flex-shrink-0">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                                    <span className="text-sm font-medium">
                                        {user.name.charAt(0).toUpperCase()}
                                    </span>
                                </div>
                            </div>
                            <div className="ml-3">
                                <div className="text-base font-medium text-gray-800 dark:text-gray-200">{user.name}</div>
                                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">{user.email}</div>
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('profile.edit')} className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                                Profile
                            </ResponsiveNavLink>
                            <ResponsiveNavLink method="post" href={route('logout')} as="button" className="flex w-full items-center text-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                                </svg>
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="pt-16">
                {header && (
                    <header className="bg-white shadow-sm dark:bg-gray-800">
                        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                            {header}
                        </div>
                    </header>
                )}

                <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{children}</main>
            </div>
        </div>
    );
}