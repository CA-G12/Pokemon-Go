import { Component } from "react";
import '../css/Card.css'
import { getAllPokemon } from "../utils";
import { Card } from "./index";

export default class CardContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: props.data,
      error: null
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.data !== this.props.data) this.setState({ data: this.props.data })
    if (prevProps.error !== this.props.error) this.setState({ error: this.props.error })
  }

  render() {
    const { data } = this.state;
    const { error } = this.state;


    if (!data) return <h1 className="loading">Loading...</h1>;
    if (error) return <p className="error">{error}</p>

    return (
      <div className="container">
        {data.map((ele) => <Card pokemon={ele} key={ele.id} onClick={() => { this.props.getId(ele.id) }} />)}
      </div>
    );
  }
}
