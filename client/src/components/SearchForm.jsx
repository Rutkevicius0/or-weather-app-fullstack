import React, { useContext, useState } from 'react';
import LocationContext from '../store/location-context';
import '../scss/base.scss';

export default function SearchForm(props) {
  const [isValid, setIsValid] = useState({});
  const ctx = useContext(LocationContext);
  const searchHandler = (e) => {
    ctx.searchInputValueHandler(e.target.value);
    if (ctx.searchInputValue.trim().length > 30) {
      setIsValid({
        status: false,
        description: 'Search value too long (up to 30 letters)',
      });
      return;
    } else {
      setIsValid(true);
    }
  };
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form
      onSubmit={submitHandler}
      className="search-form  rounded
    p-3 needs-validation"
    >
      <div className="mb-3">
        <label htmlFor="location" className="form-label">
          Location
        </label>
        <input
          className="form-control"
          type="text"
          id="location"
          placeholder="Enter city"
          onChange={searchHandler}
        />
        {!isValid.status && (
          <p className="error-message">{isValid.description}</p>
        )}
      </div>
    </form>
  );
}
