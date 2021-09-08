import { NavLink } from "react-router-dom";
import  "./PokemonItem.css"

const Pokemon = ({
  catchPokemonThunk,
  id,
  currentPage,
  name,
  isPokemonItem,
  catchTime,
  isCatched,
}) => {
  const catchPokemon = () => {
    const catchTime = new Date();
    const localTime = catchTime.toLocaleString();
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
                  ? `https://raw.githubusercontent.com/katiadeo/final-project/main/pokemons/${id}.png`
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

export default Pokemon;
