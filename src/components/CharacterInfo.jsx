import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleCharacter } from '../utils/data';

const CharacterInfo = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function getData() {
      const data = await getSingleCharacter(id);
      setCharacter(data);
      setIsLoading(false);
    }
    getData();
  }, [id]);

  return (
    <>
      {isLoading ? (
        <p>Loading..</p>
      ) : (
        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title">{character.name}</h2>I am{' '}
            {character.height} cm tall and I was born in {character.birth_year}.
          </div>
        </div>
      )}
    </>
  );
};

export default CharacterInfo;
