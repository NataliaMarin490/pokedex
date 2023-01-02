export async function getAllPokemon(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((pokemonData) => {
          resolve(pokemonData);
        });
    });
  }
  
  export async function getSinglePokemonData(singlePokemonURL) {
    return new Promise((resolve, reject) => {
      fetch(singlePokemonURL)
        .then((response) => response.json())
        .then((singlePokemonData) => {
          resolve(singlePokemonData);
        });
    });
  }
  