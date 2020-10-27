import React, { useState } from "react";

export default function SkillItem(props) {
  const { item, level } = props;
  const [showLevel, setShowLevel] = useState(false);

  const size = showLevel ? `${level * 10}%` : 0;

  const handleMouseOver = () => setShowLevel(true);
  const handleMouseLeave = () => setShowLevel(false);

  return (
    <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
      <div className="skill-item">{item}</div>
      <div className="skill-levelbar" style={{ width: size }}></div>
    </div>
  );
}
