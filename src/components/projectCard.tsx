import React from "react";
import DecryptedText from "./external/decryptedText";
import "./projectCard.css";

interface ProjectCardProps {
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  challenges: string[];
  link?: string;
  translations?: {
    technologiesUsed: string;
    challengesFaced: string;
    visit: string;
    previousImage: string;
    nextImage: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  images,
  technologies,
  challenges,
  link,
  translations = {
    technologiesUsed: "Tecnologias Utilizadas",
    challengesFaced: "Dificuldades Enfrentadas",
    visit: "Visitar",
    previousImage: "Imagem anterior",
    nextImage: "Próxima imagem",
  },
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
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="visit-button"
          >
            <DecryptedText
              text={translations.visit}
              animateOn="view"
              revealDirection="center"
            />
          </a>
        )}
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
                  aria-label={translations.previousImage}
                >
                  ←
                </button>
                <span className="image-counter">
                  {currentImageIndex + 1} / {images.length}
                </span>
                <button
                  className="image-button"
                  onClick={nextImage}
                  aria-label={translations.nextImage}
                >
                  →
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      <p className="project-description">
        <DecryptedText
          text={description}
          animateOn="view"
          revealDirection="center"
        />
      </p>

      <div className="project-content">
        <div className="project-list">
          <h4 className="list-title">
            <DecryptedText
              text={translations.technologiesUsed}
              animateOn="view"
              revealDirection="center"
            />
          </h4>
          <ul className="technologies-list">
            {technologies.map((tech, index) => (
              <li key={index} className="tech-item">
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="project-list">
          <h4 className="list-title">
            <DecryptedText
              text={translations.challengesFaced}
              animateOn="view"
              revealDirection="center"
            />
          </h4>
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
