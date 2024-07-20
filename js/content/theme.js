import { translations } from "./language.js";

// Theme toggle functionality
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Load theme preference from localStorage
const savedTheme = localStorage.getItem('theme') || 'dark';
body.classList.add(savedTheme);

// Update the button text based on the current theme
const language = localStorage.getItem('language');
const translation = translations[language]['theme'];
themeToggleBtn.textContent = body.classList.contains('dark') ? translation['dark'] : translation['light'];

// Toggle theme and save preference
themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    body.classList.toggle('light');
    const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);

    // Update the button text based on the new theme
    const language = localStorage.getItem('language');
    const translation = translations[language]['theme'];
    themeToggleBtn.textContent = body.classList.contains('dark') ? translation['dark'] : translation['light'];
});
