import errorImg from '../assets/error.webp';

export const getPokemon = async (pokeName) => {
    // console.log(pokeName)

    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
        const resp = await fetch(url);
        // console.log(resp)
        const  data  = await resp.json();

        // console.log(data)

        let abilities1 = [];

        data.abilities.map(element => { abilities1.push(element.ability.name) });

        return {
            error: false,
            img: data.sprites.back_default,
            id: data.id,
            name: data.name,
            base_experience: data.base_experience,
            altura: data.height * 0.1,
            peso: data.weight * 0.1,
            habilidades: abilities1

        }

        // return info;
        // console.log(gifs);
    } catch (error) {

        // console.log(error)

        return {
            img: errorImg,
            error: true,
            msg: 'NO HAY INFORMACIÓN SOBRE ESTE POKEMÓN ....  PODRÍAS HABERTE TOPADO CON ALGO INCREÍBLE ... O PELIGROSO'
        }
    }
}

