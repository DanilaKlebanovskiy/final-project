import { pokemonAPI } from "../../api/api";

const SET_POKEMONS = "SET_POKEMONS";
const SET_CAUGHTPOKEMONS = "SET_CAUGHTPOKEMONS";
const SET_POKEMON_ITEM = "SET_POKEMON_ITEM";
const SET_LOADING = "SET_LOADING";
const SET_END = "SET_END"
const initialState = {
  pokemons: [],
  caughtPok: [],
  pokemonItem: {},
  loading: false,
  isEnd: false,
};

const PokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return {
        ...state,
        pokemons: [...action.pokemonsArray],
      };
    case SET_CAUGHTPOKEMONS:
      return {
        ...state,
        caughtPok: [...state.caughtPok, ...action.caughtPokemonsArray],
      };
    case SET_POKEMON_ITEM:
      return {
        ...state,
        pokemonItem: { ...action.pokemonItem },
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.isFetching,
      };
    case SET_END:
      return {
        ...state,
        isEnd: action.end
      };
    default:
      return state;
  }
};

export const PokemonsAC = (pokemonsArray) => ({
  type: SET_POKEMONS,
  pokemonsArray,
});
export const caughtPokemonsAC = (caughtPokemonsArray) => ({
  type: SET_CAUGHTPOKEMONS,
  caughtPokemonsArray,
});
export const pokemonItemAC = (pokemonItem) => ({
  type: SET_POKEMON_ITEM,
  pokemonItem,
});
export const setLoading = (isFetching) => ({ type: SET_LOADING, isFetching });
export const setEndScrolAC = (end) => ({type: SET_END , end})

export const caughtPokemonThunk = (currentPage) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const response = await pokemonAPI.getCaught(currentPage);
    const result = await response.json();
    if (result.length === 0){
      dispatch(setEndScrolAC(true))
    }else{
      dispatch(caughtPokemonsAC(result));
    }
    dispatch(setLoading(false));

  };
};

export const pokemonThunk = (amount) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const response = await pokemonAPI.getPokemons(amount);
    const result = await response.json();
    dispatch(PokemonsAC(result));
    dispatch(setLoading(false));
  };
};

export const catchPokemonThunk = (id, data, currentPage) => {
  return async (dispatch) => {
    await pokemonAPI.putCatchPokemons(id, data);
    const response = await pokemonAPI.getPokemons(currentPage);
    const result = await response.json();
    dispatch(PokemonsAC(result));
  };
};

export const getPokemonItemThunk = (id) => {
  return async (dispatch) => {
    const response = await pokemonAPI.getPokemonItem(id);
    const result = await response.json();
    dispatch(pokemonItemAC(result));
  };
};

export default PokemonReducer;
