import React from "react";
import { Switch, Route } from "react-router-dom";
import CV from "./CV";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

export default function Routing() {
  return (
    <Switch>
      <Route exact={true} path="/" component={() => <Home />} />
      <Route exact={true} path="/cv" component={() => <CV />} />
      <Route exact={true} path="/about" component={() => <About />} />
      <Route exact={true} path="/contact" component={() => <Contact />} />
    </Switch>
  );
}
