let weather = {
    apikey: 'bed6ed2482ff99e240cdb9c90e9c7e7b',
    fetchWeather(city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apikey}`)
            .then((res) => res.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        document.getElementById('city').innerText = `Weather in ${name}`;
        document.getElementById('temp').innerText = `${parseInt(temp)}°C`;
        document.getElementById('icon').src = `https://openweathermap.org/img/wn/${icon}.png`;
        document.getElementById('description').innerText = description;
        document.getElementById('humidity').innerText = `Humidity: ${humidity}%`;
        console.log(speed);
        document.getElementById('wind').innerText = `Wind speed: ${Math.round(speed)}m/s`;
    },
};

const search = () => {
    const input = document.getElementById('input');
    const body = document.getElementById('body');

    weather.fetchWeather(input.value);
    body.style.backgroundImage = `url('https://source.unsplash.com/1920x1080/?${input.value}')`;
};

const enterKey = (e) => {
    if (e.code == 'Enter') {
        search();
    }
};
