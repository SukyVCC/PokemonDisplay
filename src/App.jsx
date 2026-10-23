import { useState } from 'react'
import { Routes , Route } from 'react-router-dom'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import PokemonList from './PokemonList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<PokemonDex />} />
      <Route path="/pokemon/:name" element={<PokemonDetailPage />} />
    </Routes>
  )
}

export default App
