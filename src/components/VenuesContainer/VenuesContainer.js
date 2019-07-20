import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import VenueSearchBar from '../VenueSearchBar/VenueSearchBar';

export function VenuesContainer({ venues, isLoading, error }) {
  const generatedVenues = () => venues
    .map(venue => (
      <article className="venue-card" key={venue.id}>
        <h3>
          {venue.name}
        </h3>
        <p>{venue.notes}</p>
      </article> 
    ));
  
  return (
    <section className="VenuesContainer">
      <article className="search-bar-container">
        <VenueSearchBar location="venues" />
      </article>
      <article className="venues-container">
        { isLoading && <h3>Loading dojos...</h3>}
        { error && <h4>{error}</h4>}
        { generatedVenues() }
      </article>
    </section>
  );
}

export const mapStateToProps = state => ({
  venues: state.searchResults,
  isLoading: state.isFetching,
  error: state.error
});

VenuesContainer.propTypes = {
  venues: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.string
};

VenuesContainer.defaultProps = {
  venues: [],
  isLoading: false,
  error: ''
};

export default connect(mapStateToProps)(VenuesContainer);
