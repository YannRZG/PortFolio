import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const Project = () => {
  const { projectId } = useParams(); // Récupère l'identifiant du projet depuis l'URL de la page
  const [project, setProject] = useState(null);

  useEffect(() => {
    console.log("ID du projet:", projectId); // Avant la requête fetch pour vérifier l'ID du projet

    fetch(`http://localhost:1337/api/projects/${projectId}?populate=image`, {
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données du projet');
      }
      return response.json();
    })
    .then(data => {
      console.log("Données du projet:", data); // Après la récupération des données pour vérifier les données du projet
      setProject(data); // Assurez-vous que data est au format attendu
    })
    .catch(error => {
      console.error("Erreur de récupération des données:", error); // En cas d'erreur lors de la récupération des données
    });
  }, [projectId]); // Exécute l'effet à chaque fois que l'identifiant du projet change

  if (!project) {
    return <div>Chargement...</div>; // Affiche un message de chargement tant que les données du projet ne sont pas disponibles
  }

  return (
    <>
      <div>
        <p>{project.data.attributes.description}</p>
        <div className='img-project'>
        <img src={`http://localhost:1337${project.data.attributes.image.data.attributes.url}`} alt={project.name} />
        </div>
      </div>
    </>
  );
};

export default Project;
