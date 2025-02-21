import React from "react";
import "./projectCard.css";

interface ProjectCardProps {
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  challenges: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  images,
  technologies,
  challenges,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="project-card">
      <div className="project-header">
        <h3 className="project-title">{title}</h3>
      </div>

      <div className="project-images-container">
        {images.length > 0 && (
          <div className="project-image-wrapper">
            <img
              src={images[currentImageIndex]}
              alt={`${title} - ${currentImageIndex + 1}`}
              className="project-image"
            />
            {images.length > 1 && (
              <div className="image-controls">
                <button
                  className="image-button"
                  onClick={prevImage}
                  aria-label="Imagem anterior"
                >
                  ←
                </button>
                <span className="image-counter">
                  {currentImageIndex + 1} / {images.length}
                </span>
                <button
                  className="image-button"
                  onClick={nextImage}
                  aria-label="Próxima imagem"
                >
                  →
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      <p className="project-description">{description}</p>

      <div className="project-content">
        <div className="project-list">
          <h4 className="list-title">Tecnologias Utilizadas</h4>
          <ul className="technologies-list">
            {technologies.map((tech, index) => (
              <li key={index} className="tech-item">
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="project-list">
          <h4 className="list-title">Dificuldades Enfrentadas</h4>
          <ul className="challenges-list">
            {challenges.map((challenge, index) => (
              <li key={index} className="challenge-item">
                {challenge}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
