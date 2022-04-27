export function Temperature(temp) {
    const temperature = temp["temp"];
    document.getElementById('temperature').innerHTML = Math.round(temperature) + '°C';
}
export function FeelsLike(temp) {
    const feelsLike = temp['feels_like'];
    document.getElementById('feelsLike').innerHTML = 'Feels like:' + Math.round(feelsLike) + '°C';
}
export function Pressure(temp) {
    const pressure = temp["pressure"];
    document.getElementById('pressure').innerHTML = 'Pressure: ' + Math.round(pressure) + 'hPa';
}
export function Humidity(temp){
    const humidity = temp["humidity"];
    document.getElementById('humidity').innerHTML = 'Humidity:' + Math.round(humidity) + '%';
}
