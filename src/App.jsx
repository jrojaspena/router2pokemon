import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './views/Home'
import Pokemons from './views/Pokemons'
import PokemonSelect from './views/PokemonSelect'

function App() {
  
  return (
    <>
    <NavBar></NavBar>
    <Routes>
    <Route path='/home' element={<Home></Home>}></Route>
    <Route path='/home/pokemon/' element={<Pokemons></Pokemons>}></Route>
    <Route path='/home/pokemon/:name' element={<PokemonSelect></PokemonSelect>}></Route>
    <Route path='*' element={<Home></Home>}></Route>
    </Routes>
    </>
  )
}  

export default App