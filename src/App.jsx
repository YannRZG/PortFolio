import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '/src/pages/Home/Home.jsx';
import About from '/src/pages/About/About.jsx';
import Project from '/src/pages/Project/Project.jsx';
import Contact from '/src/pages/Contact/Contact.jsx';
import Navbar from './components/Navbar';
import Footer from "./components/Footer"
import './index.css'

function App() {


  return (
    <>
    <BrowserRouter>
    <header>
    <Navbar />
    </header>
    <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project/:projectId" component={Project} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </main>

    <footer>
      <Footer />
    </footer>
    </BrowserRouter>
    </>
  )
}

export default App
