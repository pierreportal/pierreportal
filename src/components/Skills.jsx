import React from "react";
import SkillItem from "./SkillItem";

export default function Skills(props) {
  const skillItem = props.data.map((skill) => (
    <li key={skill.label}>
      <SkillItem item={skill.label} level={skill.level} />
    </li>
  ));
  return (
    <div className="cv-skills-column col">
      <div className="content">
        <ul>{skillItem}</ul>
        <h4 style={{ marginLeft: "-2rem", marginTop: "2rem" }}>Languages</h4>
        <ul>
          <li>French (native)</li>
          <li>English (fluent)</li>
        </ul>
        <h4 style={{ marginLeft: "-2rem", marginTop: "2rem" }}>Interests</h4>
        <ul>
          <li>AI</li>
          <li>Science</li>
          <li>NLP</li>
          <li>Psychology</li>
          <li>Physics</li>
          <li>Medicine</li>
          <li>Art</li>
          <li>Computer Science</li>
          <li>Music</li>
          <li>Architecture</li>
          <li>Design</li>
        </ul>

        {/* Interests AI Sciences NLP Psychology Physics Medicine Art Computer
        science Machine Learning Music Architecture  */}
      </div>
    </div>
  );
}
