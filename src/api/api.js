// eslint-disable-next-line import/prefer-default-export
export const pokemonAPI = {
  getPokemons(currentPage) {
    return fetch(
      `http://localhost:3000/pokemons/?_start=0&_end=${currentPage}`
    );
  },
  putCatchPokemons(id, data) {
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    return fetch(`http://localhost:3000/pokemons/${id}`, requestOptions);
  },
  getCaught(currentPage) {
    return fetch(
      `http://localhost:3000/pokemons/?_page=${currentPage}&isCatched=true`
    );
  },
  getPokemonItem(id) {
    return fetch(`http://localhost:3000/pokemons/${id}`);
  },
};
