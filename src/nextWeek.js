export async function nextWeek(data) {
    const weekContainer = document.getElementById('daily-weather-container');
    data.forEach(d => {
        const li = document.createElement('li');
        li.setAttribute('class', 'daily-weather-li')
        const pDayName = document.createElement('p');
        pDayName.setAttribute('class', "daily-weather-day");
        pDayName.textContent = getDate(d.dt);
        const img = document.createElement('img');
        img.setAttribute('src', `http://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png`);
        img.setAttribute('class', 'daily-weather-icon')
        const pDescription = document.createElement('p');
        pDescription.textContent = d.weather[0].description;
        const pTemp = document.createElement('p');
        pTemp.textContent = `${Math.round(d.temp.min)}°C / ${Math.round(d.temp.max)}°C`;

        li.appendChild(pDayName);
        li.appendChild(img);
        li.appendChild(pDescription);
        li.appendChild(pTemp);
        weekContainer.appendChild(li);
    });
}

function getDate(unix) {
    let date = new Date(unix * 1000);
    let day = date.getDay();
    switch (day) {
        case 1:
            return 'Mon';
        case 2:
            return 'Tue'
        case 3:
            return 'Wed';
        case 4:
            return 'Thu';
        case 5:
            return 'Fri';
        case 6:
            return 'Sat';
        case 0:
            return 'Sun';
        default:
            break;
    }
}
