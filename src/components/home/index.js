import { Link } from "react-router-dom";
import PokeImage from "../home/assets/pokemon-image.jpeg";

import "../home/assets/styles.css";

const HomePage = () => {
  return (
    <div className="homePage-container">
      <img src={PokeImage} alt="HomeImage" />
      <h1>Search your Pokémon</h1>
      <Link to="/pokemon">
        <button type="button"></button>
      </Link>
    </div>
  );
};

export default HomePage;
