import React from 'react'
import PokemonList from './PokemonList'

const Pokedex = () => {
  return (
    <div>
      <h1>Browse all Pokemon</h1>
      <button>Back</button>
      <button> 1 </button>
      <button>Next</button>
      <div className="pokemon-container">
      <PokemonList />
      </div>
      <button>Back</button>
      <button> 1 </button>
      <button>Next</button>
    </div>
  )
}

export default Pokedex