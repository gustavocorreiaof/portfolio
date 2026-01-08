import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import AnimatedContent from "../../components/external/animatedContent.tsx";
import "./Home.css";

type Language = "en" | "pt";

type LangContextType = {
  lang: Language;
  setLang: React.Dispatch<React.SetStateAction<Language>>;
};

function useLang() {
  return useOutletContext<LangContextType>();
}
const Home: React.FC = () => {
  const { lang, setLang } = useLang();

  useEffect(() => {}, [lang]);

  const translations = {
    pt: {
      h1: "Cole a URL para ser encurtada",
      p: "Insira sua URL longa e obtenha uma versão curta e fácil de compartilhar",
    },
    en: {
      h1: "Paste the URL to be shortened",
      p: "Enter your long URL and get a short, easy-to-share version",
    },
  };

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
        Content
      </AnimatedContent>
    </div>
  );
};

export default Home;
