import React from "react";

import data from "../fakeData";

const { works } = data;

export default function Portfolio() {
  const workItems = works.map((work) => {
    return (
      <div key={work.title} style={{}}>
        {work.title}
      </div>
    );
  });
  return (
    <div className="portfolio-container">
      <div className="portfolio-grid">{workItems}</div>
    </div>
  );
}
