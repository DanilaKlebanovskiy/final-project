import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { caughtPokemonThunk } from "../../redux/pockemons_reducer/pokemon_reducer";
import PokemonList from "../../components/PokemonsList/PokemonsList";

// eslint-disable-next-line no-shadow
// eslint-disable-next-line no-shadow
const CaughtPokContainer = ({
  caughtPok, // eslint-disable-next-line no-shadow
  caughtPokemonThunk,
  loading,
  totalCount,
}) => {
  return (
    <PokemonList
      pockemons={caughtPok}
      pokemonThunk={caughtPokemonThunk}
      loading={loading}
      totalCount={totalCount}
    />
  );
};
const mapStateToProps = (state) => ({
  caughtPok: state.pokemons.caughtPok,
  loading: state.pokemons.loading,
  totalCount: state.pokemons.totalCount,
});

export default connect(mapStateToProps, { caughtPokemonThunk })(
  CaughtPokContainer
);

CaughtPokContainer.propTypes = {
  caughtPok: PropTypes.arrayOf(PropTypes.object).isRequired,
  caughtPokemonThunk: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  totalCount: PropTypes.number.isRequired,
};
