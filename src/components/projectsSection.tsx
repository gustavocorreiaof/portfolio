import React from "react";
import AnimatedContent from "./external/animatedContent";
import ProjectCard from "./projectCard";
import "./projectsSection.css";

interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  challenges: string[];
}

interface ProjectsSectionProps {
  projects?: Project[];
}

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "Licenciar",
    description:
      "Plataforma completa de licenciamento ambiental. Permite a gestão de processos, documentos e comunicação entre órgãos ambientais e solicitantes, facilitando o cumprimento das normas ambientais. Entrei nesse projeto já iniciado, porém incompleto. Minha função inicial foi corrigir os erros e finalizar as funcionalidades pendentes, para depois partir para a criação de novas features. Após o término das funcionalidades pendentes, assumi a liderança técnica do projeto, sendo responsável por decisões arquiteturais e melhoria de funcionalidades já existentes. Uma que gosto de destacar é a alteração no salvamento de documentos, onde, na forma inicial, os arquivos eram salvos diretamente no servidor, não possuíam versionamento e não podiam ser acessados para verificação de possíveis erros. Ainda envolvendo essa feature, um dos principais problemas era o fato de um usuário poder acessar o documento de outro usuário apenas alterando a URL do arquivo. Com a nova abordagem, os arquivos não são mais acessíveis diretamente via URL, e sim por meio do sistema, onde o controle de acesso é devidamente verificado.",
    images: [
      "/img/licenciar/Licenciar 1.png",
      "/img/licenciar/Licenciar 2.png",
      "/img/licenciar/Licenciar 3.png",
    ],
    technologies: [".NET 8", "React 19", "JavaScript", "PostgreSQL"],
    challenges: [
      "Deploy em nuvem, principalmente utilizando AWS e Railway.",
      "Ser o principal responsável pela arquitetura do sistema, assim como pelo desenvolvimento, equipe de testes e levantamento de requisitos.",
    ],
  },
];

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects = defaultProjects,
}) => {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={false}
          duration={0.8}
          ease="power3.out"
          initialOpacity={1}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0}
        >
          <div className="projects-header">
            <h2 className="projects-title">Principais Projetos</h2>
            <p className="projects-subtitle">
              Alguns dos projetos que mais me orgulho de ter participado
            </p>
          </div>
        </AnimatedContent>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <AnimatedContent
              key={project.id}
              distance={100}
              direction="vertical"
              reverse={false}
              duration={0.8}
              ease="power3.out"
              initialOpacity={1}
              animateOpacity
              scale={1}
              threshold={0.1}
              delay={index * 0.1}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                images={project.images}
                technologies={project.technologies}
                challenges={project.challenges}
              />
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
