import { Component } from "react";
import "../css/Header.css"
import { getAllPokemon, getPokemon } from "../utils";

export default class Header extends Component {
  constructor(props){
    super(props)

    this.state = {
     data: null,
     filteredData: []
    }
  }

  componentDidMount() {
    getAllPokemon()
      .then((res) => {
        this.setState({ data: res })
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.data !== this.props.data) this.setState({ data : this.props.data})
  }

  
  handleSearch = (e) => {
    const { getSearchResults } = this.props
    const { data } = this.state;

    const filteredData = data.filter((ele) => ele.name.includes(e.target.value))
    if(!filteredData.length) {
      getPokemon(e.target.value)
        .then((res) => {
          getSearchResults(null, [res])
        })
        .catch((err) =>{
          getSearchResults(err.message, null)
        })
    }
    getSearchResults(null, filteredData)
  }
  
  render() {
    const { data } = this.state;

    if (!data) return <div>Loading...</div>
    return (
      <header>
        <div>
          <img src="../../logo.png" alt="" />
        </div>
        <input type="search" placeholder="Search Pokemon..." onChange={this.handleSearch} />
      </header>
    )
  }
}
