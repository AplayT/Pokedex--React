import pokeballl from './assets/pokeballl.png';
import errorImg from './assets/error.webp';
import './App.css';
import React, { useState } from "react";





function Pokedex() {
  
  const [pokemon, setPokemon] = useState('pikachu');
  // const [pokeinfo, setPokeinfo] = useState('');
  const [pokeimage, setPokeimage] = useState(pokeballl);
  const [pokeinfo, setPokeinfo] = useState([])
  
  const handleSubmit = async(e) => {
     e.preventDefault();

     console.log(pokemon)
    let abilities = [];

    let pokeName = pokemon.toLowerCase();
    
    console.log(pokeName)
    try {
      await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        setPokeimage(data.sprites.back_default);
        
        data.abilities.map(element => {abilities.push(element.ability.name)});
        setPokeinfo(
          [`ID :  ${data.id}`,
          `NOBRE : ${data.name}`,
          `EXPERIENCIA BASE : ${data.base_experience}`,
          `ALTURA : ${data.height*0.1} m`,
          `PESO : ${data.weight*0.1} kg`,
          `HABILIDADES : ${abilities}`
        ]
        );
        }
     )
    } catch (error) {

      setPokeimage(errorImg);
      setPokeinfo(['NO HAY INFORMACIÓN SOBRE ESTE POKEMÓN ....  PODRÍAS HABERTE TOPADO CON ALGO INCREÍBLE ... O PELIGROSO'])
    }
  

    
  };


  return (
    <div className="Pokedex">
      <div className="Cuadro-Imagen">
        <img src={pokeimage} className="Pokeimage" alt="Pokeball" />
      </div>
      <div className='Contenido'>
          <form onSubmit={handleSubmit}>
            <input type="text"
                  className="text"
                  value={pokemon} 
                  onChange={e => setPokemon(e.target.value)}
            />
            <button> Buscar </button>
          </form>
          <div className='Info'>

          <ul className="pokemon-stats">
            {pokeinfo.map( item => <li>{item}</li> )}
          </ul>

          </div>
      </div>
    </div>
  );
}

export default Pokedex;
