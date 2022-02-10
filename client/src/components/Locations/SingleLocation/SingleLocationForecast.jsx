import React from 'react';
import ForecastItem from './ForecastItem';

export default function SingleLocationForecast(props) {
  const { forecast } = props.forecast;
  return (
    <ul className="list-group">
      {forecast.map((fObj) => (
        <ForecastItem key={fObj.date} forecastData={fObj} />
      ))}
    </ul>
  );
}
