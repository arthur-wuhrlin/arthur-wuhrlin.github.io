//import { updateBackgroundColor } from "../three/main";

// Simple obfuscation for the email address
document.getElementById('email').innerHTML = '<a href="mailto:arthur.wuhrlin[at]telecom-paris.fr">arthur.wuhrlin[at]telecom-paris.fr</a>'.replace('[at]', '@');

// Theme toggle functionality
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Load theme preference from localStorage
const savedTheme = localStorage.getItem('theme') || 'dark';
body.classList.add(savedTheme);

// Update the button text based on the current theme
themeToggleBtn.textContent = body.classList.contains('dark') ? 'Switch to Light Mode' : 'Switch to Dark Mode';

// Toggle theme and save preference
themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    body.classList.toggle('light');
    const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);

    // Update the button text based on the new theme
    themeToggleBtn.textContent = currentTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});
