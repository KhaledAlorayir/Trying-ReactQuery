import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { getbyName } from "../api";

const Search = ({ Page }) => {
  const [Text, setText] = useState("");
  const queryClinet = useQueryClient();

  const mutation = useMutation(getbyName, {
    onSuccess: (data, { page }) => {
      queryClinet.setQueryData(["characters", { Page }], data);
      //queryClinet.invalidateQueries(); "characters", page]
    },
  });

  const Handler = (e) => {
    e.preventDefault();
    mutation.mutate({ Text, page: Page });
    setText("");
  };

  return (
    <form onSubmit={Handler}>
      <input
        required
        placeholder="enter name"
        value={Text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
