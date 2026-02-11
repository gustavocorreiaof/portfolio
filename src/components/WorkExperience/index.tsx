import DecryptedText from "../external/decryptedText.tsx";
import "./workExperience.css";

interface DescriptionItem {
  type: "paragraph" | "list";
  content: string | string[];
}

interface WorkExperienceProps {
  company: string;
  period: string;
  description: DescriptionItem[];
  technologies: string[];
  architectures: string[];
  tools: string[];
  lang: "en" | "pt";
}

const WorkExperience: React.FC<WorkExperienceProps> = ({
  company,
  period,
  description,
  technologies,
  architectures,
  tools,
  lang,
}) => {
  const translations = {
    en: {
      technologiesTitle: "Technologies",
      architecturesTitle: "Architectures & Patterns",
      toolsTitle: "Tools & Others",
    },
    pt: {
      technologiesTitle: "Tecnologias",
      architecturesTitle: "Arquiteturas & Padrões",
      toolsTitle: "Ferramentas & Outros",
    },
  };

  return (
    <div className="work-experience-card">
      <div className="work-experience-header">
        <h3 className="company-name">
          <DecryptedText
            text={company}
            animateOn="view"
            revealDirection="center"
          />
        </h3>
        <span className="work-period">
          <DecryptedText
            text={period}
            animateOn="view"
            revealDirection="center"
          />
        </span>
      </div>

      <div className="work-experience-content">
        {description.map((item, index) => (
          <div key={index}>
            {item.type === "paragraph" ? (
              <p className="work-description">
                <DecryptedText
                  text={item.content as string}
                  animateOn="view"
                  revealDirection="center"
                />
              </p>
            ) : (
              <ul className="work-list">
                {(item.content as string[]).map((listItem, listIndex) => (
                  <li key={listIndex} className="work-list-item">
                    <DecryptedText
                      text={listItem}
                      animateOn="view"
                      revealDirection="center"
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <div className="work-tech-section">
          <h4 className="tech-title">
            <DecryptedText
              text={`${translations[lang].technologiesTitle}:`}
              animateOn="view"
              revealDirection="center"
            />
          </h4>
          <div className="tech-tags">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="work-tech-section">
          <h4 className="tech-title">
            <DecryptedText
              text={`${translations[lang].architecturesTitle}:`}
              animateOn="view"
              revealDirection="center"
            />
          </h4>
          <div className="tech-tags">
            {architectures.map((arch, index) => (
              <span key={index} className="arch-tag">
                {arch}
              </span>
            ))}
          </div>
        </div>

        <div className="work-tech-section">
          <h4 className="tech-title">
            <DecryptedText
              text={`${translations[lang].toolsTitle}:`}
              animateOn="view"
              revealDirection="center"
            />
          </h4>
          <div className="tech-tags">
            {tools.map((tool, index) => (
              <span key={index} className="tools-tag">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
