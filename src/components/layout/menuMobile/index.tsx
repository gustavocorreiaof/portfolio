import Icon from "feather-icons-react";
import "./MenuMobile.css";
import { useEffect, type Dispatch, type SetStateAction } from "react";

type Language = "en" | "pt";

interface MenuMobileProps {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  lang: Language;
}

const MenuMobile: React.FC<MenuMobileProps> = ({
  openMenu,
  setOpenMenu,
  lang,
}) => {
  const closeMenuModal = () => {
    if (window.innerWidth > 768) {
      setOpenMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", closeMenuModal);
    return () => {
      window.removeEventListener("resize", closeMenuModal);
    };
  }, []);

  const translate = {
    pt: {
      homePage: "Página Inicial",
      about: "Sobre",
      contact: "Contato",
    },
    en: {
      homePage: "Home Page",
      about: "About",
      contact: "Contact",
    },
  };

  return (
    <div
      className={`menu-mobile-overlay ${openMenu ? "show" : ""}`}
      onClick={() => {
        setOpenMenu(false);
      }}
    >
      <div className="modal-menu-content" onClick={(e) => e.stopPropagation()}>
        <ul>
          <li>
            <Icon className="icon" icon="home" />
            <a href="/Home">{translate[lang].homePage}</a>
          </li>
          <li>
            <Icon className="icon" icon="activity" />
            <a href="/About">{translate[lang].about}</a>
          </li>
          <li>
            <Icon className="icon" icon="phone" />
            <a href="/Contact">{translate[lang].contact}</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuMobile;
