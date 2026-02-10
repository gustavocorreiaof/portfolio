import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../footer";
import { useState } from "react";
import MenuMobile from "../menuMobile";

type Language = "pt" | "en";

const AppLayout: React.FC = () => {
  const [, setOpenSettings] = useState(false);
  const [openMenuMobile, setOpenMenuMobile] = useState(false);

  const [lang, setLang] = useState<Language>("pt");

  return (
    <div className="page">
      <NavBar
        setOpenSettings={setOpenSettings}
        lang={lang}
        setLang={setLang}
        setOpenMenuMobile={setOpenMenuMobile}
      />

      <Outlet context={{ lang, setLang }} />

      <Footer lang={lang} />
      <MenuMobile
        lang={lang}
        setOpenMenu={setOpenMenuMobile}
        openMenu={openMenuMobile}
      />
    </div>
  );
};

export default AppLayout;
