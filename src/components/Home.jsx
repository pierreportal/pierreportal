import React, { useState, useEffect } from "react";

import data from "../fakeData";
const { works } = data;

const randX = (margin) =>
  margin / 2 + Math.random() * (window.innerWidth - margin);
console.log("randX: ", randX);
const randY = (margin) =>
  margin / 2 + Math.random() * (window.innerHeight - margin);
console.log("randY: ", randY);

export default function Home() {
  const [displayedTitle, setDisplayedTitle] = useState({});

  const items = works
    .filter((x) => x.title !== displayedTitle.title)
    .map((w) => (
      <div
        key={w.title}
        className={`home-item-particle ${
          w.tech ? w.tech[0] : w.categories[0].split(" ").join("")
        } ${
          displayedTitle.title &&
          w.title === displayedTitle.title &&
          "displayed"
        }`}
        style={{
          position: "absolute",
          left: `${randX(40)}px`,
          top: `${randY(100)}px`,
        }}
        onClick={() => handleMouseOver(w)}
      ></div>
    ));
  const handleMouseOver = (elem) => setDisplayedTitle(elem);

  useEffect(
    () => setDisplayedTitle(works[Math.floor(Math.random() * works.length)]),
    []
  );

  return (
    <div className="home-container">
      {/* {window.innerWidth >= 900 ? (
        <> */}
      <div className="project-display col">
        <h2>{displayedTitle.title}</h2>
        {displayedTitle.baseline && <p>{displayedTitle.baseline}</p>}
        {displayedTitle.tech && (
          <div className="row home-tech-tags">
            {displayedTitle.tech.map((t) => (
              <span key={t} className={`tech-tag ${t}`}>
                {t}
              </span>
            ))}
          </div>
        )}
        {displayedTitle.source && (
          <a
            target="blank"
            className="home-title-link"
            href={displayedTitle.url}
          >
            read on {displayedTitle.source}
          </a>
        )}
      </div>
      {items}
      {/* </>
      ) : (
        <p>Mobile version in construction...</p>
      )} */}
    </div>
  );
}
