import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'; // Import Link

function Card() {
  const profileLinks = ['twitter', 'linkedin', 'dribbble', 'facebook'];
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
    <>
    {projects.map(project => (
        <div className='card-container' key={project.id}>
          <div className='card-body'>
            {/* Affichage de chaque projet sous forme de carte */}
            <div className="card">
              {/* Face avant de la carte */}
              <div className='card-side side-front'>
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-xs-6'>
                      <img src={`http://localhost:1337${project.attributes.image.data.attributes.url}`} alt={project.name} />
                    </div>
                  </div>
                </div>
              </div>
              {/* Face arrière de la carte */}
              <div className='card-side side-back'>
                <div className='container-fluid'>
                  <h1>{project.attributes.title}</h1>
                  {/* Affichez ici d'autres détails du projet si nécessaire */}
                  <div className='card-social-links'>
                    <ul className='social-links'>
                      {profileLinks.map((link, index) =>
                        <li key={index}><a href='#'><i className={'fa fa-' + link}></i></a></li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      </>



  );
}

export default Card;
