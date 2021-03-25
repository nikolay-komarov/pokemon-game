import {createSlice} from "@reduxjs/toolkit";
import FirebaseClass from "../service/firebase";
import {selectLocalID} from "./user";

export const slice = createSlice({
  name: 'pokemons',
  initialState: {
    isLoading: false,
    data: {},
    error: null,
  },
  reducers: {
    fetchPokemons: state => ({
      ...state,
      isLoading: true,
    }),
    fetchPokemonsResolve: (state, action) => ({
      ...state,
      isLoading: false,
      data: action.payload,
    }),
    fetchPokemonsReject: (state, action) => ({
      ...state,
      isLoading: false,
      data: {},
      error: action.payload,
    }),
  }
});

export const {fetchPokemons, fetchPokemonsResolve, fetchPokemonsReject} = slice.actions;
export const selectPokemonsData = state => state.pokemons.data;
export const selectPokemonsIsLoading = state => state.pokemons.isLoading;

export const getPokemonAsync = () => async (dispatch, getState) => {
  const localId = selectLocalID(getState());
  dispatch(fetchPokemons());
  const data = await fetch(`https://pokemon-game-f1cd5-default-rtdb.firebaseio.com/${localId}/pokemons.json`)
    .then(res => res.json());

  console.log('data: ', data);
  // todo auth in fetch and tokenId in store
  // <!--?auth=<ID_TOKEN>-->
  dispatch(fetchPokemonsResolve(data));
};

export default slice.reducer;
