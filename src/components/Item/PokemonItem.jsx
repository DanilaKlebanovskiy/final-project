import React from "react";
import { NavLink } from "react-router-dom";
import "./PokemonItem.css";
import PropTypes from "prop-types";

const Pokemon = ({
  catchPokemonThunk,
  id,
  currentPage,
  name,
  isPokemonItem,
  catchTime,
  isCatched,
}) => {
  // eslint-disable-next-line no-console
  console.log(name);
  const catchPokemon = () => {
    const capturedTime = new Date();
    const localTime = capturedTime.toLocaleString();
    catchPokemonThunk(
      id,
      { isCatched: true, catchTime: localTime },
      currentPage
    );
  };
  return (
    <div>
      <div>
        <div className="pokemon_image">
          <NavLink to={`/pokemon/${id}`}>
            <img
              src={
                id <= 720
                  ? `https://github.com/DanilaKlebanovskiy/final-project/raw/main/pokemons/${id}.png`
                  : "https://w7.pngwing.com/pngs/317/369/png-transparent-unown-pokemon-x-and-y-pokemon-diamond-and-pearl-pokemon-go-pokedex-pokemon-go-logo-nintendo-video-game.png"
              }
              alt={name}
            />
          </NavLink>
        </div>
        <div>{name}</div>
        {isPokemonItem ? (
          <div>
            <div>id:{id}</div>
          </div>
        ) : (
          <button
            type="button"
            className="btn_catch"
            onClick={catchPokemon}
            disabled={isCatched}
          >
            Catch me
          </button>
        )}
        {isPokemonItem && isCatched ? (
          <div className="catchTime">time:{catchTime}</div>
        ) : null}
      </div>
    </div>
  );
};

Pokemon.propTypes = {
  currentPage: PropTypes.number,
  // eslint-disable-next-line react/require-default-props
  catchPokemonThunk: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.number.isRequired,
  isPokemonItem: PropTypes.bool,
  catchTime: PropTypes.string,
  isCatched: PropTypes.bool,
};

Pokemon.defaultProps = {
  isPokemonItem: false,
  catchTime: "free",
  isCatched: false,
  currentPage: 10,
  name: "Unknown Pokemon",
};
export default Pokemon;
