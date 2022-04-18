import { Component } from "react";
import styles from "./Pokedex.module.css"
import { fetchPokedex } from "./services";
import { withRouter } from "./withRouter";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge } from 'reactstrap';

class Pokedex extends Component {
    state= {
        pokemonsInfo: [],
        pokemonName: "",
        pokemonId : "",
        pokemonImage : "",
        pokemonAbilities: [],
        pokemonTypes : []
    }

    componentDidMount() {
        fetchPokedex(7).then((result)=>{
            this.setState({
                pokemonName : result.name, //string
                pokemonId : result.id,//numero
                pokemonImage : result.sprites.other.dream_world.front_default,//string
                pokemonAbilities : result.abilities,//object or array?,
                pokemonTypes : result.types
            })
            console.log(`Nombre pokemon ${this.state.pokemonName}`)
        })
    }

    render() {
        return (
            <div>
                <h3>Pokedex</h3>
                <div className={styles.pokemonInfoContainer}>
                    <h4>No.{this.state.pokemonId} {this.state.pokemonName}</h4>
                    <img src={this.state.pokemonImage} alt=""/>
                    <h6>Type: </h6>{this.state.pokemonTypes.map(({type})=><Badge color="warning" pill>{type.name}</Badge>)}
                    <h6>Abilities: </h6>{this.state.pokemonAbilities.map(({ability})=><Badge color="info" pill>{ability.name}</Badge>)}
                </div>
            </div>
        )
    }
}

export default withRouter(Pokedex);