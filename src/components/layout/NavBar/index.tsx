import Icon from "feather-icons-react";
import type { Dispatch, MouseEvent, SetStateAction } from "react";
import React, { useEffect, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import MenuSettings from "../../common/menuSettings";
import DecryptedText from "../../external/decryptedText";
import "./navbar.css";
import LogoBranca from "/img/white_version.png";
import LogoPreta from "/img/black_version.png";

type Language = "en" | "pt";

interface NavBarProps {
  setOpenSettings: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenMenuMobile: React.Dispatch<React.SetStateAction<boolean>>;
  lang: Language;
  setLang: Dispatch<SetStateAction<Language>>;
}

const NavBar: React.FC<NavBarProps> = ({
  lang,
  setLang,
  setOpenMenuMobile,
}) => {
  const navigate = useNavigate();
  const [isDarkTheme, setIsDarkTheme] = React.useState(() => {
    return !document.body.classList.contains("forLightTheme");
  });

  useEffect(() => {
    const updateTheme = () => {
      const isDark = !document.body.classList.contains("forLightTheme");
      setIsDarkTheme(isDark);
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const translations: Record<
    Language,
    {
      titleNavBar: string;
      home: string;
      contact: string;
      about: string;
      url: string;
    }
  > = {
    pt: {
      titleNavBar: "Gustavo",
      home: "Inicio",
      about: "Sobre",
      contact: "Contato",
      url: "Correia",
    },
    en: {
      titleNavBar: "Gustavo",
      home: "Home",
      about: "About",
      contact: "Contact",
      url: "Correia",
    },
  };

  const routes = [
    { page: "Home", path: "/Home", value: 0 },
    { page: "Sobre", path: "/About", value: 1 },
    { page: "Settings", path: "/Contact", value: 2 },
  ];

  const location = useLocation();
  const actualRoute = location.pathname;
  const previousPath = useRef<string | null>(null);

  useEffect(() => {
    const lastPage = localStorage.getItem("lastPage");

    if (lastPage) {
      const actualRouteElement = routes.find(
        (route) => route.path === actualRoute
      );
      const lastRouteElement = routes.find((route) => route.path === lastPage);
      const elementToActivate = document.querySelector(
        `.navBar a[href="${actualRoute}"]`
      );

      if (!actualRouteElement || !lastRouteElement || !elementToActivate)
        return;

      if (actualRouteElement.value < lastRouteElement.value)
        elementToActivate.classList.add("activeRight");
      else elementToActivate.classList.add("activeLeft");

      previousPath.current = location.pathname;
    }
  }, [location]);

  const handleNavLinkClick = (
    event: MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    event.preventDefault();

    if (path === location.pathname) return;

    localStorage.setItem("lastPage", location.pathname);

    const itemToAnimate = document.querySelector(".active");

    if (itemToAnimate) {
      const actualRouteElement = routes.find(
        (route) => route.path === location.pathname
      );
      const toElement = routes.find((route) => route.path === path);

      if (!actualRouteElement || !toElement) return;

      const classToAdd =
        actualRouteElement.value < toElement.value
          ? "removingFromRight"
          : "removingFromLeft";

      itemToAnimate.classList.add(classToAdd);
      itemToAnimate.classList.add("removing");

      setTimeout(() => {
        itemToAnimate.classList.add(classToAdd);
        itemToAnimate.classList.remove("removing");

        navigate(path);
      }, 300);
    } else {
      navigate(path);
    }
  };

  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <div>
      <MenuSettings
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        lang={lang}
        setLang={setLang}
      />
      <div className="header">
        <div className="right">
          <div className="logo">
            <img
              className="logo"
              src={isDarkTheme ? LogoBranca : LogoPreta}
              alt="Logo"
            />
          </div>

          <div className="title">
            <span className="firstWord">
              <DecryptedText
                text={translations[lang].titleNavBar}
                animateOn="view"
                revealDirection="center"
              />
            </span>{" "}
            <span className="secondWord">
              <DecryptedText
                text={translations[lang].url}
                animateOn="view"
                revealDirection="center"
              />
            </span>
          </div>
        </div>
        <div className="titleMinifyed">
          <span>G</span>
          <span style={{ color: "var(--assets-color)" }}>C</span>
        </div>
        <div className="left">
          <nav className="navBar">
            <NavLink
              to="/Home"
              className={({ isActive }) => (isActive ? "active" : "")}
              end
              onClick={(e) => handleNavLinkClick(e, "/Home")}
            >
              <DecryptedText
                text={translations[lang].home}
                animateOn="view"
                revealDirection="center"
              />
            </NavLink>
            <NavLink
              to="/About"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={(e) => handleNavLinkClick(e, "/About")}
            >
              <DecryptedText
                text={translations[lang].about}
                animateOn="view"
                revealDirection="center"
              />
            </NavLink>

            <NavLink
              to="/Contact"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={(e) => handleNavLinkClick(e, "/Contact")}
            >
              <DecryptedText
                text={translations[lang].contact}
                animateOn="view"
                revealDirection="center"
              />
            </NavLink>
            <Icon
              className="icon btn-settings"
              icon="settings"
              onClick={() => setOpenMenu(true)}
            />
          </nav>
        </div>
        <Icon
          onClick={() => {
            setOpenMenuMobile(true);
          }}
          className="icon btn-menu"
          icon="menu"
        />
      </div>
      <hr className="divider" />
    </div>
  );
};
export default NavBar;
