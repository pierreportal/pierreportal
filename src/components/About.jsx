import React from "react";

export default function About() {
  document.title = `Pierre Portal | About`;

  return (
    <div className="about-container col">
      <div className="text-content">
        <div className="about-pic"></div>
        <p>
          <b>Full stack software developer and AI enthusiast</b>
        </p>
        <p>
          With a solid artistic background, passionate about AI and software
          engineering, self learning, psychology, art, science, design, I build
          open source projects on{" "}
          <a target="blank" href="https://github.com/pierreportal">
            GitHub
          </a>{" "}
          and share thoughts about machine learning and AI on{" "}
          <a target="blank" href="https://hello-pierreportal.medium.com/">
            Medium
          </a>
          .
          <br />
          <br />
          {/* After a few years living and working in France, the UK and Canada, I
          came in Berlin in May 2019 to study full stack web development at
          Ironhack. Right after graduation I have been a teacher assistant for
          the two following cohorts. Preparing and giving lectures as well as
          tutoring students in groups or in one-to-one was a really exciting and
          interesting job. I am now since January 2020 a proud full stack
          Javascript software developer at the legal-tech company Lawlift.
          <br />
          <br />I am using diverse technologies such as Meteor.js, Vue, Node.js
          and MongoDB. Driven by my passion and curiosity I'm also studying
          machine learning & deep learning and received two certificates from
          Stanford University and Deeplearning.ai via Coursera and I am
          currently enrolled in another advanced deep learning nanodegree with
          Udacity.
          <br />
          <br />
          AI is an amazing and captivating field where I want my career to
          evolve. I strongly believe in a near future where humans and
          intelligent machines build together a better world.
          <br />
          <br /> */}
          Outside of work and studies, I am a music lover and musician, beginner
          painter and sculptor, maker, nature observer. My background is in
          graphic design and music business. I have a taste and an eye for
          details and good design and I give a lot of importance in the visual
          impact of what I create, in software or artistic work.
        </p>

        <p className="about-stack-of-choice">
          My current tech stack of choice:
          <h3>Web development</h3>
          {[
            "Javascript",
            "React",
            "Node js",
            "Express",
            "MongoDB",
            "Flask",
          ].map((item) => (
            <span
              className={`tech-tag ${item
                .toLowerCase()
                .replace(" ", "")
                .replace("-", "")}`}
            >
              {item}
            </span>
          ))}
          <h3>Machine Learning</h3>
          {[
            "Python",
            "Scikit-learn",
            "Numpy",
            "Pandas",
            "Tensorflow",
            "Pytorch",
          ].map((item) => (
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
  );
}
