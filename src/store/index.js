import {configureStore} from "@reduxjs/toolkit";
import userReducer from './user';
import pokemonsReducer from './pokemons';
import pokemons1Reducer from './pokemons1';
import pokemons2Reducer from './pokemons2';

export default configureStore({
  reducer: {
    user: userReducer,
    pokemons: pokemonsReducer,
    pokemons1: pokemons1Reducer,
    pokemons2: pokemons2Reducer,
  },
});
