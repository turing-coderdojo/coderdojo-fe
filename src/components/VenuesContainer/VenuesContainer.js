import React from 'react';
import { connect } from 'react-redux';
import VenueSearchBar from '../VenueSearchBar/VenueSearchBar';

function VenuesContainer({ venues }) {
  const generatedVenues = () => venues
    .map(venue => (
      <article>
        <h3>
          CARD 
          {venue.name}
          {venue.address}
        </h3>
      </article> 
    ));
  
  return (
    <section>
      <VenueSearchBar />
      { generatedVenues() }
    </section>
  );
}

const mapStateToProps = state => ({
  venues: [
    { name: '1', address: '1234' },
    { name: '1', address: '1234' },
    { name: '1', address: '1234' }
  ]
});

export default connect(mapStateToProps)(VenuesContainer);
