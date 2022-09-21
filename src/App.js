import { Component } from "react";
import { Header, CardContainer, DetailsCard } from "./components";
import { getPokemon, getPokemonData, getAllPokemon } from "./utils";

export default class App extends Component {
  state = {
    data: null,
    error: null,
    id: 0,
  }

  componentDidMount() {
    getAllPokemon()
      .then((res) => {
        this.setState({ data: res })
      })
  }

  getSearchResults = (err, data) => {
    // console.log(err);
    if (err) this.setState({ error: err })
    else this.setState({ error: err, data: data })
  }

  getId = (id) => {
    this.setState({ id: id });
  }

  render() {
    const { data } = this.state;
    const { error } = this.state;

    return (
      <div className="App">
        <Header getSearchResults={this.getSearchResults} />
        <CardContainer data={data} error={error} getId={this.getId} />
        <DetailsCard id={this.state.id} />
      </div>
    );
  }
}
