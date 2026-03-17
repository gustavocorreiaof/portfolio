import React from "react";
import { useOutletContext } from "react-router-dom";
import AnimatedContent from "../../components/external/animatedContent";
import DecryptedText from "../../components/external/decryptedText";
import "./stacks.css";

type Language = "pt" | "en";
type LangContextType = {
  lang: Language;
  setLang: React.Dispatch<React.SetStateAction<Language>>;
};

function useLang() {
  return useOutletContext<LangContextType>();
}

interface StackItem {
  emoji: string;
  name: string;
  description: string;
}

interface StackSection {
  icon: string;
  title: string;
  subtitle: string;
  items: StackItem[];
}

const Stacks: React.FC = () => {
  const { lang } = useLang();

  const sections: StackSection[] = [
    {
      icon: "⚙️",
      title: "Tech Stack",
      subtitle:
        lang === "pt"
          ? "Linguagens e frameworks que eu utilizo majoritariamente em meus projetos, o que em recorrência disso, tenho mais experiência."
          : "Languages and frameworks I mainly use in my projects, which as a result, I have the most experience with.",
      items: [
        {
          emoji: "🟣",
          name: ".NET com C#",
          description:
            lang === "pt"
              ? "Framework principal para desenvolvimento backend."
              : "Main framework for backend development.",
        },
        {
          emoji: "🗃️",
          name: "Entity Framework Core",
          description: "ORM para .NET.",
        },
        {
          emoji: "🧪",
          name: "xUnit",
          description:
            lang === "pt"
              ? "Framework de testes unitários."
              : "Unit testing framework.",
        },
        {
          emoji: "🛢️",
          name: "SQL Server",
          description:
            lang === "pt"
              ? "Banco de dados relacional da Microsoft."
              : "Microsoft relational database.",
        },
        {
          emoji: "🐘",
          name: "PostgreSQL",
          description:
            lang === "pt"
              ? "Banco de dados relacional open source."
              : "Open source relational database.",
        },
        {
          emoji: "🍃",
          name: "MongoDB",
          description: "NoSQL document database.",
        },
        {
          emoji: "⚡",
          name: "DynamoDB",
          description: "AWS NoSQL database.",
        },
        {
          emoji: "⚛️",
          name: "React",
          description:
            lang === "pt"
              ? "Biblioteca para construção de interfaces."
              : "Library for building user interfaces.",
        },
        {
          emoji: "📜",
          name: "JavaScript e TypeScript",
          description:
            lang === "pt"
              ? "Linguagens para desenvolvimento web."
              : "Languages for web development.",
        },
      ],
    },
    {
      icon: "☁️",
      title: "Hosting",
      subtitle:
        lang === "pt"
          ? "Serviços de deploy em nuvem que utilizo para disponibilizar APIs, micro serviços e user interfaces."
          : "Cloud deployment services I use to deliver APIs, microservices and user interfaces.",
      items: [
        {
          emoji: "🔶",
          name: "Amazon Web Services (AWS)",
          description:
            lang === "pt"
              ? "Plataforma de serviços em nuvem."
              : "Cloud services platform.",
        },
        {
          emoji: "🚂",
          name: "Railway",
          description:
            lang === "pt"
              ? "Deploy simplificado para backend."
              : "Simplified backend deployment.",
        },
        {
          emoji: "▲",
          name: "Vercel",
          description:
            lang === "pt"
              ? "Hospedagem para aplicações frontend."
              : "Hosting for frontend applications.",
        },
        {
          emoji: "🔄",
          name: "Github Actions",
          description: "CI/CD pipelines.",
        },
        {
          emoji: "🌐",
          name: "Hostinger",
          description:
            lang === "pt"
              ? "Hospedagem web e domínios."
              : "Web hosting and domains.",
        },
      ],
    },
    {
      icon: "🛠️",
      title: lang === "pt" ? "Ferramentas e IDEs" : "Tools and IDEs",
      subtitle:
        lang === "pt"
          ? "Ferramentas e ambientes de desenvolvimento que utilizo no dia a dia."
          : "Tools and development environments I use on a daily basis.",
      items: [
        {
          emoji: "🟪",
          name: "Visual Studio",
          description:
            lang === "pt"
              ? "IDE principal para .NET."
              : "Main IDE for .NET.",
        },
        {
          emoji: "💙",
          name: "VS Code",
          description:
            lang === "pt"
              ? "Editor leve para frontend e scripts."
              : "Lightweight editor for frontend and scripts.",
        },
        {
          emoji: "🧠",
          name: "IntelliJ",
          description: "IDE da JetBrains.",
        },
        {
          emoji: "📮",
          name: "Postman",
          description:
            lang === "pt"
              ? "Testes e documentação de APIs."
              : "API testing and documentation.",
        },
        {
          emoji: "🗄️",
          name: "SQL Server Management Studio",
          description:
            lang === "pt"
              ? "Gerenciamento de bancos SQL Server."
              : "SQL Server database management.",
        },
        {
          emoji: "🐘",
          name: "PgAdmin",
          description:
            lang === "pt"
              ? "Gerenciamento de bancos PostgreSQL."
              : "PostgreSQL database management.",
        },
      ],
    },
  ];

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
        <div className="stacks-page">
          <header className="stacks-header">
            <h1 className="stacks-title">
              <DecryptedText
                key={lang}
                text="Stacks"
                animateOn="view"
                revealDirection="center"
              />
            </h1>
          </header>

          <div className="stacks-grid">
            {sections.map((section, index) => (
              <div key={index} className="stack-section">
                <div className="stack-section-header">
                  <span className="stack-icon">{section.icon}</span>
                  <h2 className="stack-section-title">
                    <DecryptedText
                      key={lang + index}
                      text={section.title}
                      animateOn="view"
                      revealDirection="center"
                    />
                  </h2>
                </div>
                <p className="stack-section-subtitle">
                  <DecryptedText
                    key={lang + "sub" + index}
                    text={section.subtitle}
                    animateOn="view"
                    revealDirection="center"
                  />
                </p>
                <ul className="stack-items">
                  {section.items.map((item, i) => (
                    <li key={i} className="stack-item">
                      <span className="stack-item-emoji">{item.emoji}</span>
                      <span className="stack-item-name">
                        <DecryptedText
                          key={lang + index + i + "name"}
                          text={item.name}
                          animateOn="view"
                          revealDirection="center"
                        />
                      </span>
                      <span className="stack-item-sep"> — </span>
                      <span className="stack-item-desc">
                        <DecryptedText
                          key={lang + index + i + "desc"}
                          text={item.description}
                          animateOn="view"
                          revealDirection="center"
                        />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </AnimatedContent>
    </div>
  );
};

export default Stacks;
