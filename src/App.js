import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Login, Signup } from "./components/";
import { useTranslation } from "react-i18next";

import "./App.scss";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

function App() {
  const { t } = useTranslation();
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
