/**
 * Fetching Data:
 * getData(url) looks for pokemons data
 * within the endpoint(@param)
 * @param {} url  url for a certain amount of pokemons
 */
export const getData = async (url) => {
  const dataUrl = fetch(url);
  const rawData = await dataUrl;
  const data = await rawData.json();
  const results = data.results;
  console.log("Data: ", results);
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
