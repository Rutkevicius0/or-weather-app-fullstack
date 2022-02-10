import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import useHttp from '../hooks/use-http';
import LocationContext from '../store/location-context';
import SingleLocationCurrent from '../components/Locations/SingleLocation/SingleLocationCurrent';
import SingleLocationForecast from '../components/Locations/SingleLocation/SingleLocationForecast';
import { postRequest } from '../utilities/requests';

export default function WeatherPage() {
  const {
    locationCurrentWeather,
    locationForecast,
    locationCurrentWeatherHandler,
    locationForecastHandler,
  } = useContext(LocationContext);
  const { sendRequest } = useHttp();
  const { id, city, country } = useParams();

  useEffect(() => {
    sendRequest('current', id, locationCurrentWeatherHandler);
    sendRequest('forecast', id, locationForecastHandler);
    postRequest('current-weather/new', {
      city: `${city}`,
      country: ` ${country}`,
      weatherData: locationCurrentWeather.current,
    });
  }, []);

  return (
    <div className="container container-trans">
      {locationCurrentWeather.current && (
        <SingleLocationCurrent currentWeather={locationCurrentWeather} />
      )}
      {locationForecast.forecast && (
        <SingleLocationForecast forecast={locationForecast} />
      )}
    </div>
  );
}
