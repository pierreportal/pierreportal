import React from "react";

export default function Contact() {
  document.title = `Pierre Portal | Contact`;

  return (
    <div className="contact-container">
      <div className="text-content">
        <p>pierreportal.mac@gmail.com</p>
        <a target="blank" href="https://github.com/pierreportal">
          GitHub
        </a>
        <a target="blank" href="https://www.linkedin.com/in/pierreportal/">
          Linkedin
        </a>
        <a target="blank" href="https://medium.com/@hello.pierreportal">
          Medium
        </a>
      </div>
    </div>
  );
}
