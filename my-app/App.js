import Logo from "./Logo";
import Abdirahim from "./Abdirahim";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";
function App() {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
    function logWhenClicked() {
      console.log("when logo is clicked");
    }
  const appName = "Abdirahim";
  const date = new Date().toLocaleDateString();
  return (
    <div>
      <header>
        <h1>My name is {appName} </h1>
        <Logo appName="Pokedex" handleClick={logWhenClicked}/>
        <Abdirahim />
        <BestPokemon pokemonAbilities={abilities}/>
        <CaughtPokemon pokemonDate={date} />
        <PokemonMovesSelector />
        <PokemonCity />
      </header>
    </div>
  );
}
export default App;