# Weatherly 🌤

[![Weatherly](https://img.shields.io/badge/version-1.0.0-brightgreen)](https://github.com/not-hamid/weatherly)  
An advance, fast, and intuitive weather application that provides real-time weather updates using an API, built with Vanilla JavaScript.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

## Features
- Fetches real-time weather data for any location.
- Displays current temperature, weather condition, humidity, and wind speed.
- Error handling for invalid locations (404).
- Dynamic weather icons based on conditions (clear, clouds, rain, snow, etc.).
- Interactive tilt effect on the main container.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/not-hamid/weatherly.git
   ```
2. Navigate to the project directory:
   ```bash
   cd weatherly
   ```
3. Open `index.html` in your browser to use the app.

## Usage
- Enter your city name into the search bar.
- Press the search button or hit "Enter" to view the current weather.
- Weather information, including temperature, humidity, and wind speed, will be displayed along with a weather icon.

## Technologies Used
- **HTML5**: Structure and layout of the app.
- **CSS3**: Styling, animations, and responsiveness.
- **Vanilla JavaScript**: Main logic to fetch weather data and update the UI.
- **OpenWeather API**: Real-time weather data provider.
- **Boxicons**: For icons like map, search, and weather indicators.
- **Vanilla Tilt**: Adds a tilt effect for interactive UI.

## API Reference
- **OpenWeather API**: Used to fetch real-time weather data. You need to sign up for an API key at [OpenWeather](https://openweathermap.org/api).

### Sample API Call:
```bash
https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid={API_KEY}
```

Replace `{city}` with the location and `{API_KEY}` with your OpenWeather API key.

## Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/not-hamid/weatherly/issues).

## License
This project is licensed under the MIT License.

---
