import "./current-weather.scss"

const CurrentWeather = ()=>{
    return (
    <div className="weather">
      <div className="top">
        <p className="city">Shanghai</p>
        <p className="weather-description">Sunny</p>
      </div>
      <img src="" alt="weather" className="weather-icon" />
    </div>
    );
}

export default CurrentWeather;