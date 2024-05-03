/**
 * Fetching Data:
 * getData(url) looks for pokemons data
 * within the endpoint(@param)
 * @param {} url  to fetch
 */
export const getData = async (url) => {
  const dataUrl = fetch(url);
  const rawData = await dataUrl;
  const data = await rawData.json();
  console.log("data.json(): ", data);
  const nextPage = data.next;
  const previousPage = data.previous;
  console.log('previous URL: ',previousPage);
  console.log('Next URL: ', nextPage);
  const results = data.results;
  console.log("Data results: ", results);
  return results;
  // return fetch(url)
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log(data.results);
  //     return data.results;
  //   })
  //   .catch(console.log(Error));
};
/**
 * Fetches the data form an individual pokemon
 * @param {String} url 
 * @returns Object
 */
export const getPokemon = async (url) => {
  const pokemonUrl = fetch(url);
  const pokemonData = await pokemonUrl;
  const pokemon = await pokemonData.json();
  console.log("Pokemon", pokemon);
  return pokemon;
};


    /**
     * Goes to next page.
     */
export const next= async (url)=>{
      return await this.getData(url);
    }
    /**
     *Goes 1(one) page back.
     */
export const previous = async (url)=>{
      return await this.getData(url);
    }