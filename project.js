//selectare dom
const form = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".detail ");
const time = document.querySelector(".time");
const icon = document.querySelector(".icon img");

//schimbare interfata
const updateUI = (data) => {
  console.log(data);
  //schimbare informatii legate de oras/vreme
  const { cityDets, weather } = data;
  details.innerHTML = `
  <h5 class="my-3">${cityDets.EnglishName}</h5>
  <div class="my-3">${weather.WeatherText}</div>
  <div class="display-4 my-4">
    <span>${weather.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
  </div>
  `;
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
  let timeSrc = null;
  weather.IsDayTime
    ? (timeSrc = "./images/day-time.svg")
    : (timeSrc = "./images/night.svg");

  time.setAttribute("src", timeSrc);
  console.log(weather.IsDayTime);
};

//update oras in form
const updateCity = async (city) => {
  const cityDets = await getCity(city);
  const weather = await getWeatherInfo(cityDets.Key);
  return {
    cityDets: cityDets,
    weather: weather,
  };
};
//submit event
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = form.city.value.trim();
  form.reset();
  //update city

  updateCity(city)
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
});
