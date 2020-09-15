import React, { useCallback, useContext } from "react";
import { Redirect } from "react-router";
import app from "../../base";
import { AuthContext } from "../../Auth";
import { useTranslation } from "react-i18next";

const Login = ({ history }) => {
  const { t, i18n } = useTranslation();

  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>{t("Titles.login_page")}</h1>
      <form onSubmit={handleLogin}>
        <label>
          {t("Login.email")}
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          {t("Login.password")}
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">{t("Titles.login_page")}</button>
      </form>
    </div>
  );
};

export default Login;
