import "../pokemonCard/styles.css";

const PokemonCard = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <div className="card-container">
      <div className="card-header"></div>
      <div className="card-body">
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt="pokemon"
        />
        <h3>
          {pokemon.name} <span> # {pokemon.id}</span>
        </h3>
      </div>
      <div className="card-footer">
        <div>
          <h4>Type</h4>
          {pokemon.types.map((value) => {
            return <p>{value.type.name}</p>;
          })}
        </div>
        <div>
          <h4>Attack</h4>
          <p>{pokemon.stats[1].base_stat}</p>
        </div>
        <div>
          <h4>Defense</h4>
          <p>{pokemon.stats[2].base_stat}</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
