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
  isCaught,
}) => {
  // eslint-disable-next-line no-console
  console.log(typeof id);
  const catchPokemon = () => {
    const capturedTime = new Date();
    const localTime = capturedTime.toLocaleString();
    catchPokemonThunk(
      id,
      { isCaught: true, catchTime: localTime },
      currentPage
    );
  };
  return (
    <div>
      <div>
        <div className="pokemon_image">
          <NavLink to={`/pokemon/${id}`}>
            <img
              src={`https://github.com/DanilaKlebanovskiy/final-project/blob/main/pokemons/${id}.png?raw=true`}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://pngicon.ru/file/uploads/vinni-pukh-v-png-256x256.png";
              }}
              alt="pokemon"
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
            disabled={isCaught}
          >
            Catch me
          </button>
        )}
        {isPokemonItem ? <div>{isCaught ? "caught" : "no caught"}</div> : null}
        {isPokemonItem && isCaught ? (
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
  isCaught: PropTypes.bool,
};

Pokemon.defaultProps = {
  isPokemonItem: false,
  catchTime: "free",
  isCaught: false,
  currentPage: 10,
  name: "Unknown Pokemon",
};
export default Pokemon;
