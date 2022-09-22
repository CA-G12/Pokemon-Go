import { Component } from "react";
import "../css/DetailsCard.css";
import { getPokemonData } from "../utils";
export default class DetailsCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
      data: null,
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.id !== this.props.id) {
      this.setState({ id: this.props.id });
      getPokemonData(`https://pokeapi.co/api/v2/pokemon/${this.props.id}`)
        .then(res => { this.setState({ data: res }) })
    }
  }

  render() {
    const { data } = this.state;
    if (data) {
      return (
        <div className="details">
          <i className="fa-solid fa-circle-xmark" onClick={this.props.closeDetailsCard}></i>
          <div className="pokemon-img">
            <img src={data.sprites.other.dream_world.front_default} alt="" />
          </div>
          <div className="pokemon-details">
            <div className="box">
              <h3>{data.name}</h3>
              <span className="ability">Abilities:</span> <span>{data.abilities.map((e) => e.ability.name).join(', ')}</span>
              <br />
              <span className="height">Height:</span> <span>{data.height}</span>
              <br />
              <span className="weight">Weight:</span> <span>{data.weight}</span>
              <br />
              <span className="moves">Moves:</span> <span>{data.moves.slice(0, 5).map((e) => e.move.name).join(', ')}</span>
              <br />
              <span className="stats">Stats:</span> <span>{data.stats.slice(0, 5).map((e) => e.stat.name).join(', ')}</span>
            </div>
            <div className="box">
              <h3>{Object.keys(data.sprites.versions)[0]}</h3>
              <div className="generation-imgs">
                {Object.values(data.sprites.versions['generation-i']['red-blue']).map((e, i) => <img src={e} alt="" key={i}/>)}
              </div>
            </div>
            <div className="box">
              <h3>{Object.keys(data.sprites.versions)[1]}</h3>
              <div className="generation-imgs">
                {Object.values(data.sprites.versions['generation-ii']['crystal']).map((e,i) => <img src={e} alt="" key={i}/>)}
              </div>
            </div>
            <div className="box">
              <h3>{Object.keys(data.sprites.versions)[2]}</h3>
              <div className="generation-imgs">
                {Object.values(data.sprites.versions['generation-iii']['emerald']).map((e,i) => <img src={e} alt="" key={i}/>)}
              </div>
            </div>
          </div>
        </div>);
    }

  }
}
