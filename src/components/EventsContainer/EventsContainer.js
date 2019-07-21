import React, { useState } from 'react';
import { connect } from 'react-redux';
import requests from '../../utils/requests/requests';

function EventsContainer(props) {
  const { params } = props.match;
  const [events, setEvents] = useState([]);

  const getEvents = async (venueId) => {
    const result = await requests.getEventsByVenue({ venueId });
    setEvents(result.allEvents);
  };
  getEvents(parseInt(params.id, 10));

  const generateEvents = () => events.map((event) => {
    const { name } = event;
    return (
      <article>
        <h3>{name}</h3>
      </article>
    );
  });


  const generateVenueInfo = (event = []) => {
    const { 
      city, street1, street2, zip, state
    } = event.venue.addresses[0];
    const address = `${street1}, ${street2 || ''} ${city}, ${state} ${zip}`;
    return (
      <section>
        <p>
          Address: 
          {address}
        </p>
      </section>
    );
  };

  if (!events.length) return <div />;

  return (
    <section className="EventsContainer">
      <h2>{events[0].venue.name}</h2>
      <div>
        {generateVenueInfo(events[0])}
        <section className="events-container">
          {generateEvents()}
        </section>
      </div>
    </section>
  );
}

export default EventsContainer;
