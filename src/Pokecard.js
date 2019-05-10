import React, { Component } from "react";
import "./Pokecard.css";
const Poke_API =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

class Pokecard extends Component {
  render() {
    var props = this.props;
    let imgSrc = `${Poke_API}${props.id}.png`;
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{props.name}</h1>
        <img src={imgSrc} at={props.name} />
        <div className="Pokecard-data">Type: {props.type}</div>
        <div className="Pokecard-data">EXP: {props.exp}</div>
      </div>
    );
  }
}

export default Pokecard;
