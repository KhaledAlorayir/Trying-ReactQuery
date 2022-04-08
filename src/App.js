import React, { useContext } from "react";
import List from "./components/List";
import { Route, Routes, useNavigate } from "react-router-dom";
import Chararcter from "./components/Chararcter";
import { useQueryClient } from "react-query";
import { StateContext } from "./components/StateContext";

function App() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { setPage } = useContext(StateContext);

  const Reset = () => {
    setPage(0);
    queryClient.invalidateQueries("characters");
    navigate("/");
  };

  return (
    <>
      <header>
        <h1 onClick={Reset}>Breaking bad</h1>
      </header>
      <Routes>
        <Route path="*" element={<h2>404</h2>} />
        <Route path="/" element={<List />} />
        <Route path="/:id/:name" element={<Chararcter />} />
      </Routes>
    </>
  );
}

export default App;
