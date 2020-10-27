import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header(props) {
  return (
    <div className="header row">
      <div className="navigation row">
        <div className="row">
          <div>
            <NavLink exact={true} to="/" activeClassName="selected">
              Pierre Portal
            </NavLink>
          </div>
          <div>
            <NavLink exact={true} to="/about" activeClassName="selected">
              About
            </NavLink>
          </div>
          <div>
            <NavLink exact={true} to="/cv" activeClassName="selected">
              CV
            </NavLink>
          </div>
          <div>
            <NavLink exact={true} to="/contact" activeClassName="selected">
              Contact
            </NavLink>
          </div>
        </div>

        <div className="row">
          <div>LinkedIn</div>
          <div>Medium</div>
          <div>Github</div>
        </div>
      </div>
    </div>
  );
}
