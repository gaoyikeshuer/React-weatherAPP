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
  <div className="bottom">
    <p className="temperature">
        18°C
    </p>
    <div className="details">
        <div className="parameter-row">
            <span className="parameter-label">Details</span>
        </div>
        <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value"> 18°C</span>
        </div>
        <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value"> 2 m/s</span>
        </div>
        <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">15%</span>
        </div>
        <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">15 hPa</span>
        </div>
    </div>
  </div>
    </div>
    );
}

export default CurrentWeather;