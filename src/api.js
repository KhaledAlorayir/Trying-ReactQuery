export const getCharacters = async ({ queryKey }) => {
  const data = await fetch(
    `https://breakingbadapi.com/api/characters?limit=10&offset=${queryKey[1].Page}`
  );

  return data.json();
};

export const getCharacter = async ({ queryKey }) => {
  const data = await fetch(
    `https://breakingbadapi.com/api/characters/${queryKey[1]}`
  );
  return data.json();
};

export const getQuotes = async ({ queryKey }) => {
  const author = queryKey[1].split(" ").join("+");
  const data = await fetch(
    `https://breakingbadapi.com/api/quote?author=${author}`
  );

  return data.json();
};

export const getbyName = async ({ Text }) => {
  const data = await fetch(
    `https://breakingbadapi.com/api/characters?name=${Text}`
  );

  return data.json();
};

//https://breakingbadapi.com/api/characters?name=Walter
