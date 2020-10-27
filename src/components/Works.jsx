import React from "react";
import WorkItem from "./WorkItem";

export default function Works(props) {
  const { data, exp } = props;
  const workItems = data.map((item) => (
    <WorkItem key={item.title} item={item} />
  ));
  const expItems = exp.map((item) => (
    <div className="experience-item">
      <div className="exp-item row">
        <h4>{item.header}</h4>
        <div className="company">{item.company}</div>
        <div className="dates">{item.dates}</div>
      </div>
      <p>{item.details}</p>
    </div>
  ));
  return (
    <div className="cv-works-column col">
      <div className="content">
        {expItems}
        <h4 style={{ marginLeft: "-2rem", marginTop: "2rem" }}>
          Some of my personal projects
        </h4>
        <ul>{workItems}</ul>
      </div>
    </div>
  );
}
