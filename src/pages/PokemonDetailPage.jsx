import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const URL = 'https://pokeapi.co/api/v2/pokemon/';

const PokemonDetailPage = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(`${URL}${id}`);
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error('Failed to fetch Pokemon details:', error);
      }
    };

    fetchPokemon();
  }, [id]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Types: {pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
    </div>
  );
};

export default PokemonDetailPage;