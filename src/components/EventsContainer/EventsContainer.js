import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import requests from '../../utils/requests/requests';

export function EventsContainer(props) {
  const { params } = props.match;
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [recentEvents, setRecentEvents] = useState([]);
  const [venue, setVenue] = useState({});
  
  const getAllData = async (venueId) => {
    const upcoming = await requests.getUpcomingEvents({ venueId });
    const recent = await requests.getRecentEvents({ venueId });
    const currentVenue = await requests.getVenueDetails({ venueId });
    setUpcomingEvents(upcoming.futureEvents);
    setRecentEvents(recent.pastEvents);
    setVenue(currentVenue.allEvents[0].venue);
  };

  useEffect(() => {
    getAllData(parseInt(params.id, 10));
  }, [params.id]);

  const generateEvents = events => events.map((event) => {
    const { 
      name, notes, startTime, endTime, id 
    } = event;
    return (
      <article key={id}>
        <h3>{name}</h3>
        <p>
          Starts: 
          {startTime}
        </p>
        <p>
          Ends: 
          {endTime}
        </p>
        <p>{notes}</p>
      </article>
    );
  });

  const venueDetails = () => {
    const { 
      city, street1, street2, zip, state
    } = venue.addresses[0];
    const venueAdress = `${street1}, ${street2 || ''} ${city}, ${state} ${zip}`;
    return (
      <section className="venue-details">
        <p>{venue.notes}</p>
        <p>
          Address: 
          {venueAdress}
        </p>
      </section>
    );
  };

  return (
    <section className="EventsContainer">
      <div className="venue-header">
        <h2>{venue.name}</h2>
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
  isLoading: state.isFetching,
  error: state.error
});

export default connect(mapStateToProps)(EventsContainer);
