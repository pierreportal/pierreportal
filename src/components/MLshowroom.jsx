import React from "react";

export default function MLshowroom() {
  document.title = `Pierre Portal | ML Lab`;

  const c = `function Call() {
    this is a function
    to cool stuff
}
Call()
`;
  return (
    <div className="home-container">
      <div className="grid">
        <div></div>
        <div>
          <pre>{c}</pre>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
