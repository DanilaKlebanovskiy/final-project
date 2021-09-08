/* eslint-disable no-shadow */
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
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
  totalCount,
}) => {
  return (
    <PokemonList
      pockemons={pockemons}
      pokemonThunk={pokemonThunk}
      catchPokemonThunk={catchPokemonThunk}
      loading={loading}
      totalCount={totalCount}
    />
  );
};
const mapStateToProps = (state) => ({
  pockemons: state.pokemons.pokemons,
  loading: state.pokemons.loading,
  totalCount: state.pokemons.totalCount,
});

export default connect(mapStateToProps, { pokemonThunk, catchPokemonThunk })(
  MainPageContainer
);

MainPageContainer.propTypes = {
  pockemons: PropTypes.arrayOf(PropTypes.object).isRequired,
  catchPokemonThunk: PropTypes.func.isRequired,
  pokemonThunk: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  totalCount: PropTypes.number.isRequired,
};
