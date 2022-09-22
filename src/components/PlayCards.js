import { Component } from "react";
import { getPokemonData } from '../utils';
import "../css/Card.css"

export default class PlayCards extends Component {
  constructor() {
    super()
    this.state = {
      data: null,
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.data !== this.props.data) this.setState({ data: this.props.data })
  }

  render() {
    const { data } = this.state;
    if(!data) return <h1 className="loading">LOADING ...</h1>

    return <div className="container">
      {data.map((card) => {
        return (
          <div className="play-card" key={card.id}>
            <img src={card.images.small} alt="" />
          </div>
        )
      })}
    </div>
  }
}
