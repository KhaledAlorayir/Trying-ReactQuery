import React, { createContext, useState } from "react";

const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [Page, setPage] = useState(0);

  return (
    <StateContext.Provider value={{ Page, setPage }}>
      {children}
    </StateContext.Provider>
  );
};

export { StateProvider, StateContext };
