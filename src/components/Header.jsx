import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import LightDarkModeButton from "./LightDarkModeButton";
import NightDaySwitch from "./NightDaySwitch";

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
          {/* <div>
            <NavLink exact={true} to="/portfolio" activeClassName="selected">
              Work
            </NavLink>
          </div> */}
          {/* <div>
            <NavLink exact={true} to="/ml-lab" activeClassName="selected">
              ML lab
            </NavLink>
          </div> */}
          <div>
            <NightDaySwitch />
          </div>
        </div>

        <div className="row">
          <a target="blank" href="https://github.com/pierreportal">
            GitHub
          </a>
          <a target="blank" href="https://www.linkedin.com/in/pierreportal/">
            Linkedin
          </a>
          <a target="blank" href="https://hello-pierreportal.medium.com/">
            Medium
          </a>
        </div>
      </div>
    </div>
  );
}
