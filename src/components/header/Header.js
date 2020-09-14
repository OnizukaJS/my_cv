import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t, i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <div>
      <nav className="header">
        <h1>Hello Widoun & JB</h1>
        <ul className="header_links">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/login"}>Log In</Link>
          </li>
          <button onClick={() => handleClick("en")}>English</button>
          <button onClick={() => handleClick("fr")}>Français</button>
          <button onClick={() => handleClick("es")}>Español</button>
        </ul>
      </nav>

      <p>{t("Header.thanks")}</p>
    </div>
  );
};

export default Header;
