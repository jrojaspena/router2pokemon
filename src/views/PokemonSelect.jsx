import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PokemonSelect = () => {
    const {name} = useParams()
    const [pokemon, setPokemon ] = useState([])
    const atrapalo = async() =>{
        const {data} = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`)
        setPokemon(data)
        console.log(pokemon)
    }
    useEffect(() => {
      atrapalo()
    },)
    
  return (
   
     
    <div className="divCard">
      <div style={{padding:"20px", display:"flex", flexDirection:"column"}}>
      {pokemon.sprites && (
            <img src={pokemon.sprites.other.dream_world.front_default} alt="Front Default Sprite" />
        )}
        <div className="card-body" style={{ marginLeft: "60px" }}>
          <h4 className="card-title">
            <b>{pokemon.name}</b>
          </h4>
          <ul>
          {pokemon.stats &&
                            pokemon.stats.map((stat, index) => (
                                <li key={index} className="card-text">
                                    <b>{stat.stat.name}:</b> <span>{stat.base_stat}</span>
                                </li>
                            ))}
          </ul>
          <ul>
                        {pokemon.types &&
                            pokemon.types.map((type, index) => (
                                <li key={index} className="card-text">
                                    <b>Type {type.slot}:</b> <span>{type.type.name}</span>
                                </li>
                            ))}
                    </ul>

        </div>
        
      </div>
      </div>
   
 
    
  )
}

export default PokemonSelect