import { Component } from "react";
import styles from "./Pokedex.module.css"
import { fetchPokedex } from "./services";
import { withRouter } from "./withRouter";

class Pokedex extends Component {
    state= {
        pokemonsInfo: []
    }

    componentDidMount() {
        fetchPokedex().then((result)=>result.map(({id, name})=>{
            console.log(id)
            return {
                id,
                name
            }
        }))
        //fetchPokemon().then((pokemons)=>{this.setState({pokemons})})

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

    render() {
        return (
            <div>
                <h3>Pokedex</h3>
                <div className={styles.pokemonInfoContainer}>

                </div>
            </div>
        )
    }
}

export default withRouter(Pokedex);