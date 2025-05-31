import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
// LanguageProvider import removed
import Layout from './Layout';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// AnimatePresence import removed as it's no longer used
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';

// Define RoutedAppContent component
function RoutedAppContent() {
  const location = useLocation(); // useLocation is called here
  return (
    <Layout location={location}> {/* Pass location here */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Layout>
  );
}

function App() {
  // useLocation call removed from App
  return (
    <ThemeProvider>
      {/* LanguageProvider wrapper removed */}
      <Router> {/* BrowserRouter */}
        <RoutedAppContent /> {/* Render the new component */}
      </Router>
    </ThemeProvider>
  );
}
export default App;
