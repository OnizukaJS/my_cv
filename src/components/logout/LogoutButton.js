import React from "react";
import { useTranslation } from "react-i18next";

const LogoutButton = ({ logout }) => {
  const [t, i18n] = useTranslation();
  return (
    <div>
      <h1>{t("Titles.home")}</h1>
      <button onClick={logout}>{t("Login.signout")}</button>
    </div>
  );
};

export default LogoutButton;
