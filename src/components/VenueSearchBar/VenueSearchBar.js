import React from 'react';
import { connect } from 'react-redux';

function VenueSearchBar() {
  let cityInput;
  

  function handleSubmit(e) {
    e.preventDefault();

    console.log(cityInput)
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
          }} />
      </label>
      <button type="submit" className="city-search-btn">Find a Dojo</button>
    </form>
  );
}

// export const mapDispatchToProps = dispatch => ({
//   addSearchResults = results => dispatch()
// });

export default VenueSearchBar;
