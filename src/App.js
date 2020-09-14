import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/";
import { useTranslation } from "react-i18next";

import "./App.scss";

function App() {
  const { t } = useTranslation();
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <h1>{t("Titles.home_page")}</h1>
          </Route>

          <Route path="/login">
            <Header />
            <h1>{t("Titles.login_page")}</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
