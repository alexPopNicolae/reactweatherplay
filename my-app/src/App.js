import React from "react";
import { Bucuresti } from "./pages/Bucuresti";
import { Cluj } from "./pages/Cluj";
import { London } from "./pages/London";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PageRoute from "./customroutes/PageRoute";
import "./App.scss";

function App() {
  return (
    <Router>
      <Switch>
        <PageRoute exact path="/" component={Bucuresti} />
        <PageRoute exact path="/cluj" component={Cluj} />
        <PageRoute exact path="/london" component={London} />
      </Switch>
    </Router>
  );
}

export default App;
