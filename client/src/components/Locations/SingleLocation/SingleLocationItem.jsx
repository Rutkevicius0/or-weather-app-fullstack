import React, { useContext } from 'react';
import LocationContext from '../../../store/location-context';
import SingleLocationCurrent from './SingleLocationCurrent';
import SingleLocationForecast from './SingleLocationForecast';

export default function SingleLocationItem() {
  const { singleLocationInfo } = useContext(LocationContext);
  const { name: city, country } = singleLocationInfo;
  return (
    <div>
      <h2>{`${city}, ${country}`}</h2>
      <SingleLocationCurrent />
      <SingleLocationForecast />
    </div>
  );
}
