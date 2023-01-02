import { useState } from "react";

import {ReactComponent as Electric} from "./Icons/electric.svg";
import {ReactComponent as Fairy} from "./Icons/fairy.svg";
import {ReactComponent as Fighting} from "./Icons/fighting.svg";
import {ReactComponent as Ground} from "./Icons/ground.svg";
import {ReactComponent as Ice} from "./Icons/ice.svg";
import {ReactComponent as Normal} from "./Icons/normal.svg";
import {ReactComponent as Poison} from "./Icons/poison.svg";
import {ReactComponent as Psychic} from "./Icons/psychic.svg";
import {ReactComponent as Rock} from "./Icons/rock.svg";
import {ReactComponent as Steel} from "./Icons/steel.svg";
import {ReactComponent as Water} from "./Icons/water.svg";
import {ReactComponent as Grass} from "./Icons/grass.svg";
import {ReactComponent as Fire} from "./Icons/fire.svg";
import {ReactComponent as Flying} from "./Icons/flying.svg";
import {ReactComponent as Bug} from "./Icons/bug.svg";
import {ReactComponent as Ghost} from "./Icons/ghost.svg";
import {ReactComponent as Dragon} from "./Icons/dragon.svg";

import "../../pokemon/pokemonCard/assets/styles.css";

const pokemonTypesIcons = type => {
  const iconTypes = {
    bug: () => <Bug height={20} width={20} style={{backgroundColor: '#92BC2C', borderRadius: '50px', border: '5px solid #92BC2C'}}/>,
    dragon: () => <Dragon height={20} width={20} style={{backgroundColor: '#0C69C8', borderRadius: '50px', border: '5px solid #0C69C8'}} />,
    electric: () => <Electric height={20} width={20} style={{backgroundColor: '#F2D94E', borderRadius: '50px', border: '5px solid #F2D94E'}} />,
    fairy: () => <Fairy height={20} width={20} style={{backgroundColor: '#EE90E6', borderRadius: '50px', border: '5px solid #EE90E6'}}/>,
    fire: () => <Fire height={20} width={20} style={{backgroundColor: '#FBA54C', borderRadius: '50px', border: '5px solid #FBA54C'}}/>,
    fighting: () => <Fighting height={20} width={20}style={{backgroundColor: '#D3425F', borderRadius: '50px', border: '5px solid #D3425F'}}/>,
    flying: () => <Flying height={20} width={20} style={{backgroundColor: '#A1BBEC', borderRadius: '50px', border: '5px solid #A1BBEC'}}/>,
    ghost: () => <Ghost height={20} width={20} style={{backgroundColor: '#5F6DBC', borderRadius: '50px', border: '5px solid #5F6DBC'}}/>,
    grass: () => <Grass height={20} width={20} style={{backgroundColor: '#5FBD58', borderRadius: '50px', border: '5px solid #5FBD58'}}/>,
    ground: () => <Ground height={20} width={20} style={{backgroundColor: '#DA7C4D', borderRadius: '50px', border: '5px solid #DA7C4D'}}/>,
    ice: () => <Ice height={20} width={20} style={{backgroundColor: '#75D0C1', borderRadius: '50px', border: '5px solid #75D0C1'}}/>,
    normal: () => <Normal height={20} width={20} style={{backgroundColor: '#A0A29F', borderRadius: '50px', border: '5px solid #A0A29F'}}/>,
    poison: () => <Poison height={20} width={20} style={{backgroundColor: '#B763CF', borderRadius: '50px', border: '5px solid #B763CF'}}/>,
    psychic: () => <Psychic height={20} width={20} style={{backgroundColor: '#FA8581', borderRadius: '50px', border: '5px solid #FA8581'}}/>,
    rock: () => <Rock height={20} width={20} style={{backgroundColor: '#C9BB8A', borderRadius: '50px', border: '5px solid #C9BB8A'}}/>,
    steel: () => <Steel height={20} width={20} style={{backgroundColor: '#5695A3', borderRadius: '50px', border: '5px solid #5695A3'}}/>,
    water: () => <Water height={20} width={20} style={{backgroundColor: '#539DDF', borderRadius: '50px', border: '5px solid #539DDF'}}/>,
  };
  return iconTypes[type]();
};

