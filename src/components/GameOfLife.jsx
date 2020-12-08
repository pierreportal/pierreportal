import React, { useState } from "react";
import Sketch from "react-p5";

export default function GameOfLife() {
  document.title = `Pierre Portal | The Game of Life`;

  const [pointSize, setPointSize] = useState(3);
  const [fRate, setFRate] = useState(15);
  const [randomRate, setRandomRate] = useState(20);

  const [neighborRules, setNeighborRules] = useState({
    0: 0, // default 0
    1: 0, // default 0
    2: "state", // default state
    3: 1, // default 1
    4: 0, // default 0
    5: 0, // default 0
    6: 0, // default 0
    7: 0, // default 0
    8: 0, // default 0
  });

  const configs = {
    colors: [
      [144, 238, 144],
      [255, 127, 127],
      [0, 255, 255],
    ],
  };

  const rules = (state, nNeig) =>
    neighborRules[nNeig] === "state" ? state : neighborRules[nNeig];

  let population, nCols, nRows;

  const craetePopulation = (nCols, nRows) =>
    [...Array(nCols)].map(() => [...Array(nRows)]);

  const countNeighbors = (population, x, y) => {
    let sum = 0;
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        let col = (x + i + nCols) % nCols;
        let row = (y + j + nRows) % nRows;
        sum += population[col][row];
      }
    }
    sum -= population[x][y];
    return sum;
  };

  const setup = (p5, canvasParentRef) => {
    const width = p5.windowWidth,
      height = p5.windowHeight - 46;

    p5.createCanvas(width, height).parent(canvasParentRef);
    p5.frameRate(fRate);

    nCols = ~~(width / pointSize);
    nRows = ~~(height / pointSize);

    population = craetePopulation(nCols, nRows);

    for (let i = 0; i < nCols; i++) {
      for (let j = 0; j < nRows; j++) {
        population[i][j] = ~~(Math.random() * randomRate) === 1;
      }
    }
  };

  const draw = (p5) => {
    p5.background(20);
    p5.fullscreen();

    for (let i = 0; i < nCols; i++) {
      for (let j = 0; j < nRows; j++) {
        const x = i * pointSize;
        const y = j * pointSize;

        if (population[i][j] == 1) {
          const nNeig = countNeighbors(population, i, j);
          const c =
            configs.colors[Math.max(0, nNeig - 1) % configs.colors.length];
          p5.fill(p5.color(c[0], c[1], c[2]));
          p5.noStroke();
          p5.circle(x, y, pointSize, pointSize);
        }
      }
    }

    let newPopulation = craetePopulation(nCols, nRows);

    for (let i = 0; i < nCols; i++) {
      for (let j = 0; j < nRows; j++) {
        let state = population[i][j];
        let neighbors = countNeighbors(population, i, j);
        newPopulation[i][j] = rules(state, neighbors);
      }
    }
    population = newPopulation;
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        hieght: "calc(100vh - 4rem)",
        backgroundColor: "rgb(20,20,20)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "2rem",
          left: "2rem",
        }}
      >
        <div
          className="row"
          style={{
            alignItems: "center",
          }}
        >
          <a
            style={{
              backgroundColor: "black",
              padding: ".5rem",
              borderBottom: "solid 2px rgb(110,115,157)",
              marginRight: "1rem",
            }}
            href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
            target="_blank"
            rel="noopener noreferrer"
          >
            Conway's Game of Life ⤴︎
          </a>

          <p>
            Made with{" "}
            {["Javascript", "p5"].map((item) => (
              <span
                className={`tech-tag ${item
                  .toLowerCase()
                  .replace(" ", "")
                  .replace("-", "")}`}
              >
                {item}
              </span>
            ))}
          </p>
        </div>
      </div>
      <Sketch setup={setup} draw={draw} />
    </div>
  );
}
