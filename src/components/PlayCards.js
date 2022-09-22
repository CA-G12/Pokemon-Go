import { Component } from "react";
import { getPokemonData } from '../utils';
import "../css/Card.css"

export default class PlayCards extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    getPokemonData("https://api.pokemontcg.io/v2/cards")
      .then(res => this.setState({ data: res.data }));
  }

  render() {
    const { data } = this.state;
    console.log(data);
    return <div className="container">
      {data.map((card) => {
        return (
          <div className="play-card">
            <img src={card.images.small} alt="" />
          </div>
        )
      })}
    </div>
  }
}
