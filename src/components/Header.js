import { Component } from "react";
import "../css/Header.css"
import { getAllPokemon, getPokemon, getPokemonData } from "../utils";

export default class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: null,
      cardsData: [],
      filteredData: []
    }
  }

  componentDidMount() {
    getAllPokemon()
      .then((res) => {
        this.setState({ data: res })
        return getPokemonData("https://api.pokemontcg.io/v2/cards")
      })
      .then(res => this.setState({ cardsData: res.data }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.data !== this.props.data) this.setState({ data: this.props.data })
  }


  handleSearch = (e) => {
    const { getSearchResults } = this.props
    const { data, cardsData } = this.state;

    const filteredData = data.filter((ele) => ele.name.includes(e.target.value))
    const filteredCards = cardsData.filter((ele) => ele.name.toLowerCase().includes(e.target.value))

    if (!filteredData.length) {
      getPokemon(e.target.value)
        .then((res) => {
          getSearchResults(null, [res], filteredCards)
        })
        .catch((err) => {
          getSearchResults(err.message, null, null)
        })
    }
    getSearchResults(null, filteredData, filteredCards)
  }

  render() {
    return (
      <header>
        <div>
          <img src="https://i.ibb.co/Y8H41fw/logo.png" alt="" />
        </div>
        <div className="switch">
          <button onClick={this.props.closeDetailsCard}>Pokemon</button>
          <button onClick={this.props.displayPlayCards}>play cards</button>
        </div>
        <input type="search" placeholder="Search Pokemon..." onChange={this.handleSearch} />

      </header>
    )
  }
}
