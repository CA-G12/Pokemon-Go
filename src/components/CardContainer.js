import { Component } from "react";
import '../css/Card.css'
import { Card } from "./index";

export default class CardContainer extends Component {
  render() {
    return (
      <div className="container">
        <Card />
      </div>
    );
  }
}
