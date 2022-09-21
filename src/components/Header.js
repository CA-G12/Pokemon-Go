import { Component } from "react";
import "../css/Header.css"
import { getAllPokemon } from "../utils";

export default class Header extends Component {
  state = {
    data: null,
    searchPokemon: "",
  }

  componentDidMount() {
    getAllPokemon().then((res) => {
      this.setState(({ data: res }))
    })
  }

  handleSearch = (e) => {
    this.setState({ searchPokemon: e.target.value.toLowerCase() });
  }
  render() {
    const { data } = this.state;

    if (!data) return <div>Loading...</div>
    console.log(this.state.searchPokemon);
    return (
      <header>
        <div>
          <img src="../../logo.png" alt="" />
        </div>
        <input type="search" placeholder="Search Pokemon..." onChange={this.handleSearch} />
        {/* {data.filter((e) => this.state.searchPokemon === "" ? e ? e.name.toLowerCase().includes(this.state.searchPokemon) : console.log(e) : 'ttt')} */}
        {/* {data.filter(poke => {
          if (this.state.searchPokemon === "") {
            return poke
          } else if (poke.name.includes(this.state.searchPokemon)) {
            console.log(poke);
            return poke
          }
        })
        } */}
      </header>
    )
  }
}
