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
  console.log("response: ", data);
  const results = data.results;
  console.log("results: ", results);
  return results
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
 * Fetches the data form an url
 * @param {String} url
 * @returns Object
 */
export const getUrl = async (url) => {
  const infoUrl = fetch(url);
  const urlResponse = await infoUrl;
  const urlData = await urlResponse.json();
  // console.log("url data:", urlData);
  return urlData;
};