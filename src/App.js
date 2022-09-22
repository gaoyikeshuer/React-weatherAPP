import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';
import './App.css';
import { API_KEY, WEATHER_API_URL } from './api';
import {useState} from 'react';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);


  const handleOnSearchChange = (searchData) =>{
    const [lat, lon] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`);

    Promise.all([currentWeatherFetch, forecastFetch])
    .then(async(response) =>{
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();
      setCurrentWeather(weatherResponse);
      setForecast(forecastResponse);
    })
  
  }
  return (
    <div className="container">
    <Search onSearchChange={handleOnSearchChange}/>
    <CurrentWeather />
    </div>
  );
}

export default App;
