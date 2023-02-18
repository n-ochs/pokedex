import axios from 'axios';
import { useState } from 'react';
// users need to be able to search for pokemon by ID (number)
// need a search bar
// search bar will need a button to click (to execute the search)
// onClick of the button will make an API request to pokeAPI
// second component DisplayPokemon - pass data from API as props to DisplayPokemon Component

// TOMORROW - PUT ON GITHUB
// CLONE TO KENS MACHINE
// NEXT COMPONENT

function SearchPokemon() {
    const [pokemonId, setPokemonId] = useState('');

    function handlePokemonIdUpdate(event) {
        setPokemonId(event.target.value)
    }

    async function handleFetchPokemon() {
        if (pokemonId < 1 || pokemonId > 151 || pokemonId % 1) {
            alert('You must enter a whole number between 1 and 151');
            setPokemonId('');
            return;
        }

        const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

        try {
            // make request
            const pokemonData = await axios.get(baseUrl + pokemonId);
            console.log(pokemonData);
        } catch (error) {
            // handle error
            alert('An unknown error has occurred');
        }
    }

    return (
        <div>
            <h1>Search for an original Pokemon!</h1>
            <input min="1" max="151" name="searchPokemon" type="number" value={pokemonId} onChange={(e) => handlePokemonIdUpdate(e)} />
            <button onClick={handleFetchPokemon}>Search</button>
        </div>
    )
}

export default SearchPokemon;