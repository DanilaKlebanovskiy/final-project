import {useEffect, useState, useCallback, useRef} from "react";
import React from "react";
import "./PokemonList.css";
import Pokemon from "../Item/PokemonItem";
import gifLoafing from "../../image/loading.gif";
import {useLocation} from "react-router";
import pokeball from "../../image/gifPokeball.gif"

const PokemonList = ({
  pokemonThunk,
  pockemons,
  catchPokemonThunk,
  loading, endofScrol
}) => {
  console.log(endofScrol)
  const location = useLocation()
  const [currentPage, setCurrentPage] = useState(1);



  const getPokemons = useCallback(() => {
    if (currentPage) {
      pokemonThunk(currentPage).then(
        setCurrentPage((currentPage) => {
          return currentPage + 1;
        })
      );
    }
  }, [currentPage]);

  useEffect(() => {
    getPokemons();
  }, []);

  useEffect(() => {
    const scrollHandler = (e) => {
      if (
          ((e.target.documentElement.scrollHeight -
          (e.target.documentElement.scrollTop + window.innerHeight) <
        100))
      ) {
        getPokemons();
      }
    };
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [getPokemons]);





  const pokemonsFeed = pockemons;
  const PokemonItem = pokemonsFeed.map((element, id) => (
    <Pokemon
      key={element.id}
      name={element.name}
      id={element.id}
      catchPokemonThunk={catchPokemonThunk}
      pokemonThunk={pokemonThunk}
      isCatched={element.isCatched}
      catchTime={element.catchTime}
      currentPage={currentPage}
    />
  ));
  return (
    <div>
      {location.pathname === "/caught" && <div className={"list_header"}>Pokemon Backpack<img src={pokeball} alt="Pokeball"/></div>}
      {location.pathname === "/main"  && <div className={"list_header"}>Pokemon List</div>}
      <div className={"pokemon_list"}>{PokemonItem}</div>
      {loading && <img src={gifLoafing} alt="" />}
    </div>
  );
};

export default PokemonList;
