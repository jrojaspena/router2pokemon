
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div style={{backgroundColor:'gray',  display:'flex', width:'100vw', justifyContent:"space-between" }}>
        <NavLink to="/home"  className={({isActive})=> (isActive ? "LinkActivo": "LinkNormal")}><img src= "./poke-icon.svg" style={{width:"50px"}}></img></NavLink>
        <div style={{paddingTop:"10px"}}>
        <NavLink to="/home" className={({isActive})=> (isActive ? "LinkActivo": "LinkNormal")}>Home</NavLink>
        <NavLink to="/home/pokemon" className={({isActive})=> (isActive ? "LinkActivo": "LinkNormal")}>Pokemones</NavLink>
        </div>
    </div>
  )
}

export default NavBar