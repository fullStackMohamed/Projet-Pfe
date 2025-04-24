// import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
// import { useEffect, useState } from 'react'

// const DarkModeToggle = () => {
//   const [darkMode, setDarkMode] = useState(false)

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add('dark')
//     } else {
//       document.documentElement.classList.remove('dark')
//     }
//   }, [darkMode])

//   return (
//     <button
//       onClick={() => setDarkMode(!darkMode)}
//       className="p-1 rounded-full bg-gray-200 dark:bg-gray-800"
//     >
//       {darkMode ? (
//         <SunIcon className="h-6 w-6 text-yellow-400" />
//       ) : (
//         <MoonIcon className="h-6 w-6 text-gray-700" />
//       )}
//     </button>
//   )
// }

// export default DarkModeToggle


// Exemple de DarkModeToggle.jsx bien stylisé
import { useState, useEffect } from 'react';

export default function DarkModeToggle() {
    const [darkMode, setDarkMode] = useState(false);
    
    useEffect(() => {
        // Vérifier le thème actuel au chargement
        if (localStorage.theme === 'dark' || 
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setDarkMode(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);
    
    const toggleDarkMode = () => {
        if (darkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        }
        setDarkMode(!darkMode);
    };
    
    return (
        <button 
            onClick={toggleDarkMode}
            className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors dark:bg-gray-700"
            aria-label={darkMode ? 'Activer le mode clair' : 'Activer le mode sombre'}
        >
            <span className="sr-only">{darkMode ? 'Activer le mode clair' : 'Activer le mode sombre'}</span>
            <span 
                className={`${
                    darkMode ? 'translate-x-6 bg-indigo-600' : 'translate-x-1 bg-white'
                } inline-block h-4 w-4 transform rounded-full transition-transform duration-200 ease-in-out`}
            >
                {darkMode ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                    </svg>
                )}
            </span>
        </button>
    );
}