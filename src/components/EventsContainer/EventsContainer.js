import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import requests from '../../utils/requests/requests';

export function EventsContainer(props) {
  const { params } = props.match;
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [recentEvents, setRecentEvents] = useState([]);
  const [venue, setVenue] = useState({});
  
  const getEvents = async (venueId) => {
    const upcoming = await requests.getUpcomingEvents({ venueId });
    const recent = await requests.getRecentEvents({ venueId });
    setUpcomingEvents(upcoming.futureEvents);
    setRecentEvents(recent.pastEvents);
  };

  useEffect(() => {
    getEvents(parseInt(params.id, 10));
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

  if (!upcomingEvents.length || !recentEvents.length) return <div />;

  return (
    <section className="EventsContainer">
      <div className="venue-name-header">
      </div>
      <div className="venue-container">
        <section className="events-container">
          <h3>Upcoming Events:</h3>
          {generateEvents(upcomingEvents)}
          {generateEvents(recentEvents)}
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
