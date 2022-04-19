import { Component } from "react";
import { fetchPokemon } from "./services";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

class Home extends Component {
    state = {
        pokemons: [],
    };

    componentDidMount() {
        fetchPokemon().then((pokemons) => {
            this.setState({ pokemons });
        });
    }

    render() {
        const pokemons = this.state.pokemons;
        return (
            <div className={styles.mainContainer}>
                <h3>Pokemon List</h3>
                <div className={styles.pokemonsContainer}>
                    {pokemons.map((name) => (
                        <Link
                            className={styles.pokemonsNames}
                            to={`/Pokedex/${name}`}
                        >
                            {name}
                        </Link>
                    ))}
                </div>
            </div>
        );
    }
}

export default Home;
