import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import PokemonList from './PokemonList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Pokemon React App Using PokeAPI</h1>
      <Pokedex />
    </>
  )
}

export default App
