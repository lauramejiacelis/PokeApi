import { Component } from "react";
import { fetchPokemon } from './services';
import styles from './styles.module.css';
import {withRouter} from './withRouter';
import { Link } from "react-router-dom";

class Home extends Component {
    state={
        pokemons : [],
        pokemonsImages: []
        }
    
        componentDidMount() {
            fetchPokemon().then((pokemons)=>{this.setState({pokemons})})
            //fetchPokemonImage(this.state.pokemons)
        }

        handleClick = ({target}) => {
            console.log(`se hizo click en ${target.innerText}`)
            

        };
    
        render(){
            const pokemons = this.state.pokemons
            return (
                <div className={styles.mainContainer}>
                    <h3>Pokemon List</h3>
                    <Link to='/Pokedex' onClick={this.handleClick}>
                        <div className={styles.pokemonsContainer}>
                            {pokemons.map((name)=> <div className={styles.pokemonsNames}>{name}</div>)}
                        </div>
                    </Link>
                </div>
            );
        }
}

const HomeWithNavigate = withRouter(Home);

export default HomeWithNavigate;