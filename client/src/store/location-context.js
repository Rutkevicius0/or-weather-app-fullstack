import React, { useState, useCallback } from 'react';

const LocationContext = React.createContext({
  searchInputValue: '',
  singleLocationInfo: '',
  searchInputValueHandler: () => {},
  searchResults: [],
  searchResultsHandler: () => {},
  locationCurrentWeather: {},
  locationCurrentWeatherHandler: () => {},
  locationForeCast: {},
  locationForecastHandler: () => {},
});

export const LocationContextProvider = (props) => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [singleLocationInfo, setSingleLocationInfo] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [locationCurrentWeather, setLocationCurrentWeather] = useState({});
  const [locationForecast, setLocationForecast] = useState({});

  const searchInputValueHandler = (value) => {
    setSearchInputValue(value);
  };
  const singleLocationInfoHandler = (data) => {
    setSingleLocationInfo(data);
  };

  const searchResultsHandler = useCallback((dataArray) => {
    setSearchResults(dataArray);
  }, []);

  const locationCurrentWeatherHandler = (data) => {
    setLocationCurrentWeather(data);
  };

  const locationForecastHandler = (data) => {
    setLocationForecast(data);
  };

  return (
    <LocationContext.Provider
      value={{
        searchInputValue,
        searchResults,
        locationCurrentWeather,
        locationForecast,
        searchInputValueHandler,
        searchResultsHandler,
        locationCurrentWeatherHandler,
        locationForecastHandler,
        singleLocationInfo,
        singleLocationInfoHandler,
      }}
    >
      {props.children}
    </LocationContext.Provider>
  );
};
export default LocationContext;
