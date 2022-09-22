import { Component } from "react";
import '../css/Card.css'

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: props.pokemon,
    }
  }

  render() {
    const { pokemon } = this.state;
    return (
      <div className="cards" onClick={this.props.onClick}>
        <img src={pokemon.sprites.other.dream_world.front_default} alt="" />
        <h1>{pokemon.name}</h1>
        <span>Weight: {pokemon.weight}</span>
        <br />
        <span>Height: {pokemon.height}</span>
      </div>
    )
  }
}