import React from "react";
import { NavLink } from "react-router-dom";

export default function NotFound() {
  document.title = `Pierre Portal | Not Found...`;

  return (
    <div className="about-container col">
      <div className="text-content not-exist">
        <h2>Oops ! This page doesn’t exist. 🤷 (yet)</h2>
        <NavLink exact={true} to="/" activeClassName="selected">
          Let's go back home.
        </NavLink>
      </div>
    </div>
  );
}
