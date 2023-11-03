//! https://652d3037f9afa8ef4b26f0ee.mockapi.io/products --- основной url сервера
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = "2483f1ef02e8125d570f455423648e18";
const lang = "ru";
const units = "metric";

function getWeatherCoord(lat = 44.36, lon = 10.99) {
  //! так можем сделать параметры по умолчания (если туда ничего не передалось)
  return fetch(
    `${baseUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}&lang=${lang}`
  );
}
function getWeatherCity(city = "Москва") {
  //! так можем сделать параметры по умолчания (если туда ничего не передалось)
  return fetch(
    `${baseUrl}?q=${city}&appid=${apiKey}&units=${units}&lang=${lang}`
  );
}
