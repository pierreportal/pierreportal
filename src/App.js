import React from "react";
import "./App.css";
import "./styles/main.css";
import Header from "./components/Header";
import Routing from "./components/Routing.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Routing />
    </div>
  );
}

export default App;
