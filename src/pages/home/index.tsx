import { Briefcase, Code, Database, Globe, MapPin } from "feather-icons-react";
import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import AnimatedContent from "../../components/external/animatedContent.tsx";
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
                <span className="card-value">Ceará, Brazil</span>
              </div>
              <div className="info-card">
                <Briefcase size={24} className="card-icon" />
                <span className="card-value">
                  Desenvolvedor FullStack - Função Sistemas
                </span>
              </div>
            </div>
            <h1 className="profile-name">Gustavo Correia</h1>
            <p className="profile-bio">
              Desenvolvedor Full Stack e Líder Técnico com mais de 4 anos de
              experiência no setor financeiro, trabalhando com desenvolvimento
              de APIs e sistemas web usando .NET e React. Atuação forte em
              arquitetura, soluções de alta complexidade, resolução de problemas
              e entrega de funcionalidades que geram melhores resultados.
            </p>
            <div className="skills-cards">
              <div className="skill-card">
                <Code size={28} className="skill-icon" />
                <span className="skill-text">Especialista em .NET</span>
              </div>
              <div className="skill-card">
                <Globe size={28} className="skill-icon" />
                <span className="skill-text">Inglês Fluente</span>
              </div>
              <div className="skill-card">
                <Database size={28} className="skill-icon" />
                <span className="skill-text">Bancos Relacionais e NoSQL</span>
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
    </div>
  );
};

export default Home;
