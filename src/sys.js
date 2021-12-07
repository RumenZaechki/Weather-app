export function Sunrise(sys) {
    const sunrise = sys.sunrise;
    document.getElementById('sunrise').innerHTML = `Sunrise: ${getTime(sunrise)}`;
}
export function Sunset(sys) {
    const sunset = sys.sunset;
    document.getElementById('sunset').innerHTML = `Sunset: ${getTime(sunset)}`;
}
export function Country(sys) {
    const country = sys.country;
    document.getElementById('country').innerHTML = ' ,' + country;
}
export function getTime(time) {
    let date = new Date(time * 1000);
    let realTime = date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
    });
    return realTime;
}