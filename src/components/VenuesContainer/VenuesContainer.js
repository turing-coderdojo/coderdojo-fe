import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import VenueSearchBar from '../VenueSearchBar/VenueSearchBar';
import VenueCard from '../VenueCard/VenueCard';

export function VenuesContainer({
  searchResults, isLoading, error 
}) {  
  const generatedVenues = () => searchResults.venues
    .map(venue => <VenueCard venue={venue} key={venue.id} />);
  
  const resultLength = searchResults.venues.length;
  
  return (
    <section className="VenuesContainer">
      <article className="search-bar-container">
        <VenueSearchBar location="venues" />
      </article>
      <article className="venues-container">
        {searchResults.city.length > 0 && ''}
        <h3 className="container-message">
          {searchResults.city.length > 0 
            ? `Found ${resultLength} dojos in ${searchResults.city.toUpperCase()}`
            : 'Start by searching in your own city'
          }
        </h3>
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

export default connect(mapStateToProps)(VenuesContainer);

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
