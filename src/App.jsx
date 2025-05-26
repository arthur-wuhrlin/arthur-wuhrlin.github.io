import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './Layout';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'; // Keep for RoutedAppContent if not re-imported there
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';

// Define RoutedAppContent component
function RoutedAppContent() {
  const location = useLocation(); // useLocation is called here
  return (
    <Layout location={location}> {/* Pass location here */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

function App() {
  // useLocation call removed from App
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router> {/* BrowserRouter */}
          <RoutedAppContent /> {/* Render the new component */}
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}
export default App;
