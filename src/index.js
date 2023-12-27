function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;

  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "6403o1d018cabaa3376f1c4c467ec4ft";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function seoulWeather(seoul) {
  let seoulTemperature = document.querySelector("#temperature-seoul");
  let temp = seoul.data.temperature.current;
  seoulTemperature.innerHTML = Math.round(temp);
}
function searchSeoul() {
  let apiKey = "6403o1d018cabaa3376f1c4c467ec4ft";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Seoul&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(seoulWeather);
}

function handleSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
  searchSeoul();
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearch);

searchSeoul();
