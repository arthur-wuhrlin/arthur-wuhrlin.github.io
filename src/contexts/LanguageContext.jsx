import React, { createContext, useState, useEffect, useContext } from 'react';

// 1. Define the translations object
const translations = {
  en: {
    title: "Hi, I'm <span class='text-title-name'>Arthur Wuhrlin</span>",
    subtitle: "And this is my Porfolio",
    theme: { dark: "Light Mode", light: "Dark Mode"},
    nav: { home: "Home", projects: "Projects", blog: "Blog", about: "About" },
    buttons: { theme: "Toggle Theme", language: "FR" },
    pages: { // This key can remain if other pages use it, or be removed if 'about' is the only one.
      blog: { title: "Blog", wip: "Blog : Work in progress" }
      // 'about' section will be more detailed below, replacing the simple wip.
    },
    about: { // New top-level key for about page translations
      navTitle: "About Me", // Or "Profile", "Overview" etc.
      introduction: "Hello! I'm Arthur, a passionate software engineering student diving deep into the world of web development and 3D graphics. I love exploring new technologies and building creative solutions.",
      skillsTitle: "My Skills",
      educationTitle: "Education",
      experienceTitle: "Experience",
      cvDownloadTitle: "Download My CV",
      cvDownloadButton: "Download CV",
      skills: {
        level: {
          expert: "Expert",
          proficient: "Proficient",
          intermediate: "Intermediate",
          beginner: "Beginner"
        }
      },
      education: {
        degree1: {
          name: "Master of Science in Software Engineering",
          institution: "National University of Singapore",
          desc1: "Relevant coursework: Advanced Algorithms, System Design, AI."
        },
        degree2: {
          name: "Preparatory Classes MPSI/MP*",
          institution: "Lycée Kléber, Strasbourg"
        }
      },
      experience: {
        role1: {
          name: "Software Engineer Intern",
          company: "Tech Solutions Inc.",
          resp1: "Developed new features for a web application using React and Node.js.",
          resp2: "Collaborated with a team of 5 developers."
        }
      }
    }
  },
  fr: {
    title: "Bonjour, je suis <span class='text-title-name-fr'>Arthur Wuhrlin</span>",
    subtitle: "Et voici mon Porfolio",
    theme: { dark: "Mode Lumineux", light: "Mode sombre"},
    nav: { home: "Accueil", projects: "Projets", blog: "Blog", about: "À Propos" },
    buttons: { theme: "Changer Thème", language: "EN" },
    pages: { // Keeping blog for consistency
      blog: { title: "Blog", wip: "Blog : En cours de construction" }
    },
    about: { // New top-level key for about page translations
      navTitle: "À Propos de Moi",
      introduction: "Bonjour ! Je suis Arthur, un étudiant passionné en génie logiciel qui plonge dans le monde du développement web et du graphisme 3D. J'adore explorer les nouvelles technologies et construire des solutions créatives.",
      skillsTitle: "Mes Compétences",
      educationTitle: "Formation",
      experienceTitle: "Expérience",
      cvDownloadTitle: "Télécharger Mon CV",
      cvDownloadButton: "Télécharger le CV",
      skills: {
        level: {
          expert: "Expert",
          proficient: "Compétent",
          intermediate: "Intermédiaire",
          beginner: "Débutant"
        }
      },
      education: {
        degree1: {
          name: "Master of Science en Génie Logiciel",
          institution: "Université Nationale de Singapour",
          desc1: "Cours pertinents : Algorithmes avancés, Conception de systèmes, IA."
        },
        degree2: {
          name: "Classes Préparatoires MPSI/MP*",
          institution: "Lycée Kléber, Strasbourg"
        }
      },
      experience: {
        role1: {
          name: "Stagiaire Ingénieur Logiciel",
          company: "Tech Solutions Inc.",
          resp1: "Développement de nouvelles fonctionnalités pour une application web en React et Node.js.",
          resp2: "Collaboration avec une équipe de 5 développeurs."
        }
      }
    }
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
