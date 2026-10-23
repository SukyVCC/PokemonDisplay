import React, { useEffect, useState } from 'react';
import "./App.css"

const PokemonList = () => {
  const [pokemon, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon');
      const data = await response.json();
      setPokemons(data.results);
    } catch (error) {
      console.error('Failed to fetch Pokemon:', error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
      <div className="pokemon-container">
        {pokemon.map((pokemon, index) => (
          <div key={index} className="pokemon-card">
            <div className="pokemon-image">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                alt={pokemon.name}
              />
            </div>
            <div className="pokemon-name">{pokemon.name}</div>
          </div>
        ))}
      </div>
  );
};

export default PokemonList;