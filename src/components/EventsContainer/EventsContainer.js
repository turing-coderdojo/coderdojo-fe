import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import requests from '../../utils/requests/requests';
import EventCard from '../EventCard/EventCard';

export function EventsContainer(props) {
  const { match, isLoading } = props;
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [recentEvents, setRecentEvents] = useState([]);
  const [venue, setVenue] = useState({});
  
  const getAllData = async (venueId) => {
    const upcoming = await requests.getUpcomingEvents({ venueId });
    const recent = await requests.getRecentEvents({ venueId });
    const currentVenue = await requests.getVenueDetails({ venueId });
    setUpcomingEvents(upcoming.futureEvents);
    setRecentEvents(recent.pastEvents);
    setVenue(currentVenue.allVenues[0]);
  };

  useEffect(() => {
    getAllData(parseInt(match.params.id, 10));
  }, [match]);

  const generateEvents = events => events.map(event => <EventCard key={event.id} event={event} />);

  const venueDetails = () => {
    const { 
      city, street1, street2, zip, state
    } = venue.addresses[0];
    const venueAddress1 = street1;
    const venueAddress2 = street2 || '';
    const venueAddress3 = `${city}, ${state} ${zip}`;

    return (
      <section className="venue-details">
        <p>{venue.notes}</p>
        <h4>Address:</h4>
        <p>{venueAddress1}</p>
        <p>{venueAddress2}</p>
        <p>{venueAddress3}</p>
      </section>
    );
  };

  return (
    <section className="EventsContainer">
      <div className="venue-header">
        <h2>{venue.name}</h2>
        { isLoading && <p>Loading events...</p> }
      </div>
      <div className="details-container">
        {venue.name && venueDetails()}
        <section className="events-container">
          <h3>Upcoming Events:</h3>
          {upcomingEvents.length > 0 && generateEvents(upcomingEvents)}
          <h3>Recent Events:</h3>
          {recentEvents.length > 0 && generateEvents(recentEvents)}
        </section>
      </div>
    </section>
  );
}

export const mapStateToProps = state => ({
  isLoading: state.isFetching
});

export default connect(mapStateToProps)(EventsContainer);

EventsContainer.propTypes = {
  match: PropTypes.object,
  isLoading: PropTypes.bool
};

EventsContainer.defaultProps = {
  match: {},
  isLoading: false
};
