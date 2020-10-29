import React, { useState, useEffect } from "react";

export default function LightDarkModeButton() {
  const [mode, setMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  const toggleButton = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  useEffect(() => {
    if (mode === "dark") {
      document.querySelector("html").classList.add("dark-mode");
    } else {
      document.querySelector("html").classList.remove("dark-mode");
    }
  }, [mode]);

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
