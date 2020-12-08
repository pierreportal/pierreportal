import React from "react";

import data from "../fakeData";

const { biblio } = data;

const bookListItem = (item) => {
  const { title, author, link, tag } = item;
  return (
    <div className="bookshelf-link" key={title}>
      <div>
        <b>{title}</b> ~ {author}{" "}
        {tag.map((t) => (
          <span
            key={t}
            className={`tech-tag ${t.split(" ").join("").toLowerCase()}`}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

const mapBooks = (collection, filters) => {
  return collection
    .filter((book) => filters.includes(book.tag[0]))
    .map((book) => bookListItem(book));
};
const showPeople = false;

export default function Biblio() {
  document.title = `Pierre Portal | Bookshelf`;
  const { books, articles, people, art } = biblio;

  const AIbookList = mapBooks(books, [
    "Artificial Intelligence",
    "Machine Learning",
  ]);

  const SciencebookList = mapBooks(books, ["Science", "Psychology"]);
  const ArtbookList = mapBooks(books, ["Art", "Digital Art", "Spirituality"]);

  const peopleList = people.map((p) => (
    <div key={p} className="bookshelf-people-item">
      {p}
    </div>
  ));

  return (
    <div className="bookshelf-main-container col">
      <div className="row spread">
        <div className="col">
          <div className="bookshelf-category col">
            <h2 style={{ opacity: ".8", marginBottom: "1rem" }}>
              A few inspiring books{" "}
              {showPeople
                ? "..."
                : "about Humans, and other intelligent machines."}
            </h2>
            <div className="bookshelf-container col">
              <div className="col">{AIbookList}</div>
            </div>
          </div>
          {/*  */}
          <div className="bookshelf-category col">
            <h2>.</h2>
            <div className="bookshelf-container col">
              <div className="col">{SciencebookList}</div>
            </div>
          </div>
          {/*  */}
          <div className="bookshelf-category col">
            <h2>.</h2>
            <div className="bookshelf-container col">
              <div className="col">{ArtbookList}</div>
            </div>
            {/*  */}
          </div>
          <div className="bookshelf-category col">
            <h2 style={{ marginBottom: "3rem" }}>...</h2>

            {showPeople && (
              <>
                <h2 style={{ marginBottom: "3rem" }}>
                  ... and inspiring people
                </h2>
                <div style={{ maxWidth: "40rem", textAlign: "center" }}>
                  {peopleList}...
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
