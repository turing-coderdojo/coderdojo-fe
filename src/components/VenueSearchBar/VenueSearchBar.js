import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import requests from '../../utils/requests/requests';

export function VenueSearchBar(props) {
  const { location } = props;
  const [city, handleChange] = useState('');
  const [redirect, setRedirect] = useState(false);
  
  async function handleSubmit(e) {
    e.preventDefault();
    if (location === 'splash') setRedirect(true);
    const venues = await requests.getAllVenues();
    if (venues) {
      const searchResults = {
        city,
        venues: venues.allVenues
      };
      props.setSearchResults(searchResults);
    }
  }
  
  if (redirect) return <Redirect to="/venues" />;

  return (
    <form 
      className="VenueSearchBar"
      onSubmit={handleSubmit}
    >
      <h3>Find a Dojo to Attend</h3>
      <p>Learn technology in an informal, creative and social environment. Find a dojo near you.</p>
      <label htmlFor="city-input">
        <input 
          type="text" 
          id="city-input"
          onChange={e => handleChange(e.target.value)} 
        />
      </label>
      <button type="submit" className="city-search-btn">
        Find a Dojo
      </button>
    </form>
  );
}

export const mapDispatchToProps = dispatch => ({
  setSearchResults: results => dispatch(actions.setSearchResults(results))
});

export default connect(undefined, mapDispatchToProps)(VenueSearchBar);

VenueSearchBar.propTypes = {
  setSearchResults: PropTypes.func,
  location: PropTypes.string
};

VenueSearchBar.defaultProps = {
  setSearchResults: () => {},
  location: ''
};
