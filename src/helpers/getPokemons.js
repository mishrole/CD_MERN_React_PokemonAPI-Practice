import { constants } from './../constants/constants';

export const getPokemons = (offset = 0, limit = 20) => {
  return fetch(`${constants.pokeApiUrl}/pokemon?offset=${offset}&limit=${limit}`)
  .then(response => {
    return response.json();
  })
}