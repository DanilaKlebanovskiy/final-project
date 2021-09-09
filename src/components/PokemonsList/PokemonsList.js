import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import "./PokemonList.css";
import PropTypes from "prop-types";
import Pokemon from "../Item/PokemonItem";
import gifLoafing from "../../image/loading.gif";
import pokeball from "../../image/gifPokeball.gif";

const PokemonList = ({
  pokemonThunk,
  pockemons,
  catchPokemonThunk,
  loading,
  totalCount,
}) => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  useEffect(() => {
    if (setFetching && pockemons.length < totalCount) {
      pokemonThunk(currentPage)
        .then(setCurrentPage((prevState) => prevState + 10))
        .finally(() => setFetching(false));
    }
  }, [fetching]);
  useEffect(() => {
    const scrollHandler = (e) => {
      if (
        e.target.documentElement.scrollHeight -
          (e.target.documentElement.scrollTop + window.innerHeight) <
        100
      ) {
        setFetching(true);
      }
    };
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  const PokemonItem = pockemons.map((element) => (
    <Pokemon
      key={element.id}
      name={element.name}
      id={Number(element.id)}
      catchPokemonThunk={catchPokemonThunk}
      pokemonThunk={pokemonThunk}
      isCaught={element.isCaught}
      catchTime={element.catchTime}
      currentPage={currentPage}
    />
  ));
  return (
    <div>
      {location.pathname === "/caught" && (
        <div className="list_header">
          Pokemon Backpack
          <img src={pokeball} alt="Pokeball" />
        </div>
      )}
      {location.pathname === "/main" && (
        <div className="list_header">Pokemon List</div>
      )}
      <div className="pokemon_list">{PokemonItem}</div>
      {loading && <img src={gifLoafing} alt="" />}
    </div>
  );
};

PokemonList.propTypes = {
  pockemons: PropTypes.arrayOf(PropTypes.object).isRequired,
  pokemonThunk: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  catchPokemonThunk: PropTypes.func,
  loading: PropTypes.bool.isRequired,
  totalCount: PropTypes.number.isRequired,
};

export default PokemonList;
