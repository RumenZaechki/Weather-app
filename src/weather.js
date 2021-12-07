export function Weather(weather) {
    const description = weather[0].description;
    document.getElementById('weather').innerHTML = description;
}
export function Icon(weather) {
    const icon = weather[0].icon;
    document.getElementById('weatherIcon').innerHTML = `<img src="https://openweathermap.org/img/w/${icon}.png"/>`;;
}