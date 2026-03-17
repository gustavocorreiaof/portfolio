import { Briefcase, Code, Database, Globe, MapPin } from "feather-icons-react";
import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import AnimatedContent from "../../components/external/animatedContent.tsx";
import DecryptedText from "../../components/external/decryptedText.tsx";
import ProjectsSection from "../../components/ProjectsSection/projectsSection";
import "./Home.css";
import profileImage from "/img/Perfil.png";

type Language = "en" | "pt";

type LangContextType = {
  lang: Language;
  setLang: React.Dispatch<React.SetStateAction<Language>>;
};

function useLang() {
  return useOutletContext<LangContextType>();
}

const Home: React.FC = () => {
  const { lang } = useLang();

  const translations = {
    pt: {
      job: "Desenvolvedor FullStack - Função Sistemas",
      bio: "Desenvolvedor Full Stack e Líder Técnico com mais de 4 anos de experiência no setor financeiro, trabalhando com desenvolvimento de APIs e sistemas web usando .NET e React. Atuação forte em arquitetura, soluções de alta complexidade, resolução de problemas e entrega de funcionalidades que geram melhores resultados.",
      dotnetExpert: "Especialista em .NET",
      fluentEnglish: "Inglês Avançado - B2",
      databases: "Bancos Relacionais e NoSQL",
      located: "Ceará, Brasil",
    },
    en: {
      job: "FullStack Developer - Função Sistemas",
      bio: "Full Stack Developer and Technical Lead with over 4 years of experience in the financial sector, working with API and web system development using .NET and React. Strong performance in architecture, high-complexity solutions, problem-solving, and delivering features that generate better results.",
      dotnetExpert: ".NET Expert",
      fluentEnglish: "Advanced English - B2",
      databases: "Relational and NoSQL Databases",
      located: "Ceará, Brazil",
    },
  };

  useEffect(() => {}, [lang]);

  return (
    <div className="page">
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
        <section className="home-section">
          <div className="home-left">
            <div className="info-cards">
              <div className="info-card">
                <MapPin size={24} className="card-icon" />
                <span className="card-value">
                  <DecryptedText
                    text={translations[lang].located}
                    animateOn="view"
                    revealDirection="center"
                  />
                </span>
              </div>
              <div className="info-card">
                <Briefcase size={24} className="card-icon" />
                <span className="card-value">
                  <DecryptedText
                    text={translations[lang].job}
                    animateOn="view"
                    revealDirection="center"
                  />
                </span>
              </div>
            </div>
            <h1 className="profile-name">Gustavo Correia</h1>
            <p className="profile-bio">
              <DecryptedText
                text={translations[lang].bio}
                animateOn="view"
                revealDirection="center"
              />
            </p>
            <div className="skills-cards">
              <div className="skill-card">
                <Code size={28} className="skill-icon" />
                <span className="skill-text">
                  <DecryptedText
                    text={translations[lang].dotnetExpert}
                    animateOn="view"
                    revealDirection="center"
                  />
                </span>
              </div>
              <div className="skill-card">
                <Globe size={28} className="skill-icon" />
                <span className="skill-text">
                  <DecryptedText
                    text={translations[lang].fluentEnglish}
                    animateOn="view"
                    revealDirection="center"
                  />
                </span>
              </div>
              <div className="skill-card">
                <Database size={28} className="skill-icon" />
                <span className="skill-text">
                  <DecryptedText
                    text={translations[lang].databases}
                    animateOn="view"
                    revealDirection="center"
                  />
                </span>
              </div>
            </div>
          </div>

          <div className="home-right">
            <div className="image-backdrop-2"></div>
            <div className="image-backdrop"></div>
            <img
              src={profileImage}
              alt="Gustavo Correia"
              className="profile-image"
            />
          </div>
        </section>
      </AnimatedContent>

      <ProjectsSection lang={lang} />
    </div>
  );
};

export default Home;
