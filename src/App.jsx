import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './components/LanguageContext'; // Chemin corrigé
import Home from './pages/Home/Home.jsx'; // Chemin corrigé
import About from './pages/About/About.jsx'; // Chemin corrigé
import Project from './pages/Project/Project.jsx'; // Chemin corrigé
import Contact from './pages/Contact/Contact.jsx'; // Chemin corrigé
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects/:projectId" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
