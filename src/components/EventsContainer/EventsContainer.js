import React, { useState } from 'react';
import requests from '../../utils/requests/requests';

function EventsContainer(props) {
  const { venue } = props.location;
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

  if (venue) {
    getEvents(venue.id);
  }

  return (
    <section className="EventsContainer">
      <h1>EVENTSSSS</h1>
      <div>
        {generateEvents()}
      </div>

    </section>
  );
}

export default EventsContainer;


// id: 2
// name: "Test Event 2"

// city:
// "Denver"
// id:
// 4
// state:
// "CO"
// street1:
// "567 Main St."
// street2:
// "Apt 678"
// zip:
// "80128"
// id:
// 1
// name:
// "Venue One"
// notes:
// "Here be Dragons"