import { connect } from "react-redux";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { getPokemonItemThunk } from "../../redux/pockemons_reducer/pokemon_reducer";
import PokemonItem from "../../components/Item/PokemonItem";

const PokemonPageContainer = ({ pokemonItem, getPokemonItemThunk }) => {
  const location = useParams();
  const id = location.pokemonId;
  useEffect(() => {
    getPokemonItemThunk(id);
  }, []);
  return (
    <PokemonItem
      name={pokemonItem.name}
      catchTime={pokemonItem.catchTime}
      id={id}
      isCatched={pokemonItem.isCatched}
      isPokemonItem
    />
  );
};

const mapStateToProps = (state) => ({
  pokemonItem: state.pokemons.pokemonItem,
});

export default connect(mapStateToProps, { getPokemonItemThunk })(
  PokemonPageContainer
);
