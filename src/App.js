import { Component } from "react";
import { Header, CardContainer, DetailsCard, PlayCards } from "./components";
import { getPokemon, getPokemonData, getAllPokemon } from "./utils";

export default class App extends Component {
  state = {
    data: null,
    error: null,
    id: 0,
    displayCards: true,
    displayPokemon: false,
    displayPlayCards: false,
  };

  componentDidMount() {
    getAllPokemon().then((res) => {
      this.setState({ data: res });
    });
  }

  getSearchResults = (err, data) => {
    if (err) this.setState({ error: err });
    else
      this.setState({
        error: err,
        data: data,
        displayCards: true,
        displayPokemon: false,
      });
  };

  getId = (id) => {
    this.setState({ displayPokemon: true }, () => {
      this.setState({ id: id, displayCards: false, displayPlayCards: false });
    });
  };

  closeDetailsCard = () => {
    this.setState({
      displayCards: true,
      displayPokemon: false,
      displayPlayCards: false,
    });
  };

  displayPlayCards = () => {
    this.setState({
      displayPlayCards: true,
      displayCards: false,
      displayPokemon: false,
    });
  };

  render() {
    const { data } = this.state;
    const { error } = this.state;
    return (
      <div className="App">
        <Header
          getSearchResults={this.getSearchResults}
          displayPlayCards={this.displayPlayCards}
          closeDetailsCard={this.closeDetailsCard}
        />
        {this.state.displayCards && (
          <CardContainer data={data} error={error} getId={this.getId} />
        )}
        {this.state.displayPokemon && (
          <DetailsCard
            id={this.state.id}
            closeDetailsCard={this.closeDetailsCard}
          />
        )}
        {this.state.displayPlayCards && <PlayCards />}
      </div>
    );
  }
}
