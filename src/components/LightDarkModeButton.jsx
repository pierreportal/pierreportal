// import React, { useState, useEffect } from "react";

// export default function LightDarkModeButton() {
//   const [mode, setMode] = useState(
//     new Date().getHours() >= 18 ? "dark" : "light"
//   );

//   const toggleButton = () => {
//     if (mode === "light") {
//       setMode("dark");
//     } else {
//       setMode("light");
//     }
//   };

//   useEffect(() => {
//     if (mode === "dark") {
//       document.querySelector("html").classList.remove("light-mode");
//       document.querySelector("html").classList.add("dark-mode");
//     } else {
//       document.querySelector("html").classList.remove("dark-mode");
//       document.querySelector("html").classList.add("light-mode");
//     }
//   }, [mode]);

//   return (
//     <div>
//       <div
//         className={`dark-mode-div ${mode}`}
//         onClick={toggleButton}
//       >
//       </div>
//     </div>
//   );
// }
