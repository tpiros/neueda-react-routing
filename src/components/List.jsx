import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllCharacters } from '../utils/data';

const List = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const results = await getAllCharacters();
      setCharacters(results);
      setIsLoading(false);
    }
    getData();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {characters.map((character, idx) => (
            <Link key={character.id} to={`/characters/${idx + 1}`}>
              <li>{character.name}</li>
            </Link>
          ))}
        </ul>
      )}
    </>
  );
};

export default List;
