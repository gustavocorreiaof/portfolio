import { Mail } from "feather-icons-react";
import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import AnimatedContent from "../../components/external/animatedContent.tsx";
import DecryptedText from "../../components/external/decryptedText.tsx";
import "./contact.css";

const WhatsAppIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 24,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const SteamIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 24,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z" />
  </svg>
);

const PlayStationIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 24,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="6" y1="11" x2="10" y2="11"></line>
    <line x1="8" y1="9" x2="8" y2="13"></line>
    <line x1="15" y1="12" x2="15.01" y2="12"></line>
    <line x1="18" y1="10" x2="18.01" y2="10"></line>
    <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path>
  </svg>
);

const InstagramIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 24,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

type Language = "pt" | "en";
type LangContextType = {
  lang: Language;
  setLang: React.Dispatch<React.SetStateAction<Language>>;
};
function useLang() {
  return useOutletContext<LangContextType>();
}

const Contact: React.FC = () => {
  const { lang } = useLang();
  const [emailCopied, setEmailCopied] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const translations = {
    pt: {
      title: "Vamos conversar?",
      subtitle:
        "Estou sempre aberto a discussões sobre tecnologia, carreira ou para novos projetos como freelancer.",
      emailCopied: "Copiado para área de transferência :)",
      whatsappMessage: "Ou se preferir manda um zap",
      socialTitle: "Ou me encontre por aqui",
      contactCard: "Contato",
    },
    en: {
      title: "Let's talk?",
      subtitle:
        "I'm always open to discussions about technology, career or new freelance projects.",
      emailCopied: "Copied to clipboard :)",
      whatsappMessage: "Or if you prefer, send a message",
      socialTitle: "Or find me here",
      contactCard: "Contact",
    },
  };

  const email = "gustavocorreiadiasdev@gmail.com";
  const phone = "88981165549";

  const handleEmailClick = async (
    e?: React.MouseEvent | React.KeyboardEvent,
  ) => {
    try {
      await navigator.clipboard.writeText(email);
      const mouseEvent = e as React.MouseEvent;
      setCursorPosition({
        x: mouseEvent?.clientX ?? window.innerWidth / 2,
        y: mouseEvent?.clientY ?? window.innerHeight / 2,
      });
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 3000);
    } catch (err) {
      console.error("Erro ao copiar email:", err);
    }
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/55${phone}`, "_blank");
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
        <section className="contact-section">
          <div className="contact-header">
            <div className="info-card">
              <Mail size={24} className="card-icon" />
              <span className="card-value">
                <DecryptedText
                  text={translations[lang].contactCard}
                  animateOn="view"
                  revealDirection="center"
                />
              </span>
            </div>

            <h1 className="contact-title">
              <DecryptedText
                text={translations[lang].title}
                animateOn="view"
                revealDirection="center"
              />
            </h1>

            <p className="contact-subtitle">
              <DecryptedText
                text={translations[lang].subtitle}
                animateOn="view"
                revealDirection="center"
              />
            </p>
          </div>

          <div className="contact-content">
            <div className="contact-info-card">
              <div className="contact-cards-container">
                <div
                  className="contact-card"
                  onClick={handleEmailClick}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && handleEmailClick()}
                >
                  <Mail size={28} className="contact-icon" />
                  <div className="contact-details">
                    <span className="contact-value">{email}</span>
                  </div>
                </div>

                <p className="whatsapp-message">
                  <DecryptedText
                    text={translations[lang].whatsappMessage}
                    animateOn="view"
                    revealDirection="center"
                  />
                </p>

                <div
                  className="contact-card"
                  onClick={handleWhatsAppClick}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && handleWhatsAppClick()}
                >
                  <WhatsAppIcon size={28} className="contact-icon" />
                  <div className="contact-details">
                    <span className="contact-value">
                      +55 ({phone.substring(0, 2)}) {phone.substring(2, 7)}-
                      {phone.substring(7)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="social-divider" />

          <h3 className="social-title">
            <DecryptedText
              text={translations[lang].socialTitle}
              animateOn="view"
              revealDirection="center"
            />
          </h3>

          <div className="social-cards">
            <a
              href="https://steamcommunity.com/id/murasakireidelas/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
            >
              <SteamIcon size={24} className="social-icon" />
            </a>
            <a
              href="https://profile.playstation.com/GuskuOFICIAL"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
            >
              <PlayStationIcon size={24} className="social-icon" />
            </a>
            <a
              href="https://www.instagram.com/gustaavocorreiaa/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
            >
              <InstagramIcon size={24} className="social-icon" />
            </a>
          </div>
        </section>
      </AnimatedContent>

      {emailCopied && (
        <div
          className="copy-feedback"
          style={{
            position: "fixed",
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            transform: "translate(-50%, -120%)",
          }}
        >
          {translations[lang].emailCopied}
        </div>
      )}
    </div>
  );
};

export default Contact;
