const apiKey = "06b8c4e98e8c2dhwsgh03914faf5df2fad";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=jajafafarkakaj";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);

    if (response.status === 404) {
        alert("City not found!");
        return;
    }

    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp span").innerHTML = Math.round(data.main.temp);
    document.querySelector("#hum").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  
    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "weather-app-img/images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "weather-app-img/images/clear.png";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "weather-app-img/images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "weather-app-img/images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "weather-app-img/images/mist.png";
    }else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "weather-app-img/images/snow.png";
    
    }
    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

