import React from "react";
import Education from "./Education";
import Skills from "./Skills";
import Works from "./Works";
import data from "../fakeData";

export default function CV() {
  return (
    <div className="cv-container row">
      <div className="col">
        <h4>Skills</h4>
        <Skills data={data.skills} />
      </div>

      <div className="col">
        <h4>Work experience</h4>
        <Works data={data.works} exp={data.experience} />
      </div>
      <div className="col">
        <h4>Education</h4>
        <Education data={data.education} />
      </div>
    </div>
  );
}
