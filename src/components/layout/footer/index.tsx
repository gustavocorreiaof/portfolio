import Icon from "feather-icons-react";
import DecryptedText from "../../external/decryptedText";
import "./footer.css";
import { useEffect } from "react";

type Language = "en" | "pt";

interface FooterProps {
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const actualYear = new Date().getFullYear();

  const translations = {
    en: {
      p: `${actualYear} URL Shortener. All rights reserved.`,
    },
    pt: {
      p: `${actualYear} Encurtador de URL. Todos os direitos reservados.`,
    },
  };

  useEffect(() => {}, [lang]);

  return (
    <>
      <hr className="divider" />
      <div className="footer">
        <div className="social-media">
          <a
            href="https://github.com/gustavocorreiaof"
            target="_blank"
            rel="noopener noreferrer"
            className="translateLeft"
          >
            <Icon icon="github" />
          </a>

          <a
            href="https://www.linkedin.com/in/gustavo-correia-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="translateRight"
          >
            <Icon icon="linkedin" />
          </a>
        </div>

        <div className="copyright">
          <p>
            ©{" "}
            <DecryptedText
              text={translations[lang].p}
              animateOn="view"
              revealDirection="center"
            />
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
