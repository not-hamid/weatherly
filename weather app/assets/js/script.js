const container = document.querySelector('.container');
const input = document.querySelector('#input');
const search = document.querySelector('#search');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

function fetchWeather() {
    const city = document.querySelector('#input').value;
    const APIKey = 'b5671e5a919805154d547e42d94fccc1';

    if( city === '') return;
 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then(response => response.json())
    .then(json => {

        if (json.cod === '404') {
            container.style.height = '22rem'
            error404.classList.add('active');
            weatherBox.classList.remove('active');
            weatherDetails.classList.remove('active');
            return;
        } 
        else{
            container.style.height = '30rem'
            error404.classList.remove('active');
            weatherBox.classList.add('active');
            weatherDetails.classList.add('active');
        }

        const image = document.querySelector('.weather img');
        const temprature = document.querySelector('.weather .temp');
        const description = document.querySelector('.weather .des');
        const humidity = document.querySelector('.humidity .hum-value');
        const wind = document.querySelector('.wind .wind-value');

        switch (json.weather[0].main) {
            case 'Clear':
                image.src = 'assets/media/clear.png'
                break;

            case 'Clouds':
                image.src = 'assets/media/cloud.png'
                break;

            case 'Rain':
                image.src = 'assets/media/rain.png'
                break;

            case 'Snow':
                image.src = 'assets/media/snow.png'
                break;

            case 'Haze':
                image.src = 'assets/media/mist.png'
                break;
        
            default:
                image.src = 'assets/media/cloud.png'
        }

        temprature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}km/h`;
    })

    .catch(error => console.error('Error fetching weather data:', error));
}

search.addEventListener('click',()=>fetchWeather());

input.addEventListener('keydown',()=>fetchWeather())


VanillaTilt.init(document.querySelector('.tilt-effect'), {
    max: 6,
    speed: 300,
    glare: true,
    "max-glare": 0.2
  });