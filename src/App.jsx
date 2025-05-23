import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router> {/* BrowserRouter */}
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </Layout>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}
export default App;
