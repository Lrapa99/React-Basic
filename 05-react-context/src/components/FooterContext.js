import React, { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";

const FooterContext = () => {
  const { theme } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);
  return <footer className={theme}>{texts.footerTitle}</footer>;
};

export default FooterContext;
