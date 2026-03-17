import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import DecryptedText from "../../components/external/decryptedText.tsx";
import WorkExperience from "../../components/WorkExperience";
import "./about.css";

type Language = "pt" | "en";
type LangContextType = {
  lang: Language;
  setLang: React.Dispatch<React.SetStateAction<Language>>;
};

function useLang() {
  return useOutletContext<LangContextType>();
}

const About: React.FC = () => {
  const { lang } = useLang();

  useEffect(() => {}, [lang]);

  const translations = {
    en: {
      title: "About Me",
      experienceTitle: "Career",
      funcaoSistemasDescription: [
        {
          type: "paragraph" as const,
          content:
            "I work on the maintenance and evolution of legacy systems focused on providing solutions for the financial market, with an emphasis on credit management.",
        },
        {
          type: "paragraph" as const,
          content: "I am responsible for implementing improvements related to:",
        },
        {
          type: "list" as const,
          content: [
            "System performance, aiming for greater processing efficiency.",
            "Code readability and organization, promoting better maintainability.",
            "Scalability, with the goal of supporting the processing of large data volumes and automation of credit operations.",
          ],
        },
        {
          type: "paragraph" as const,
          content:
            "My main challenge consists of adapting and optimizing systems to handle high processing loads, ensuring reliability, performance, and adherence to the business rules of the financial sector.",
        },
      ],
      fitbankDescription: [
        {
          type: "paragraph" as const,
          content:
            "My first contact with programming occurred at university. Two years later, I secured my first internship opportunity at FitBank, where I worked for approximately four years developing robust and scalable solutions.",
        },
        {
          type: "list" as const,
          content: [
            "I was responsible for developing and maintaining features in the administrative and client portals, used internally by the organization to execute critical business operations.",
            "Responsible for a 98.33% improvement in the performance of the search functionality on the payments screen, through backend query and process optimization.",
            "I also worked on creating and evolving microservices integrated with financial institutions' APIs such as JP Morgan, Bradesco, and Santander, responsible for critical operations such as asynchronous processing of different payment types (Boleto, GARE, DARF, DARJ, among others) and transaction registration in CNAB files.",
          ],
        },
        {
          type: "paragraph" as const,
          content: "Additionally, I performed the following activities:",
        },
        {
          type: "list" as const,
          content: [
            "Conducted code reviews and supported the onboarding of new team members, guiding them on development best practices and business rules.",
            "Continuously contributed to improving system performance, reliability, and maintainability.",
          ],
        },
      ],
    },
    pt: {
      title: "Sobre Mim",
      experienceTitle: "Carreira",
      funcaoSistemasDescription: [
        {
          type: "paragraph" as const,
          content:
            "Atuo na manutenção e evolução de sistemas legados voltados ao fornecimento de soluções para o mercado financeiro, com foco em gestão de crédito.",
        },
        {
          type: "paragraph" as const,
          content: "Sou responsável por implementar melhorias relacionadas a:",
        },
        {
          type: "list" as const,
          content: [
            "Performance dos sistemas, visando maior eficiência no processamento.",
            "Legibilidade e organização do código, promovendo maior manutenibilidade.",
            "Escalabilidade, com o objetivo de suportar o processamento de grandes volumes de dados e a automação de operações de crédito.",
          ],
        },
        {
          type: "paragraph" as const,
          content:
            "Meu principal desafio consiste na adaptação e otimização de sistemas para lidar com altas cargas de processamento, garantindo confiabilidade, desempenho e aderência às regras de negócio do setor financeiro.",
        },
      ],
      fitbankDescription: [
        {
          type: "paragraph" as const,
          content:
            "Meu primeiro contato com programação ocorreu na universidade. Dois anos depois, conquistei minha primeira oportunidade de estágio no FitBank, onde atuei por aproximadamente quatro anos no desenvolvimento de soluções robustas e escaláveis.",
        },
        {
          type: "list" as const,
          content: [
            "Fui responsável pelo desenvolvimento e manutenção de funcionalidades nos portais administrativo e do cliente, utilizados internamente pela organização para a execução de operações críticas ao negócio.",
            "Responsável por uma melhoria de 98,33% no desempenho da funcionalidade de pesquisa na tela de pagamentos, por meio da otimização de consultas e processos backend.",
            "Atuei também na criação e evolução de microsserviços integrados às APIs de instituições financeiras como JP Morgan, Bradesco e Santander, responsáveis por operações críticas, como o processamento assíncrono de diferentes tipos de pagamentos (Boleto, GARE, DARF, DARJ, entre outros) e pelo registro de transações em arquivos CNAB.",
          ],
        },
        {
          type: "paragraph" as const,
          content: "Além disso, desempenhei as seguintes atividades:",
        },
        {
          type: "list" as const,
          content: [
            "Realização de revisões de código e apoio à integração de novos colaboradores, orientando sobre boas práticas de desenvolvimento e regras de negócio.",
            "Contribuição contínua para a melhoria de performance, confiabilidade e manutenibilidade dos sistemas.",
          ],
        },
      ],
    },
  };

  const funcaoSistemasPeriod =
    lang === "pt" ? "2025 - Atualmente" : "2025 - Present";
  const fitbankPeriod = lang === "pt" ? "2021 - 2025" : "2021 - 2025";

  return (
    <div className="page about-page">
      <div className="about-container">
        <section className="experience-section">
          <h2 className="section-title">
            <DecryptedText
              text={translations[lang].experienceTitle}
              animateOn="view"
              revealDirection="center"
            />
          </h2>

          <WorkExperience
            company="Função Sistemas"
            period={funcaoSistemasPeriod}
            description={translations[lang].funcaoSistemasDescription}
            technologies={["C#", ".NET Framework", "SQL Server"]}
            architectures={["Sistemas Legados", "Otimização de Performance"]}
            tools={["TFS", "Kanban"]}
            lang={lang}
          />

          <WorkExperience
            company="FitBank – Pagamentos Eletrônicos"
            period={fitbankPeriod}
            description={translations[lang].fitbankDescription}
            technologies={[
              "C#",
              ".NET / .NET Core",
              "ASP.NET Core",
              "SQL Server",
              "MongoDB",
              "Azure",
              "React",
              "RabbitMQ",
              "Redis",
            ]}
            architectures={[
              "Microsserviços",
              "RESTful APIs",
              "MVC",
              "Testes de Integração",
            ]}
            tools={["Git/GitHub", "Swagger", "Scrum"]}
            lang={lang}
          />
        </section>
      </div>
    </div>
  );
};

export default About;
