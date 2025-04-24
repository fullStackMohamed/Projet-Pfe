import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import LanguageSwitcher from '@/Pages/Langue/LanguageSwitcher';
import DarkModeToggle from '@/DarkMode/DarkModeToggle';

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col bg-gray-100 pt-6 sm:justify-center sm:pt-0 dark:bg-gray-900">
            <div className="flex items-center justify-between px-6">
                <div className="w-32"></div>
    
                <div className="flex justify-center">
                    <Link href="/">
                        <ApplicationLogo className="h-24 w-30 fill-current text-gray-500" />
                    </Link>
                </div>
    
                <div className="flex items-center space-x-4">
                    <DarkModeToggle />
                    <LanguageSwitcher />
                </div>
            </div>
    
            <div className="mt-6 flex justify-center w-full px-6">
                <div className="w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg dark:bg-gray-800">
                    {children}
                </div>
            </div>
        </div>
    );
    
}
