import React from "react";

const Footer = ({ theme, texts }) => {
  return <footer className={theme}>{texts.footerTitle}</footer>;
};

export default Footer;
