import "./current-weather.scss"

const CurrentWeather = ()=>{
    return (
    <div className="weather">
      <div className="top">
        <div>
        <p className="city">Shanghai</p>
        <p className="weather-description">Sunny</p>
        </div>
        <img src="pictures/01.png" alt="weather" className="weather-icon" />
      </div>
  
    </div>
    );
}

export default CurrentWeather;