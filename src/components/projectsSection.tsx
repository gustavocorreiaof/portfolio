import React from "react";
import AnimatedContent from "./external/animatedContent";
import DecryptedText from "./external/decryptedText";
import ProjectCard from "./projectCard";
import "./projectsSection.css";

interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  challenges: string[];
  link?: string;
}

interface ProjectsSectionProps {
  projects?: Project[];
  lang?: "pt" | "en";
}

const projectDescriptions = {
  licenciar: {
    pt: "Plataforma completa de licenciamento ambiental. Permite a gestão de processos, documentos e comunicação entre órgãos ambientais e solicitantes, facilitando o cumprimento das normas ambientais. Entrei nesse projeto já iniciado, porém incompleto. Minha função inicial foi corrigir os erros e finalizar as funcionalidades pendentes, para depois partir para a criação de novas features. Após o término das funcionalidades pendentes, assumi a liderança técnica do projeto, sendo responsável por decisões arquiteturais e melhoria de funcionalidades já existentes. Uma que gosto de destacar é a alteração no salvamento de documentos, onde, na forma inicial, os arquivos eram salvos diretamente no servidor, não possuíam versionamento e não podiam ser acessados para verificação de possíveis erros. Ainda envolvendo essa feature, um dos principais problemas era o fato de um usuário poder acessar o documento de outro usuário apenas alterando a URL do arquivo. Com a nova abordagem, os arquivos não são mais acessíveis diretamente via URL, e sim por meio do sistema, onde o controle de acesso é devidamente verificado. No demais identifiquei e resolvi diversos bugs basicos como a não validação de campos, corrigi regras de negócio que não estavam sendo cumpridas corretamente além de aplicar boas praticas de programação como remoção da duplicação de codigo, implementação de transações nas ações envolvendo o banco de dados a fim de garantir atomicidade nas ações.",
    en: "Complete environmental licensing platform. It allows the management of processes, documents and communication between environmental agencies and applicants, facilitating compliance with environmental regulations. I joined this project already started, but incomplete. My initial role was to fix errors and complete pending features, then move on to creating new features. After completing the pending features, I took over the technical leadership of the project, being responsible for architectural decisions and improving existing features. One that I like to highlight is the change in document saving, where, in the initial form, files were saved directly on the server, had no versioning and could not be accessed to check for possible errors. Still involving this feature, one of the main problems was the fact that a user could access another user's document just by changing the file URL. With the new approach, files are no longer accessible directly via URL, but through the system, where access control is properly verified. In addition, I identified and resolved several basic bugs such as field validation, corrected business rules that were not being followed correctly, and applied good programming practices such as removing code duplication, implementing transactions in actions involving the database in order to guarantee atomicity in actions.",
  },
  landingPages: {
    pt: "Eventualmente aparecem alguns clientes solicitando que eu faça uma landing page com informações sobre seus serviços.",
    en: "Occasionally some clients request that I create a landing page with information about their services.",
  },
};

const projectChallenges = {
  licenciar: {
    pt: [
      "Deploy em nuvem, principalmente utilizando AWS e Railway.",
      "Ser o principal responsável pela arquitetura do sistema, assim como pelo desenvolvimento, equipe de testes e levantamento de requisitos.",
    ],
    en: [
      "Cloud deployment, mainly using AWS and Railway.",
      "Being the main person responsible for the system architecture, as well as development, testing team and requirements gathering.",
    ],
  },
  landingPages: {
    pt: [
      "Em geral não há muito um padrão de dificuldades mas sim cada cliente é um caso novo onde pedem coisas diferentes de uma landing page pra outra.",
    ],
    en: [
      "In general there is not much of a pattern of difficulties but rather each client is a new case where they ask for different things from one landing page to another.",
    ],
  },
};

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "Licenciar",
    description: projectDescriptions.licenciar.pt,
    images: [
      "/img/licenciar/Licenciar 1.png",
      "/img/licenciar/Licenciar 2.png",
      "/img/licenciar/Licenciar 3.png",
    ],
    technologies: [
      ".NET 8",
      "Entity Framework Core",
      "React 19",
      "JavaScript",
      "PostgreSQL",
      "Docker",
      "AWS, Railway e Vercel",
    ],
    challenges: [
      "Deploy em nuvem, principalmente utilizando AWS e Railway.",
      "Ser o principal responsável pela arquitetura do sistema, assim como pelo desenvolvimento, equipe de testes e levantamento de requisitos.",
    ],
    link: "https://licenciar-ui.vercel.app/",
  },
  {
    id: "2",
    title: "Landing Pages",
    description: projectDescriptions.landingPages.pt,
    images: ["/img/landing-pages/landing-page-1.png"],
    technologies: ["React 19", "JavaScript", "Vercel"],
    challenges: [
      "Em geral não há muito um padrão de dificuldades mas sim cada cliente é um caso novo onde pedem coisas diferentes de uma landing page pra outra.",
    ],
    link: "https://joao-victor-theta.vercel.app/",
  },
];

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects = defaultProjects,
  lang = "pt",
}) => {
  const translations = {
    pt: {
      title: "Principais Projetos",
      subtitle: "Alguns dos projetos que mais me orgulho de ter participado",
      technologiesUsed: "Tecnologias Utilizadas",
      challengesFaced: "Dificuldades Enfrentadas",
      visit: "Visitar",
      previousImage: "Imagem anterior",
      nextImage: "Próxima imagem",
    },
    en: {
      title: "Main Projects",
      subtitle: "Some of the projects I'm most proud to have participated in",
      technologiesUsed: "Technologies Used",
      challengesFaced: "Challenges Faced",
      visit: "Visit",
      previousImage: "Previous image",
      nextImage: "Next image",
    },
  };

  const getProjectDescription = (projectId: string) => {
    if (projectId === "1") return projectDescriptions.licenciar[lang];
    if (projectId === "2") return projectDescriptions.landingPages[lang];
    return "";
  };

  const getProjectChallenges = (projectId: string) => {
    if (projectId === "1") return projectChallenges.licenciar[lang];
    if (projectId === "2") return projectChallenges.landingPages[lang];
    return [];
  };

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
            <h2 className="projects-title">
              <DecryptedText
                text={translations[lang].title}
                animateOn="view"
                revealDirection="center"
              />
            </h2>
            <p className="projects-subtitle">
              <DecryptedText
                text={translations[lang].subtitle}
                animateOn="view"
                revealDirection="center"
              />
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
                description={getProjectDescription(project.id)}
                images={project.images}
                technologies={project.technologies}
                challenges={getProjectChallenges(project.id)}
                link={project.link}
                translations={translations[lang]}
              />
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
