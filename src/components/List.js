import React, { useContext } from "react";
import { getCharacters } from "../api";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Search from "./Search";
import { StateContext } from "./StateContext";

const List = () => {
  const { Page, setPage } = useContext(StateContext);

  const { data, status } = useQuery(["characters", { Page }], getCharacters, {
    keepPreviousData: true,
  });

  if (status === "loading") {
    return (
      <header>
        <h1>Loading</h1>
      </header>
    );
  }

  return (
    <main>
      <Search Page={Page} />
      <ul>
        {data.map((c) => (
          <li key={c.char_id}>
            <Link to={`/${c.char_id}/${c.name.toLowerCase()}`}>{c.name}</Link>
          </li>
        ))}
      </ul>
      <div className="controls">
        <button
          disabled={Page === 0}
          onClick={() => setPage((prev) => prev - 10)}
        >
          Prev
        </button>
        <button
          disabled={data.length !== 10}
          onClick={() => setPage((prev) => prev + 10)}
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default List;
