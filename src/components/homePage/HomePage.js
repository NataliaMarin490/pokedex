import "../homePage/styles.css";
import PokeImage from "../homePage/assets/pokemon-image.jpeg";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homePage-container">
      <img src={PokeImage} alt="HomeImage" />
      <h1>Search your Pokemon</h1>
      <Link to="/pokemon">
        <button type="button"></button>
      </Link>
    </div>
  );
};

export default HomePage;
