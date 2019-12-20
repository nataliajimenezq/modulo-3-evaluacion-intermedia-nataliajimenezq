import React from 'react';


const Pokemon = props => {
  return (
    <div className="card">
      <img src={props.urlImage} alt={props.pokemonName} />
      <h3 className="card__tittle">{props.pokemonName}</h3>
      <ul className="card__types">
        {props.pokemonTypes.map((type, index) => {
          return <li className="card__types-name" key={index}>
            {type}
          </li>
        })}
      </ul>
    </div>

  );
}


export default Pokemon;