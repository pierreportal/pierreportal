import React from "react";

export default function WorkItem(props) {
  const { item } = props;

  const techTags =
    item.tech &&
    item.tech.map((t) => (
      <span key={t} className={`tech-tag ${t}`}>
        {t}
      </span>
    ));
  return (
    <div className="work-item row">
      <div className="icon">{item.icon}</div>
      <div className="text col">
        <div className="row">
          <h4>{item.title}</h4>
          <div className="row">{techTags}</div>
        </div>
        <p>{item.baseline}</p>
        <a target="blank" href={item.url}>
          {item.source}
        </a>
      </div>
    </div>
  );
}
