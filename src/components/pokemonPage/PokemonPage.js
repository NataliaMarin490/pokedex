import "../pokemonPage/styles.css";
import Card from "../pokemonPage/pokemonCard/PokemonCard";
import { useState, useEffect } from "react";
import { getAllPokemon, getSinglePokemonData } from "../../services/pokemon";

const PokemonPage = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [searchBarValue, setSearchBarValue] = useState("");
  const [searchResultValue, setSearchResult] = useState([]);
  const url = "https://pokeapi.co/api/v2/pokemon?limit=151";

  useEffect(() => {
    async function fetchAPI() {
      const response = await getAllPokemon(url);
      await allPokemonData(response.results);
    }
    fetchAPI();
  }, []);

  const allPokemonData = async (pokemonInfo) => {
    let singlePokemonData = await Promise.all(
      pokemonInfo.map(async (pokemon) => {
        let pokemonRecord = await getSinglePokemonData(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(singlePokemonData);
    setSearchResult(singlePokemonData);
  };

  const handleInputChange = ({ target: { value } }) => {
    setSearchBarValue(value.slice(0, 3));
    filterPokemon(value);
  };

  const filterPokemon = (searchValue) => {
    const searchResults = pokemonData.filter((pokemonID) => {
      let aux = String(pokemonID.id);
      if (aux.includes(searchValue)) {
        return pokemonID;
      }
      return false;
    });
    setSearchResult(searchResults);
  };


  
  return (
    <div className="pokemonPage-container">
      <article>
        <h2>Enter a number</h2>
        <input
          type="number"
          min="0"
          placeholder="Pokemon number"
          value={searchBarValue}
          onChange={handleInputChange}
        />
      </article>
      <div className="card-containerPokemonPage">
        {searchResultValue.map((value) => {
          return <Card pokemon={value} />;
        })}
      </div>
    </div>
  );
};

export default PokemonPage;
