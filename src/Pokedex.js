import { Component } from "react";
import styles from "./Pokedex.module.css";
import { fetchPokedex } from "./services";
import { withRouter } from "./withRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import { Badge } from "reactstrap";

class Pokedex extends Component {
    state = {
        pokemon: null,
    };

    componentDidMount() {
        // Pokedex/pikachu  = Pokedex/:name
        const { name } = this.props.params;
        fetchPokedex(name).then(
            ({
                id,
                name,
                types,
                sprites: { front_default: image },
                abilities,
            }) => {
                this.setState({
                    pokemon: { id, name, image, abilities, types },
                });
            }
        );
    }

    render() {
        const { pokemon } = this.state;

        if (!pokemon) return "Loading...";

        console.log(pokemon);
        const { id, name, types, image, abilities } = pokemon;

        return (
            <div>
                <h3>Pokedex</h3>
                <div className={styles.pokemonInfoContainer}>
                    <h4>
                        No.{id} {name}
                    </h4>
                    <img src={image} alt="pokemon" />
                    <h6>Type: </h6>
                    {types.map(({ type: { name } }) => (
                        <Badge color="warning" pill>
                            {name}
                        </Badge>
                    ))}
                    <h6>Abilities: </h6>
                    {abilities.map(({ ability }) => (
                        <Badge color="info" pill>
                            {ability.name}
                        </Badge>
                    ))}
                </div>
            </div>
        );
    }
}

export default withRouter(Pokedex);
