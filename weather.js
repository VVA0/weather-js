const inputWeather = document.querySelector(".inp");
const wrapper = document.querySelector(".wrapper");
const weather = document.querySelector(".weather");
const cityHtml = document.querySelector(".city");
const numb = document.querySelector(".numb");
const numbTwo = document.querySelector(".numb-2");
const humValue = document.querySelector(".hum__value");
const tempText = document.querySelector(".temp__text");
const weatherIcon = document.querySelector(".weather-icon");
const geoBtn = document.querySelector(".btn");

inputWeather.addEventListener("keyup", function (event) {
  //! Обработчик события
  if (event.key == "Enter") {
    renderWeatherInCity(inputWeather.value);
  }
}); //! Первым параметром идет слушатель события (нажатие на любую клавишу клавиатуры). Event - информация о событии

geoBtn.addEventListener("click", function (event) {
  if (navigator.geolocation) {
    //! Это встроенные метод который позволяет работать с геолокацией
    navigator.geolocation.getCurrentPosition(onSuccess, onError); //! а второй метод позволяет получить получить геолокацию (передаем две функции 1я- выполнится, если получили геолокация, а 2я- если нет)
  } else {
    alert("Браузер не передает геолокацию");
  }
});

function onSuccess(position) {
  console.log(position);
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  renderWeatherInCity("", lat, lon);
}
function onError() {
  alert("У Вас отключена геолокация");
}

function renderWeatherInCity(city, lat, lon) {
  let func;
  if (lat && lon) {
    func = getWeatherCoord(lat, lon);
  } else {
    func = getWeatherCity(city);
  }
  func
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let id = data.weather[0].id;
      if (id == 800) {
        weatherIcon.src = "./img/clear.svg";
      } else if (id <= 232 && id >= 200) {
        weatherIcon.src = "./img/storm.svg";
      } else if (id <= 622 && id >= 600) {
        weatherIcon.src = "./img/snow.svg";
      } else if (id <= 781 && id >= 701) {
        weatherIcon.src = "./img/haze.svg";
      } else if (id <= 804 && id >= 801) {
        weatherIcon.src = "./img/cloud.svg";
      } else if ((id <= 321 && id >= 300) || (id <= 531 && id >= 500)) {
        weatherIcon.src = "./img/rain.svg";
      }
      cityHtml.innerHTML = data.name;
      numbTwo.innerHTML = Math.floor(data.main.feels_like);
      numb.innerHTML = Math.floor(data.main.temp);
      humValue.innerHTML = data.main.humidity + " %";
      tempText.innerHTML = data.weather[0].description;

      wrapper.classList.add("active");
      weather.classList.add("weather-active");
    });
}
