import React, { useState, useEffect } from "react";

import data from "../fakeData";

export default function Memos() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const { memos } = data;

  const availableMemos = Object.keys(memos);

  const handleTyping = (e) => {
    const { value } = e.target;
    setSearchInput(value);
  };

  useEffect(() => {
    if (availableMemos.includes(searchInput.toLowerCase()))
      setSearchResult(memos[searchInput]);
  }, [searchInput]);

  return (
    <div className="memo-container col justify-center">
      <div className="memos-search-container row">
        <input
          type="text"
          value={searchInput}
          onChange={handleTyping}
          placeholder="ex: docker"
        />
      </div>

      <div className="memos-window">
        <div className="row">
          <div className="red"></div>
          <div className="yel"></div>
          <div className="gre"></div>
        </div>

        <div className="memo-window-content">
          {searchResult.map((result) => (
            <li key={result}>{result}</li>
          ))}
        </div>
      </div>
    </div>
  );
}
