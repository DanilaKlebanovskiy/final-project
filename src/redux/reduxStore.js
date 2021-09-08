import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import PokemonReducer from "./pockemons_reducer/pokemon_reducer";

const reducers = combineReducers({
  pokemons: PokemonReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;
