import { useEffect, useState } from "react";
import { getPokemon } from "../helpers/getPokemon";

export const useFetchPokemon = ( pokeName ) => {
    // console.log(pokeName)

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    const getData = async () => {
       const {error, ...newPokemon} = await getPokemon(pokeName.toLowerCase());
    //    console.log(newPokemon, error)
       setData(newPokemon);
       setIsLoading(false);
       setIsError(error)
    };
    

    useEffect( () => {
        getData();       
    },[pokeName] ) 

    // console.log(data);
  return {
    isError,
    data, //es igual images: images,
    isLoading //isLoading: true
  }

}
