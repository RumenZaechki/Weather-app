import {
    Temperature,
    FeelsLike,
    Pressure,
    Humidity
} from './temps.js';
import { Weather, Icon } from './weather.js';
import { Speed, Deg } from './wind.js';
import { Sunrise, Sunset, Country } from './sys.js';
import { nextWeek } from './nextWeek.js';
import { notify } from './error.js';

const apiKey = '04f8e386e970aeabe726c9ece2be088e';

document.querySelector("#form > div > button").addEventListener('click', async (ev) => {
    ev.preventDefault();
    const location = document.querySelector("#search");
    if (location.value != undefined) {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location.value}&appid=${apiKey}&units=metric`);
        let data = await response.json();
        let dataName = data.name;
        let dataTemperature = { ...data.main };
        let dataWeather = { ...data.weather };
        let dataWind = { ...data.wind };
        let dataSys = { ...data.sys };
        if (dataName === undefined || dataName === null) {
            notify('Something went wrong. Would you kindly try again?');
        }
        else {
            ViewName(dataName);
            Temperature(dataTemperature);
            FeelsLike(dataTemperature);
            Pressure(dataTemperature);
            Humidity(dataTemperature);
            Weather(dataWeather);
            Icon(dataWeather);
            Speed(dataWind);
            Deg(dataWind);
            Sunrise(dataSys);
            Sunset(dataSys);
            Country(dataSys);

            let coord = data.coord;

            let weekResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=current, minutely, hourly, alerts&appid=04f8e386e970aeabe726c9ece2be088e&units=metric`);
            let weekData = await weekResponse.json();

            nextWeek(weekData.daily);
        }
    }
});
function ViewName(name) {
    const locationName = name;
    const nameID = document.getElementById("name");
    nameID.innerHTML = locationName;
}
