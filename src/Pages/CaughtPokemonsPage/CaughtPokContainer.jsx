import React from "react";

import { connect } from "react-redux";
import { caughtPokemonThunk } from "../../redux/pockemons_reducer/pokemon_reducer";
import PokemonList from "../../components/PokemonsList/PokemonsList";

// eslint-disable-next-line no-shadow
const CaughtPokContainer = ({ caughtPok, caughtPokemonThunk, loading,endofScrol }) => {
  return (
    <PokemonList
      pockemons={caughtPok}
      pokemonThunk={caughtPokemonThunk}
      loading={loading}
      endofScrol={endofScrol}
    />
  );
};
const mapStateToProps = (state) => ({
  caughtPok: state.pokemons.caughtPok,
  loading: state.pokemons.loading,
  endofScrol: state.pokemons.isEnd
});

export default connect(mapStateToProps, { caughtPokemonThunk })(
  CaughtPokContainer
);
