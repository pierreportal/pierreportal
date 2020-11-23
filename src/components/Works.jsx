import React from "react";
import WorkItem from "./WorkItem";

export default function Works(props) {
  const { data, exp } = props;
  const workItems = data.map((item) => (
    <WorkItem key={item.title} item={item} />
  ));
  const formatStackDetails = (str) => {
    // console.log(str.split("Stack used: "));
    return (
      <p className="work-details-stack">
        <b>Stack used: </b>
        {str
          .split("Stack used: ")[1]
          .split(",")
          .map((item) => (
            <span
              className={`tech-tag ${item
                .trim()
                .toLowerCase()
                .replace(" ", "")
                .replace("-", "")}`}
            >
              {item.trim()}
            </span>
          ))}
      </p>
    );
  };
  const expItems = exp.map((item) => (
    <div className="experience-item">
      <div className="exp-item row">
        <h4>{item.header}</h4>
        <div className="company">{item.company}</div>
        <div className="dates">{item.dates}</div>
      </div>
      {item.details.map((details) => {
        if (details.startsWith("Stack used:")) {
          return formatStackDetails(details);
        } else return <p key={details}>{details}</p>;
      })}
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
        {/* Display only the last 5 or 6 and add a link to a new page to see all the projects */}
      </div>
    </div>
  );
}
