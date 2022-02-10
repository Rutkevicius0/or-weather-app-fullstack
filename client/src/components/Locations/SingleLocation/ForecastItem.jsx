import React from 'react';
import '../../../scss/weather.scss';
export default function ForecastItem(props) {
  const { date, minTemp, maxTemp, symbol } = props.forecastData;
  const transformDate = () => {
    const wd = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const d = new Date(date);

    const day = wd[d.getDay()];
    return day;
  };

  return (
    <li className="list-group-item rounded mt-1 forecast-item d-flex flex-row justify-content-around align-items-center">
      <h4 className="mb-0">{transformDate()}</h4>

      <img
        src={`https://developer.foreca.com/static/images/symbols/${symbol}.png`}
        alt=""
      />
      <div className="d-flex flex-row align-items-center">
        <h5 className="mb-0">{minTemp}°C</h5>
        <div className="forecast--temperature-div"></div>
        <h5 className="mb-0">{maxTemp}°C</h5>
      </div>
    </li>
  );
}
