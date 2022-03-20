import React, { useState } from 'react';
import { getPokemons } from '../../helpers/getPokemons';

const Pokemons = () => {

  const [pokemons, setPokemons] = useState(
    { data: null }
  );

  const fetchPokemons = () => {
    getPokemons(0, 1126)
    .then(pokemonsData => {
      console.log(pokemonsData);
      setPokemons({ data: pokemonsData });
    });
  }

  return (
    <>
    <h1>Pokemons</h1>
    <button onClick={ fetchPokemons }>Fetch Pokemons</button>
    <ul>
    { pokemons.data && pokemons.data.results.map((pokemon, index) => {
        return (
          <li key={index}>
            <h3>{pokemon.name}</h3>
          </li>
        )
      })
    }
    </ul>
    </>
  )
}

export default Pokemons;