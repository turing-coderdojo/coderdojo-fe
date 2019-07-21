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

  const generateEvents = () => events.map((event) => {
    const { name } = event;
    return (
      <article>
        <h3>{name}</h3>
      </article>
    );
  });

  if (params.id) {
    // const { 
    //   city, street1, street2, zip, state, id
    // } = venue;
    // address = `${street1}, ${street2 || ''} ${city}, ${state} ${zip}`;
    getEvents(parseInt(params.id, 10));
  }

  return (
    <section className="EventsContainer">
      <h2>EVENTSSSS</h2>
      <div>
        <section className="venue-details">
          {/* {`Adress: ${address}`} */}
        </section>
        <section className="events-container">
          {generateEvents()}
        </section>
      </div>

    </section>
  );
}

export default EventsContainer;
