import { Component } from "react";
import { Header, CardContainer, DetailsCard } from "./components";
import { getPokemon, getPokemonData, getAllPokemon } from "./utils";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CardContainer />
        <DetailsCard />
      </div>
    );
  }
}
