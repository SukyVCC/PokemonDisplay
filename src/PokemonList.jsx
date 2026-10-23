import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import "./App.css"

const PokemonList = () => {
  const [pokemon, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
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
      <Routes className="pokemon-container">
        {pokemon.map((pokemon, index) => (
          <Route key={index} className="pokemon-card" path={`/pokemon/${index + 1}`} element={<PokemonDetailPage />} >
            <div className="pokemon-image">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                alt={pokemon.name}
              />
            </div>
            <div className="pokemon-name">{pokemon.name}</div>
          </Route>
        ))}
      </Routes>
  );
};

export default PokemonList;