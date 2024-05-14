// Scroll.jsx
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Link } from 'react-router-dom'; // Import Link


function Scroll() {
  const [projects, setProjects] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    fetch('http://localhost:1337/api/projects?populate=image', {
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Réponse réseau non OK');
      }
      return response.json();
    })
    .then(data => setProjects(data.data || []))
    .catch(error => {
      console.error('Erreur lors de la récupération des projets:', error);
      setProjects([]);
    });
  }, []);

  console.log(projects);

  return (
    <div ref={ref}>
      {projects.map((project) => (
        <section key={project.id}>
          <div>
            <img src={`http://localhost:1337${project.attributes.image.data.attributes.url}`} alt={project.name} />
            {/* Utilisez project.id comme paramètre dans le chemin */}
            <Link to={`/projects/${project.id}`}>Voir les détails</Link>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Scroll;
