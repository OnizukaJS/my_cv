import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../../base";
import { useTranslation } from "react-i18next";

const SignUp = ({ history }) => {
  const { t, i18n } = useTranslation();
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div>
      <h1>{t("Login.signup")}</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">{t("Login.signup")}</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
