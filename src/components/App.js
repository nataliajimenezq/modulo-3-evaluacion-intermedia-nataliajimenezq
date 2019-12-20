import React, { Component } from 'react';
import PokemonList from './PokemonList';
import data from '../data/data.json';
import '../stylesheets/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      PokemonData: data,
    }
  }
  render() {
    console.log(this.state);

    return (
      <div className="wrapper">
        <h1 className="wrapper__title">Mi lista de Pokemon</h1>
        <PokemonList items={this.state.PokemonData}/>
       </div>
    );
  }
}
export default App;
