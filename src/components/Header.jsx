import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "/Images/image 7.png";
import userIcon from "/Images/icon-user.svg";
import georgiaIcon from "/Images/GE.svg";
import arrowIcon from "/Images/icon-chevron-down.svg";
import Navigation from "./Navigation";

export default function Header() {
  const { i18n } = useTranslation();
  const {t} = useTranslation()
  const location = useLocation();
  const id = location.pathname.replace("/", "");

  const headerLinks = [
    { to: "/", label: t("Navigation.main") },
    { to: "/AboutUs", label: t("Navigation.aboutUs") },
    { to: "/Rooms", label: t("Navigation.rooms") },
    { to: "/Reservation", label: t("Navigation.reservation") },
    { to: "/Service", label: t("Navigation.service") },
    { to: "/Gallery", label: t("Navigation.gallery") },
    { to: "/ContactUs", label: t("Navigation.contactUs") },
  ];

  const handleLanguageChange = () => {
    const newLanguage = i18n.language === "en" ? "ge" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <header className="flex items-center px-8 py-2 justify-between bg-mwvane w-full">
      <div className="flex flex-row">
      <Link to="/">
        <img src={Logo} alt="logo" className="w-20 h-10" />
      </Link>
      <div className="flex flex-col items-center justify-center">
      <h1 className="text-white">{t("Header.hotel-name")}</h1> 
      </div>
      </div>
      <Navigation
        links={headerLinks}
        activeLink={
          id === "" ? 0 : headerLinks.findIndex((link) => link.to === "/" + id)
        }
      />
      <div className="flex items-center">
        <Link to="/login">
          <img src={userIcon} alt="user icon" className="ml-8" />
        </Link>
        <div style={{ color: "white", cursor: "pointer", padding: '5px 0', width: '40px', textAlign:'center' }} onClick={handleLanguageChange}>
          {i18n.language === "en" ? "Ge" : "En"}
        </div>
        {/* <img src={georgiaIcon} alt="georgia icon" className="ml-7" />
        <img src={arrowIcon} alt="arrow icon" /> */}
      </div>
    </header>
  );
}