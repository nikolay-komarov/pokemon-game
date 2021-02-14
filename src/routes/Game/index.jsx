import {useState} from 'react';
import {useRouteMatch, Switch, Route} from 'react-router-dom';

import StartPage from "./routes/Start";
import BoardPage from "./routes/Board";
import FinishPage from "./routes/Finish";

import {PokemonContext} from "../../context/pokemonContext";

const GamePage = () => {
  const [selectedPokemons, setSelectedPokemons] = useState({});
  const [pokemons2, setPokemons2] = useState([]);
  const match = useRouteMatch();

  const handleSelectedPokemons = (key, pokemon) => {
    setSelectedPokemons(prevState => {
      if (prevState[key]) {
        const copyState = {...prevState};
        delete copyState[key];

        return copyState;
      }

      return {
        ...prevState,
        [key]: pokemon
      }
    });
  };

  const handleSetPokemons2 = (pokemons) => {
    setPokemons2(pokemons);
  };

  return (
    <PokemonContext.Provider value={{
      pokemons1: selectedPokemons,
      onSelectedPokemons: handleSelectedPokemons,
      pokemons2: pokemons2,
      onSetPokemons2: handleSetPokemons2,
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
