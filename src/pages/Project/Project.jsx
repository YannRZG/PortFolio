import React, { useRef, useState, useEffect } from "react";


function Scroll() {
  const [projects, setProjects] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    fetch('http://localhost:1337/api/projects', {
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
          </div>
          <motion.h2>{project.attributes.title}</motion.h2>
        </section>
      ))}
    </div>
  );
}

export default Scroll;
