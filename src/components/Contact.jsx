import React from "react";

export default function Contact() {
  document.title = `Pierre Portal | Contact`;

  return (
    <div className="contact-container col">
      <div className="text-content">
        <p>
          <a href="mailto:pierreportal.mac@gmail.com">
            pierreportal.mac@gmail.com
          </a>
        </p>

        <p>
          I share open source projects on
          <a target="blank" href="https://github.com/pierreportal">
            GitHub
          </a>
          ,
        </p>

        <p>
          write about AI, machine learning and software engineering on
          <a target="blank" href="https://hello-pierreportal.medium.com/">
            Medium
          </a>
          ,
        </p>

        <p>
          and share my experience on
          <a target="blank" href="https://www.linkedin.com/in/pierreportal/">
            Linkedin
          </a>
          .
        </p>
      </div>
    </div>
  );
}
