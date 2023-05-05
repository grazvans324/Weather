//api key
const key = "wQBFZwasotQvAh2kCKy4yPtBiaGDPQoe";

//informatia de vreme de la api
const getWeatherInfo = async (id) => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";

  //query api command
  const query = `${id}?apikey=${key}`;
  //basic fetch api
  const response = await fetch(base + query);
  const data = await response.json();
  return data[0];
};

//informatia legata de oras din api
const getCity = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";

  //query api comand
  const query = `?apikey=${key}&q=${city}`;
  //basic fetch api
  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};
// getCity("pitesti")
//   .then((data) => {
//     return getWeatherInfo(data.Key);
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));
