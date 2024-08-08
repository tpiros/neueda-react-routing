const BASE_URL = 'https://swapi.dev';

const getAllCharacters = async () => {
  const response = await fetch(`${BASE_URL}/api/people`);
  const { results } = await response.json();
  return results;
};

const getSingleCharacter = async (id) => {
  const response = await fetch(`${BASE_URL}/api/people/${id}`);
  const result = await response.json();
  return result;
};

export { getAllCharacters, getSingleCharacter };
