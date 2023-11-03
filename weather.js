const inputWeather = document.querySelector(".inp");
const wrapper = document.querySelector(".wrapper");

inputWeather.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    renderWeatherInCity(inputWeather.value);
  }
}); //! Первым параметром идет слушатель события (нажатие на любую клавишу клавиатуры). Event - информация о событии

function renderWeatherInCity(city) {
  getWeatherCity(city)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      wrapper.classList.add("active");
    });
}
