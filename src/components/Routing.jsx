import React from "react";
import { Switch, Route } from "react-router-dom";
import CV from "./CV";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import NotFound from "./NotFound";
import GameOfLife from "./GameOfLife";
import Biblio from "./Biblio";
import Showroom from "./Showroom";

import Memos from "./Memos";
import Portfolio from "./Portfolio";
import MLshowroom from "./MLshowroom";
// import { AnimatedSwitch } from "react-router-transition";
import data from "../fakeData";

const { works } = data;

const randPosition = () => ({
  left: `${100 / 2 + Math.random() * (window.innerWidth - 100)}px`,
  top: `${100 / 2 + Math.random() * (window.innerHeight - 100)}px`,
});

const positionedData = works.map((w) => ({ ...w, position: randPosition() }));

export default function Routing() {
  return (
    <Switch>
      {/* <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      > */}
      <Route
        exact={true}
        path="/"
        component={() => <Home works={positionedData} />}
      />
      <Route exact={true} path="/cv" component={() => <CV />} />
      <Route exact={true} path="/about" component={() => <About />} />
      <Route exact={true} path="/contact" component={() => <Contact />} />

      <Route exact={true} path="/temp" component={() => <GameOfLife />} />

      <Route exact={true} path="/bookshelf" component={() => <Biblio />} />

      {/* <Route exact={true} path="/showroom" component={() => <Showroom />} /> */}


      {/* <Route exact={true} path="/memos" component={() => <Memos />} /> */}

      {/* <Route exact={true} path="/portfolio" component={() => <Portfolio />} /> */}

      {/* <Route
        exact={true}
        path="/portfolio/:project"
        component={() => <Contact />}
      /> */}

      {/* <Route exact={true} path="/ml-lab" component={() => <MLshowroom />} /> */}

      {/* </AnimatedSwitch> */}
      <Route path="*" exact={true} component={() => <NotFound />} />
    </Switch>
  );
}
