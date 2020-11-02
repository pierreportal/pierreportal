import React, { useState, useEffect } from "react";
// import styled from "styled-components";

export default function NightDaySwitch(props) {
  const [mode, setMode] = useState(new Date().getHours() >= 18);
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
      class={`sunrise-container ${mode ? "day" : "night"}`}
    >
      <div class="sunrise-weel">
        <div class="sun"></div>
        <div class="moon"></div>
      </div>
    </div>
  );
}
