import React from "react";
import { AuthProvider } from "../context/AuthContext";
import { LaguageProvider } from "../context/LanguageContext";
import { ThemeProvider } from "../context/ThemeContext";
import FooterContext from "./FooterContext";
import HeaderContext from "./HeaderContext";
import MainContext from "./MainContext";

const MyPageContext = () => {
  return (
    <div className="my-page">
      <AuthProvider>
        <ThemeProvider>
          <LaguageProvider>
            <HeaderContext />
            <MainContext />
            <FooterContext />
          </LaguageProvider>
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
};

export default MyPageContext;
