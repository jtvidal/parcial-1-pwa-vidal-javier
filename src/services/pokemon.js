/**
 * This function looks for pokemons data within the endpoint param
 * @param {} url  url for a certain amount of pokemons
 */
export const getPokemons = (url) => {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Pokemons no encontrados");
      }
      return response.json();
    })
    .then((data) => {
      return data.results;
    })
    .catch(console.log(Error));
};
