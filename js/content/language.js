// Language toggle functionality
const languageToggleBtn = document.getElementById('language-toggle');
export const translations = {
  en: {
    title: "Hi, I'm <span class='text-title-name'>Arthur Wuhrlin</span>",
    subtitle: "And this is my Porfolio",
    theme: { dark: "Light Mode", light: "Dark Mode"}
  },
  fr: {
    title: "Bonjour, je suis <span class='text-title-name-fr'>Arthur Wuhrlin</span>",
    subtitle: "Et voici mon Porfolio",
    theme: { dark: "Mode Lumineux", light: "Mode sombre"}
  }
};

// Get Body element
const body = document.body;

// Load language preference from localStorage
const savedLanguage = localStorage.getItem('language') || 'fr';
setLanguage(savedLanguage);

languageToggleBtn.addEventListener('click', () => {
  const currentLanguage = localStorage.getItem('language') === 'en' ? 'fr' : 'en';
  setLanguage(currentLanguage);
  localStorage.setItem('language', currentLanguage);
});

function setLanguage(language) {
  document.querySelectorAll('[data-translate]').forEach(el => {
      const key = el.getAttribute('data-translate');
      if(key == 'theme') {
        const currentTheme = localStorage.getItem('theme');
        console.log("Theme ! ", currentTheme);
        el.innerHTML = translations[language][key][currentTheme];
      }
      else {
        el.innerHTML = translations[language][key];
      }
  });
  languageToggleBtn.textContent = language.toUpperCase();
}