import Icon from "feather-icons-react";
import { useEffect } from "react";
import DecryptedText from "../../external/decryptedText";
import "./menuSettings.css";
import Brazil from "/img/brazil-flag.png";
import USA from "/img/usa-flag.png";

type Language = "pt" | "en";

interface MenuSettingsProps {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  lang: Language;
  setLang: React.Dispatch<React.SetStateAction<Language>>;
}

const MenuSettings: React.FC<MenuSettingsProps> = ({
  openMenu,
  setOpenMenu,
  lang,
  setLang,
}) => {
  useEffect(() => {}, [lang]);

  const translations: Record<
    Language,
    { settings: string; theme: string; language: string }
  > = {
    pt: {
      settings: "Configurações",
      theme: "Tema",
      language: "Idioma",
    },
    en: {
      settings: "Settings",
      theme: "Theme",
      language: "Language",
    },
  };
  window.addEventListener("resize", closeMenuModal);

  function closeMenuModal() {
    console.log(window.innerWidth);
    if (window.innerWidth < 767) {
      setOpenMenu(false);
    }
  }

  const setDarkMode = () => {
    document.body.classList.remove("forLightTheme");
    document.body.classList.add("forDarkTheme");
    document.getElementById("indicatorTheme")?.classList.add("dark");
  };

  const setLightMode = () => {
    document.body.classList.remove("forDarkTheme");
    document.body.classList.add("forLightTheme");
    document.getElementById("indicatorTheme")?.classList.remove("dark");
  };

  const setPtMode = () => {
    setLang("pt");
    document.body.classList.remove("en");
    document.body.classList.add("pt");
    document.getElementById("indicatorLang")?.classList.remove("en");
  };

  const setEnMode = () => {
    setLang("en");
    document.body.classList.remove("pt");
    document.body.classList.add("en");
    document.getElementById("indicatorLang")?.classList.add("en");
  };

  return (
    <div
      className={`menu-overlay${openMenu ? " open" : ""}`}
      onClick={() => {
        setOpenMenu(false);
      }}
    >
      <div
        className={`menuSettings ${openMenu ? " open" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <h3>
          <DecryptedText
            text={translations[lang].settings}
            animateOn="view"
            revealDirection="center"
          />
        </h3>

        <hr className="divider" />

        <div className="menu-line">
          <div className="line__right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C17.5222 2 22 5.97778 22 10.8889C22 13.9556 19.5111 16.4444 16.4444 16.4444H14.4778C13.5556 16.4444 12.8111 17.1889 12.8111 18.1111C12.8111 18.5333 12.9778 18.9222 13.2333 19.2111C13.5 19.5111 13.6667 19.9 13.6667 20.3333C13.6667 21.2556 12.9 22 12 22C6.47778 22 2 17.5222 2 12C2 6.47778 6.47778 2 12 2ZM10.8111 18.1111C10.8111 16.0843 12.451 14.4444 14.4778 14.4444H16.4444C18.4065 14.4444 20 12.851 20 10.8889C20 7.1392 16.4677 4 12 4C7.58235 4 4 7.58235 4 12C4 16.19 7.2226 19.6285 11.324 19.9718C10.9948 19.4168 10.8111 18.7761 10.8111 18.1111ZM7.5 12C6.67157 12 6 11.3284 6 10.5C6 9.67157 6.67157 9 7.5 9C8.32843 9 9 9.67157 9 10.5C9 11.3284 8.32843 12 7.5 12ZM16.5 12C15.6716 12 15 11.3284 15 10.5C15 9.67157 15.6716 9 16.5 9C17.3284 9 18 9.67157 18 10.5C18 11.3284 17.3284 12 16.5 12ZM12 9C11.1716 9 10.5 8.32843 10.5 7.5C10.5 6.67157 11.1716 6 12 6C12.8284 6 13.5 6.67157 13.5 7.5C13.5 8.32843 12.8284 9 12 9Z"></path>
            </svg>

            <h4>
              <DecryptedText
                text={translations[lang].theme}
                animateOn="view"
                revealDirection="center"
              />
            </h4>
          </div>
          <div className="line__left">
            <div className="theme-area">
              <div id="indicatorTheme" className="indicatorTheme dark" />
              <div onClick={() => setLightMode()} className="theme-div">
                <Icon className="icon iconLightMode" icon="sun" />
              </div>
              <div onClick={() => setDarkMode()} className="theme-div">
                <Icon className="icon iconDarkMode" icon="moon" />
              </div>
            </div>
          </div>
        </div>

        <div className="menu-line">
          <div className="line__right">
            <Icon className="icon" icon="globe" />
            <h4>
              <DecryptedText
                text={translations[lang].language}
                animateOn="view"
                revealDirection="center"
              />
            </h4>
          </div>
          <div className="line__left">
            <div className="theme-area">
              <div id="indicatorLang" className="indicatorLang" />
              <div onClick={() => setPtMode()} className="theme-div">
                <img className="flag" src={Brazil} />
              </div>
              <div onClick={() => setEnMode()} className="theme-div">
                <img className="flag" src={USA} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSettings;
