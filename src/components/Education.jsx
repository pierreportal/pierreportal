import React from "react";

export default function Education(props) {
  const { data } = props;
  const educationItem = data.map((edu) => {
    return (
      //   <div>
      //     <h4>{edu.header}</h4>
      //     <p>{edu.dates}</p>
      //     <p>{edu.details}</p>
      //   </div>

      <div className="experience-item">
        <div className="exp-item">
          <h4>{edu.header}</h4>
          <div className="exp-item row">
            <div className="company">{edu.company}</div>
            <div className="dates">{edu.dates}</div>
          </div>
        </div>
        <p>{edu.details}</p>
      </div>
    );
  });
  return <div className="cv-education-column col">{educationItem}</div>;
}
