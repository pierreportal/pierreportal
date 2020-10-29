import React, { useState } from "react";

export default function LightDarkModeButton() {
  const [mode, setMode] = useState("light");

  const toggleButton = () => {
    if (mode === "light") {
      document.querySelector("html").classList.add("dark-mode");
      setMode("dark");
    } else {
      document.querySelector("html").classList.remove("dark-mode");
      setMode("light");
    }
  };

  return (
    <div>
      <div
        className={`dark-mode-div ${mode}`}
        onClick={toggleButton}
        // style={{ backgroundImage: `url(${"../img/city-sun.png"})` }}
      >
        {/* {mode === "dark" ? "🌞" : "🌑"} */}
      </div>
    </div>
  );
  // }
}
