import './App.css';
import React, { useState } from "react";
import { useFetchPokemon } from './hooks/useFetchPokemon';
import { Search } from './componentes/Search';
import { Informacion } from './componentes/Informacion';





function App() {

  const [pokemon, setPokemon] = useState('pikachu');

  const { data, isLoading, isError } = useFetchPokemon(pokemon)


  const onSearchPokemon = (pokemon) => {
    setPokemon(pokemon);
  }

  return (
    <div className="Pokedex">
      <div className="Cuadro-Imagen">
        <img src={data.img} className="Pokeimage" alt="Pokeball" />
      </div>

      <div className='Contenido'>
        
        <Search onNewPokemon = { (value) => onSearchPokemon(value) }/>


        <Informacion data={data} error= {isError} loading = {isLoading}/>
        
      </div>
    </div>
  );
}

export default App;
