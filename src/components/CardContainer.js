import { Component } from "react";
import '../css/Card.css'
import { getAllPokemon } from "../utils";
import { Card } from "./index";

export default class CardContainer extends Component {
  state = {
    data: null
  }

  componentDidMount() {
    getAllPokemon()
      .then((res) => {
        this.setState({ data: res })
      })
  }
  render() {
    const { data } = this.state;

    if (!data) return <h1>Loading...</h1>;

    return (
      <div className="container">
        {data.map((ele) => <Card pokemon={ele} />)}
      </div>
    );
  }
}
