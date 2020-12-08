import React, { useState, useEffect } from "react";
// import styled from "styled-components";

export default function NightDaySwitch(props) {
  const [mode, setMode] = useState(/*new Date().getHours() >= 18*/ false);
  const swicthMode = () => setMode(!mode);

  useEffect(() => {
    if (mode) {
      document.querySelector("html").classList.add("dark-mode");
      document.querySelector("html").classList.remove("light-mode");
    } else {
      document.querySelector("html").classList.add("light-mode");
      document.querySelector("html").classList.remove("dark-mode");
    }
  }, [mode]);

  return (
    <div
      onClick={swicthMode}
      className={`sunrise-container ${mode ? "day" : "night"}`}
    >
      <div className="sunrise-weel">
        <div className="sun"></div>
        <div className="moon"></div>
      </div>
    </div>
  );
}
