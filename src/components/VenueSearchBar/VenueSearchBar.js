import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';

export function VenueSearchBar(props) {
  let cityInput;
  
  function handleSubmit(e) {
    e.preventDefault();
    if (cityInput) {
      props.setSearchResults(cityInput);
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
