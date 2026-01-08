import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

type Language = "pt" | "en";
type LangContextType = {
  lang: Language;
  setLang: React.Dispatch<React.SetStateAction<Language>>;
};
function useLang() {
  return useOutletContext<LangContextType>();
}
const ClicksCount: React.FC = () => {
  const [, setOpenMenu] = React.useState(false);
  const { lang, setLang } = useLang();

  useEffect(() => {}, [lang]);

  return <div className="page"></div>;
};

export default ClicksCount;
