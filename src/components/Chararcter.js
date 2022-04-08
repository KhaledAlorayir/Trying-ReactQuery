import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getCharacter, getQuotes } from "../api";

const Chararcter = () => {
  const { id, name } = useParams();
  const c = useQuery(["character", id], getCharacter);
  const q = useQuery(["quotes", name], getQuotes);

  if (c.isLoading || q.isLoading) {
    return (
      <header>
        <h1>Loading</h1>
      </header>
    );
  }

  return (
    <main>
      <h3>{c.data[0].name}</h3>
      <h5>{c.data[0].nickname}</h5>
      <div className="img">
        <img src={c.data[0].img} alt="charcter" />
      </div>
      <div>
        <h4>Job(s):</h4>
        <ul>
          {c.data[0].occupation.map((j) => (
            <li key={j}>{j}</li>
          ))}
        </ul>
      </div>
      {q.data.length !== 0 && (
        <div>
          <h4>Quote(s):</h4>
          <ul>
            {q.data.map((q) => (
              <li className="q" key={q.quote_id}>
                {q.quote}
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
};

export default Chararcter;
