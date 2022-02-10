import React, { useContext, useMemo } from 'react';
import LocationContext from '../../store/location-context';
import LocationsListItem from './LocationsListItem';

const LocationsList = (props) => {
  const { searchResults } = useContext(LocationContext);
  const slicedSearchResults = useMemo(
    () => searchResults.slice(0, 5),
    [searchResults],
  );

  return (
    <ul
      className="list-group
    locations-list mt-2 overflow-auto"
    >
      {slicedSearchResults.map(({ id, name: city, country }) => (
        <LocationsListItem key={id} id={id} city={city} country={country} />
      ))}
    </ul>
  );
};

export default React.memo(LocationsList);
