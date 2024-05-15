import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody } from "@nextui-org/react";

function ProjectCard() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:1337/api/projects?populate=image', {
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des projets');
      }
      return response.json();
    })
    .then(data => setProjects(data.data || []))
    .catch(error => {
      console.error('Erreur lors de la récupération des projets:', error);
      setProjects([]);
    });
  }, []);

  return (
    <div className="center-content"> {/* Conteneur pour centrer le contenu horizontalement */}
      {projects.map(project => (
        <Card className="py-4" key={project.id}>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h1 className="text-tiny uppercase font-bold">{project.attributes.title}</h1>
            <h2 className="text-default-500">{project.attributes.description}</h2>

          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Link to={`/projects/${project.id}`}>
              <img
                alt={project.attributes.name}
                className="object-cover rounded-xl"
                src={`http://localhost:1337${project.attributes.image.data.attributes.url}`}
                width={670}
              />
            </Link>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export default ProjectCard;
