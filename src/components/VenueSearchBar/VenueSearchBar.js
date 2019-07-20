import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import requests from '../../utils/requests/requests';

export function VenueSearchBar(props) {
  let cityInput;
  
  async function handleSubmit(e) {
    e.preventDefault();
    const venues = await requests.getAllVenues();
    if (venues) {
      props.setSearchResults(venues.allVenues);
    }
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
          onChange={(e) => {
            cityInput = e.target.value;
          }} 
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
