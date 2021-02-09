import {useState} from 'react';
import {useRouteMatch, Switch, Route} from 'react-router-dom';

import StartPage from "./routes/Start";
import BoardPage from "./routes/Board";
import FinishPage from "./routes/Finish";

import {PokemonContext} from "../../context/pokemonContext";

const GamePage = () => {
  const match = useRouteMatch();

  const [pokemonsForGame, setPokemonsForGame] = useState([]);

  const handleSelectPokemon = (pokemon) => {
      setPokemonsForGame((prevState) => {
      const index = prevState.findIndex(item => item.id === pokemon.id);

      return ((index !== -1) ? prevState.slice().splice(index, 1) : prevState.concat(pokemon));
    })
  };

  return (
    <PokemonContext.Provider value={{
      pokemonsForGame,
      onSelectPokemon: handleSelectPokemon,
    }}>
      <Switch>
        <Route path={`${match.path}/`} exact component={StartPage} />
        <Route path={`${match.path}/board`} component={BoardPage} />
        <Route path={`${match.path}/finish`} component={FinishPage} />
      </Switch>
    </PokemonContext.Provider>
  );
};

export default GamePage;
