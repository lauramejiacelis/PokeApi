export function fetchPokemon() {
    return fetch("https://pokeapi.co/api/v2/pokemon/")
        .then((res)=> res.json())
        .then(({ results }) => results.map(({name}) => name));
}

export function fetchPokedex() {
    return fetch(`https://pokeapi.co/api/v2/pokemon/1`)
        .then((res)=> res.json())
        
        // .then((pokemonsInfo)=> pokemonsInfo.map(({abilities, id, name,sprites})=>{
        //     let image = sprites.other.dream_world.front_default;
        //     let abilitiesName = abilities.ability.name;
        //     return{
        //         image,
        //         id,
        //         name,
        //         abilitiesName
        //     }

        // })
        // )
}