const colors = {
  bug: '#92BC2C',
  dragon: '#0C69C8',
  electric: '#F2D94E',
  fairy: '#EE90E6',
  fire: '#FBA54C',
  fighting: '#D3425F',
  flying: '#A1BBEC',
  ghost: '#5F6DBC',
  grass: '#5FBD58',
  ground: '#DA7C4D',
  ice: '#75D0C1',
  normal: '#A0A29F',
  poison: '#B763CF',
  psychic: '#FA8581',
  rock: '#C9BB8A',
  steel: '#5695A3',
  water: '#539DDF',
};

const PokemonCard = ({ pokemon }) => {
  const [showPokemonDetails, setShowPokemonDetails] = useState(false);

  const firstType = pokemon.types.map(value => colors[value.type.name]);

  return (
    <>
      <div className="card-container" onClick={() => setShowPokemonDetails(!showPokemonDetails)}>
        <div className="card-header" 
          style={{ backgroundColor: firstType[0] }}
        />
        <div className="card-body">
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt="pokemon"
          />
          <div className="card-pokemonName">
            <h3>{pokemon.name} </h3>
            <span> 
              {pokemon.types.map((value) => {
                return pokemonTypesIcons(value.type.name);
              })}
            </span>
          </div>
        </div>
      </div>
      {showPokemonDetails && (        
        <div className="card-detailsContainer">
          <div className="card-details" style={{ backgroundColor: firstType[0], opacity: '100%'}}>
            <i class="fas fa-long-arrow-alt-left" onClick={() => setShowPokemonDetails(false)}></i>
            <div className="card-detailsInfo">
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                alt="pokemon"
              />
              <div>
                <h3> {pokemon.name} # {pokemon.id}</h3>
                  {pokemon.types.map((value) => {
                    return <span> {value.type.name} </span>
                  })}
              </div>
            </div>
            <div className="card-detailsStats">
              <div className="card-detailsStats-info">
                <h4>Health</h4>
                <p>{pokemon.stats[0].base_stat}</p>
                <ProgessBar color='rgb(97 207 38)' progess={pokemon.stats[0].base_stat}/>
              </div>
              <div className="card-detailsStats-info">
                <h4>Attack</h4>
                <p>{pokemon.stats[1].base_stat}</p>
                <ProgessBar color='rgb(237 100 64)' progess={pokemon.stats[1].base_stat}/>
              </div>
              <div className="card-detailsStats-info">
                <h4>Defense</h4>
                <p>{pokemon.stats[2].base_stat}</p>
                <ProgessBar color='rgb(97 207 38)' progess={pokemon.stats[2].base_stat}/>
              </div>
              <div className="card-detailsStats-info">
                <h4>Special-Attack</h4>
                <p>{pokemon.stats[3].base_stat}</p>
                <ProgessBar color='rgb(237 100 64)' progess={pokemon.stats[3].base_stat}/>
              </div>
              <div className="card-detailsStats-info">
                <h4>Special-Defense</h4>
                <p>{pokemon.stats[4].base_stat}</p>
                <ProgessBar color='rgb(97 207 38)' progess={pokemon.stats[4].base_stat}/>
              </div>
              <div className="card-detailsStats-info">
                <h4>Speed</h4>
                <p>{pokemon.stats[5].base_stat}</p>
                <ProgessBar color='rgb(237 100 64)' progess={pokemon.stats[5].base_stat}/>
              </div>
            </div>
          </div>
        </div> 
      )}
    </>
  );
};

export default PokemonCard;

const ProgessBar = ({ color, progess }) => {
  return (
    <div className="progressBar-container">
      <div className="progressBar-fill" style={{
        width: `${progess}%`,
        backgroundColor: color,
      }}>
      </div>
    </div>
  );
};