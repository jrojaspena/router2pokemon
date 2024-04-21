import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

 const Pokemons = () => {
    const [pokemones, setPokemones] = useState([])
    const [selectedPokemon, setSelectedPokemon] = useState('');
    const navigate = useNavigate();
    const atrapalo = async()=> {
        const {data} = await axios("https://pokeapi.co/api/v2/pokemon/")
        setPokemones(data.results);
    }
    useEffect(() => {
            atrapalo();
    }, [])
    const handleClick = () => {
        if (selectedPokemon) {
            navigate(`/home/pokemon/${selectedPokemon}`);
        } else {
          Swal.fire("Selecciona un Pokemon");
        }
    };


  return (
    <div style={{display:"flex",justifyContent: "center", alignItems: "center", flexDirection: "column", margin:"50px", padding:"10px"}}>
    <div>Selecciona un Pokemón</div>

    <select value={selectedPokemon} onChange={(e) => setSelectedPokemon(e.target.value)}>
    <option value="">Selecciona un Pokémon</option>
        {pokemones.map((pokemon, index) => (
     <option key={index} value={pokemon.name}>
        {pokemon.name}
    </option>))}
    </select>
    <button onClick={(e)=> handleClick(e)}>Ver detalles</button>
    </div>
  )

}

export default Pokemons