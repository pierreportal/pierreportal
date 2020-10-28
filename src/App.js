import React from "react";
import "./App.css";
import "./styles/main.css";
import Header from "./components/Header";
import Routing from "./components/Routing.jsx";

const isOnDesktop = true;

function App() {
  return (
    <div className="App">
      {isOnDesktop ? (
        <>
          <Header />
          <Routing />
        </>
      ) : (
        <div className="mobile-version-placeholder col">
          <p>Mobile version in construction...</p>
          <a target="blank" href="https://github.com/pierreportal">
            GitHub
          </a>
          <a target="blank" href="https://www.linkedin.com/in/pierreportal/">
            Linkedin
          </a>
          <a target="blank" href="https://medium.com/@hello.pierreportal">
            Medium
          </a>
          {/* <p>pierreportal.mac@gmail.com</p> */}
        </div>
      )}
    </div>
  );
}

export default App;
