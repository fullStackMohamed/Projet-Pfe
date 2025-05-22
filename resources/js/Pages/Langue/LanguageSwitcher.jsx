// import React from 'react';

// const LanguageSwitcher = () => {
//   return (
//     <div className="mb-4">
//       <a href="/lang/en" className="mr-2">🇬🇧 English</a>
//       <a href="/lang/fr">🇫🇷 Français</a>
//       <a href="/lang/ar"> Arab</a>
//     </div>
//   );
// };

// export default LanguageSwitcher;


// import React, { useState } from 'react';
// // Import des icônes Heroicons
// import { ChevronDownIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

// const LanguageSwitcher = () => {
//   // État pour le menu déroulant
//   const [isOpen, setIsOpen] = useState(false);
  
//   // Liste des langues
//   const languages = [
//     { code: 'en', name: 'English' },
//     { code: 'fr', name: 'Français' },
//     { code: 'ar', name: 'العربية' }
//   ];

//   // Langue active
//   const activeLanguage = languages[1];

//   return (
//     <div className="relative">
//       {/* Bouton principal */}
//       <button 
//         type="button" 
//         className="flex items-center space-x-2 bg-white/85 border rounded-lg px-1 py-1 text-gray-700 hover:bg-gray-50 transition-colors"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <GlobeAltIcon className="h-5 w-5 text-blue-500" />
//         <span>{activeLanguage.name}</span>
//         <ChevronDownIcon className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
//       </button>

//       {/* Menu déroulant */}
//       {isOpen && (
//         <div className="absolute mt-1 w-40 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 z-10">
//           {languages.map((language) => (
//             <a
//               key={language.code}
//               href={`/lang/${language.code}`}
//               className="flex items-center px-4 py-2 hover:bg-blue-50 text-gray-700"
//             >
//               <GlobeAltIcon className="h-4 w-4 text-blue-500 mr-2" />
//               <span>{language.name}</span>
//             </a>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default LanguageSwitcher;


import React, { useEffect, useRef, useState } from 'react';
import { usePage } from '@inertiajs/react';
import { ChevronDownIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const LanguageSwitcher = () => {
  const { props } = usePage();
  const currentLocale = props.locale;

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'ar', name: 'العربية' }
  ];

  // Trouver la langue active
  const activeLanguage = languages.find(lang => lang.code === currentLocale) || languages[0];

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Fermer le menu si on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        type="button" 
        className="flex items-center space-x-2 bg-white/85 border rounded-lg px-1 py-1 text-gray-700 hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <GlobeAltIcon className="h-5 w-5 text-blue-500" />
        <span>{activeLanguage.name}</span>
        <ChevronDownIcon className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute mt-1 w-40 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 z-10">
          {languages.map((language) => (
            <a
              key={language.code}
              href={`/lang/${language.code}`}
              className="flex items-center px-4 py-2 hover:bg-blue-50 text-gray-700"
              onClick={() => setIsOpen(false)} // ferme le menu après le clic
            >
              <GlobeAltIcon className="h-4 w-4 text-blue-500 mr-2" />
              <span>{language.name}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
