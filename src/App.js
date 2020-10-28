import React from "react";
import "./App.css";
import "./styles/main.css";
import Header from "./components/Header";
import Routing from "./components/Routing.jsx";

const isOnDesktop = window.innerWidth >= 1230;

function App() {
  return (
    <div className="App">
      {isOnDesktop ? (
        <>
          <Header />
          <Routing />
        </>
      ) : (
        <div className="mobile-version-placeholder">
          <p>Mobile version in construction...</p>
        </div>
      )}
    </div>
  );
}

export default App;
