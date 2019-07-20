import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import VenueSearchBar from '../VenueSearchBar/VenueSearchBar';
import VenueCard from '../VenueCard/VenueCard';

export function VenuesContainer({
  searchResults, isLoading, error 
}) {  
  const generatedVenues = () => searchResults.venues
    .map(venue => <VenueCard venue={venue} />);
  
  return (
    <section className="VenuesContainer">
      <article className="search-bar-container">
        <VenueSearchBar location="venues" />
      </article>
      <article className="venues-container">
        <h3>{`Found ${searchResults.venues.length} venues in ${searchResults.city.toUpperCase()}`}</h3>
        { isLoading && <h3>Loading dojos...</h3>}
        { error && <h4>{error}</h4>}
        { generatedVenues() }
      </article>
    </section>
  );
}

export const mapStateToProps = state => ({
  searchResults: state.searchResults,
  isLoading: state.isFetching,
  error: state.error
});

VenuesContainer.propTypes = {
  searchResults: PropTypes.object,
  isLoading: PropTypes.bool,
  error: PropTypes.string
};

VenuesContainer.defaultProps = {
  searchResults: {},
  isLoading: false,
  error: ''
};

export default connect(mapStateToProps)(VenuesContainer);
