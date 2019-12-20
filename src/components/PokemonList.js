import React from 'react';
import Pokemon from './Pokemon';


const PokemonList = props => {
  return (
    <ul className='list'>
      {props.items.map((item, index) => {
        return <li className='list__item' key={index}>
          <Pokemon
            urlImage={item.url}
            pokemonName={item.name}
            pokemonTypes={item.types} />
        </li>
      })}
    </ul>
  )
}


export default PokemonList;
