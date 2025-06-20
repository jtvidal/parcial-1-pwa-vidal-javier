/**
 * Fetching Data:
 * getData(url) looks for pokemons data
 * within the endpoint(@param)
 * @param {} url  to fetch
 * @returns [Array] results property of response object.
 */
export const getData = async (url) => {
  const dataUrl = fetch(url);
  const rawData = await dataUrl;
  const data = await rawData.json();
  // console.log("response: ", data);
  const results = data.results;
  // console.log("results: ", results);
  return results;
};
/**
 * Fetches the data form a url
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
