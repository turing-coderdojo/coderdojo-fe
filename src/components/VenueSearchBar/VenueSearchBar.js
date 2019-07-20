import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import { Redirect } from 'react-router-dom';
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
      props.setSearchResults(venues.allVenues);
    }
  }
  
  if (redirect) {
    return (
      <Redirect to={{
        pathname: '/venues',
        city
      }}
      />
    );
  }

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
  setSearchResults: PropTypes.func
};

VenueSearchBar.defaultProps = {
  setSearchResults: () => {}
};
