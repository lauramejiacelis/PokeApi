export function fetchPokemon() {
    return fetch("https://pokeapi.co/api/v2/pokemon/")
        .then((res)=> res.json())
        .then(({ results }) => results.map(({name}) => name));
}

export function fetchPokedex(id) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res)=> res.json())
        
        
        // .then((result)=>{
        //     let pokemonName = result.name; //string
        //     let pokemonId = result.id;//numero
        //     let pokemonImage = result.sprites.other.dream_world.front_default;//string
        //     let pokemonAbilities = result.abilities;//object or array?
        //     return {
        //         pokemonName,
        //         pokemonId,
        //         pokemonImage,
        //         pokemonAbilities
        //     }
        // })
        
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