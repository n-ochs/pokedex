import axios from 'axios';
import { useState } from 'react';
import Pokemon from './Pokemon';

const minPokemonId = 1;
const maxPokemonId = 151;

function SearchPokemon() {
  const [pokemonId, setPokemonId] = useState('');
  const [pokemonData, setPokemonData] = useState(null);

  // updating our local state
  function handlePokemonIdUpdate(event) {
    setPokemonId(event.target.value);
  }

  async function handleFetchPokemon() {
    // early return - think to yourself, what COULD a user potentially do? and code for it
    if (pokemonId < minPokemonId || pokemonId > maxPokemonId || pokemonId % 1) {
      alert(
        `You must enter a whole number between ${minPokemonId} and ${maxPokemonId}`
      );
      setPokemonId('');
      return;
    }

    const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

    // we need to use async/await and a try/catch block
    // we do not know if OR when our request will come back
    // we need to wait for the results (using await), or handle any errors in the catch block
    try {
      // make request
      const response = await axios.get(baseUrl + pokemonId);
      setPokemonData(response.data);
    } catch (error) {
      // handle error
      alert('An unknown error has occurred');
    }
  }

  return (
    <div>
      <h1>Search for an Pokemon!</h1>
      <input
        min={minPokemonId}
        max={maxPokemonId}
        name='searchPokemon'
        type='number'
        value={pokemonId}
        onChange={(e) => handlePokemonIdUpdate(e)}
      />
      <button onClick={handleFetchPokemon}>Search</button>

      <div className='mt-4'>
        {/* making sure we have our pokemon data BEFORE we attempt to render the Pokemon component */}
        {pokemonData && <Pokemon data={pokemonData} />}
      </div>
    </div>
  );
}

export default SearchPokemon;
