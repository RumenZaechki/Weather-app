export function Speed(wind) {
    const speed = wind.speed;
    document.getElementById('windSpeed').innerHTML = `Wind: ${speed} meter/sec`;
}
export function Deg(wind) {
    const deg = wind.deg;
    document.getElementById('windDeg').innerHTML = `Wind direction:  ${Bearing(deg)}`;
}
export function Bearing(deg) {
    var val = Math.floor(deg / 22.5 + 0.5);
    var arr = [
        "N",
        "NNE",
        "NE",
        "ENE",
        "E",
        "ESE",
        "SE",
        "SSE",
        "S",
        "SSW",
        "SW",
        "WSW",
        "W",
        "WNW",
        "NW",
        "NNW",
    ];
    return arr[val % 16];
}