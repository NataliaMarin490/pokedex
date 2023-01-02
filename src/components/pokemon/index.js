import { useState, useEffect } from "react";
import { getAllPokemon, getSinglePokemonData } from "../../services/pokemon";

import Card from "../pokemon/pokemonCard/index";
import Pokeball from "../home/assets/pokeball.png";

import "../pokemon/assets/styles.css";

const PokemonPage = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [searchBarValue, setSearchBarValue] = useState("");
  const [searchResultValue, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isInputActive, setIsInputActive] = useState(false);
  const url = "https://pokeapi.co/api/v2/pokemon?limit=151";

  useEffect(() => {
    async function fetchAPI() {
      setIsLoading(true);
      const response = await getAllPokemon(url);
      await allPokemonData(response.results);
      setIsLoading(false);
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
    setIsInputActive(value !== "");
    setSearchBarValue(value);
    filterPokemon(value);
  };

  const filterPokemon = (searchValue) => {
    const searchResults = pokemonData.filter((pokemon) => {
      let name = String(pokemon.id);
      let id = String(pokemon.name);
      if (name.includes(searchValue) || id.includes(searchValue)) {
        return pokemon;
      }
      return false;
    });
    setSearchResult(searchResults);
  };

  return (
    <div className="pokemonPage-container">
      <article>
        <h2>What Pokémon are you looking for?</h2>
        <div className="pokemonPage-container-input">
          <i class="fas fa-search"></i>
          <input
            id="pokeInput"
            value={searchBarValue}
            onChange={handleInputChange}
          />
          <label className={isInputActive ? "input-active" : ""} for="pokeInput"> Pokemon</label>
        </div>
      </article>
      {isLoading ? (
        <>
          <img className="pokemonPage-Loader" src={Pokeball} alt="loader" />
        </>
      ) : (
        <div className="card-containerPokemonPage">
          {searchResultValue.length !== 0 ? (
            searchResultValue.map((value) => {
              return <Card pokemon={value} />;
            })
          ) : (
            <>
              <h3>No Pokémon matches your search</h3>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default PokemonPage;
