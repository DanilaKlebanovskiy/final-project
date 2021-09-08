import React from "react";
import { connect } from "react-redux";
import {
  catchPokemonThunk,
  pokemonThunk,
} from "../../redux/pockemons_reducer/pokemon_reducer";
import PokemonList from "../../components/PokemonsList/PokemonsList";

const MainPageContainer = ({
  pockemons,
  pokemonThunk,
  catchPokemonThunk,
  loading,
}) => {
  return (
    <PokemonList
      pockemons={pockemons}
      pokemonThunk={pokemonThunk}
      catchPokemonThunk={catchPokemonThunk}
      loading={loading}
    />
  );
};
const mapStateToProps = (state) => ({
  pockemons: state.pokemons.pokemons,
  loading: state.pokemons.loading,
});

export default connect(mapStateToProps, { pokemonThunk, catchPokemonThunk })(
  MainPageContainer
);
