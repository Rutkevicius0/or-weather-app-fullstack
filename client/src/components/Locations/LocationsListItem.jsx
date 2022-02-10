import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import '../../scss/locationsList.scss';
import LocationContext from '../../store/location-context';
import { postRequest } from '../../utilities/requests';

const LocationsListItem = (props) => {
  const ctx = useContext(LocationContext);
  return (
    <li
      className="list-group-item p-3 mt-2 rounded"
      onClick={() =>
        postRequest('searched-locations/new', { keyword: ctx.searchInputValue })
      }
    >
      <Link
        className="router-link"
        to={`/${props.country}/${props.city}/${props.id}`}
      >
        {`${props.city}, ${props.country}`}
      </Link>
    </li>
  );
};
export default LocationsListItem;
