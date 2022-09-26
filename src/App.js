import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';
import './App.css';
import { API_KEY, WEATHER_API_URL } from './api';
import {useState} from 'react';
import Forecast from './components/forecast/forecast';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);


  const handleOnSearchChange = (searchData) =>{
    const [lat, lon] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    
    Promise.all([currentWeatherFetch, forecastFetch])
    .then(async(response) =>{
      const weatherResponse = await response[0].json();//in order to map the response
      const forecastResponse = await response[1].json();
      setCurrentWeather({city: searchData.label, ...weatherResponse});//react es6
      setForecast({city: searchData.label, ...forecastResponse});
    })
    .catch((err) => console.log(err));
    
  }
  console.log(currentWeather);

console.log(forecast);

  return (
    <div className="container">
    <Search onSearchChange={handleOnSearchChange}/>
    {currentWeather && <CurrentWeather data={currentWeather} />}
    {forecast && <Forecast data = {forecast}/>}
    </div>
  );
}
//if current weather exist, show the widget. If doesn't, don't show anything
export default App;
