import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../src/components/homePage/HomePage";
import PokemonPage from "../src/components/pokemonPage/PokemonPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/pokemon" element={<PokemonPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
