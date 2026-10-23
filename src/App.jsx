import { useState } from 'react'
import { Routes , Route } from 'react-router-dom'
import './App.css'
import Pokedex from './Pokedex'
import PokemonDetailPage from './pages/PokemonDetailPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Pokedex />} />
      <Route path='/dashboard' element={<Pokedex />} />
      <Route path="/pokemon/:name" element={<PokemonDetailPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
