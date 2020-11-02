import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const stringToUrl = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, "-")
    .replace("--", "");

// import IsScrolling from "react-is-scrolling";

// import data from "../fakeData";
// const { works } = data;

function Home(props) {
  const { works } = props;

  document.title = `Pierre Portal`;

  const [displayedTitle, setDisplayedTitle] = useState({});
  const handleClickOnIcon = (elem) => setDisplayedTitle(elem);

  // const [mouseIsOver, setMouseIsOver] = useState(false);
  // const handleMouseOverIcon = (item) => setMouseIsOver(true);

  useEffect(
    () => setDisplayedTitle(works[Math.floor(Math.random() * works.length)]),
    []
  );

  const items = works
    // .filter((x) => x.title !== displayedTitle.title)
    .map((w, i) => (
      // <NavLink
      //   exact={true}
      //   to={`/portfolio/${stringToUrl(w.title)}`}
      <div
        key={w.title}
        // onMouseOver={() => handleMouseOverIcon(w)}
        className={`home-item-particle ${
          w.tech ? w.tech[0] : w.categories[0].split(" ").join("")
        } ${
          displayedTitle.title &&
          w.title === displayedTitle.title &&
          "displayed"
        }`}
        style={{
          position: "absolute",
          ...w.position,
        }}
        onMouseOver={() => handleClickOnIcon(w)}
      >
        {i <= 2 && <div className="home-new-project-tag">New!</div>}
        {/* </NavLink> */}
      </div>
    ));

  return (
    <div className="home-container">
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
        {/* <div>↓</div> */}
      </div>
      {items}
    </div>
  );
}

export default Home;
