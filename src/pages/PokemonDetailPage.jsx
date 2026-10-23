import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../App.css'

const URL = 'https://pokeapi.co/api/v2/pokemon/';

const PokemonDetailPage = () => {
    // take name from the url and use it to fetch the pokemon data from the api
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(`${URL}${name}`);
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error('Failed to fetch Pokemon details:', error);
      }
    };

    fetchPokemon();
  }, [name]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pokemon-detail">
          <a className="back-button" href="/">
            Back to Browsing
          </a>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <div>{pokemon.types.map(
        (typeInfo) => (
            <div id='type-badge' className={`type-badge ${typeInfo.type.name}`} key={typeInfo.type.name}>
              {typeInfo.type.name}
            </div>
        )
      )}</div>
      <div>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      </div>
    </div>
  );
};

export default PokemonDetailPage;