import React, { createContext, useState, useEffect, useContext } from 'react';

// 1. Define the translations object
const translations = {
  en: {
    title: "Hi, I'm <span class='text-title-name'>Arthur Wuhrlin</span>",
    subtitle: "And this is my Porfolio",
    theme: { dark: "Light Mode", light: "Dark Mode"},
    nav: { home: "Home", projects: "Projects", blog: "Blog", about: "About" },
    buttons: { theme: "Toggle Theme", language: "FR" }
  },
  fr: {
    title: "Bonjour, je suis <span class='text-title-name-fr'>Arthur Wuhrlin</span>",
    subtitle: "Et voici mon Porfolio",
    theme: { dark: "Mode Lumineux", light: "Mode sombre"},
    nav: { home: "Accueil", projects: "Projets", blog: "Blog", about: "À Propos" },
    buttons: { theme: "Changer Thème", language: "EN" }
  }
};

// 2. Create LanguageContext
const LanguageContext = createContext();

// 3. Create a LanguageProvider component
export const LanguageProvider = ({ children }) => {
  // Manage language state
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'fr'; // Default to 'fr'
  });

  // useEffect to update localStorage
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // toggleLanguage function
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'fr' : 'en'));
  };

  // 't' function to get translations
  const t = (key) => {
    const keys = key.split('.');
    let current = translations[language];
    for (let k of keys) {
      if (current && typeof current === 'object' && k in current) {
        current = current[k];
      } else {
        console.warn(`Translation key "${key}" not found for language "${language}".`);
        return key; // Return key if not found, maybe with a warning
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 4. Create a custom hook useLanguage
export const useLanguage = () => useContext(LanguageContext);
