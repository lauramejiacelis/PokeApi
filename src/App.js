import styles from "./App.module.css";
import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Pokedex from "./Pokedex";

class App extends Component {
  render() {
    return (
      <div className={styles.mainContainer}>
        <img
          className={styles.logo}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
          alt=""
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pokedex/:name" element={<Pokedex />} />
        </Routes>
      </div>
    );
  }
}

export default App;
