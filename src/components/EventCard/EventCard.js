import React, { useState } from 'react';
import PropTypes from 'prop-types';
import EventForm from '../EventForm/EventForm';

function EventCard({ event, editable }) {
  const { 
    name, notes, startTime, endTime, venueId
  } = event;
  const startDate = new Date(startTime);
  const endDate = new Date(endTime);
  const timeSetting = { hour: 'numeric', hour12: true };
  const [editEvent, setEditEvent] = useState(false);

  const showEventForm = (bool) => {
    setEditEvent(bool);
  };

  const cancelEvent = () => {
    
  };

  return (
    <article className="EventCard">
      {editable && <button type="button" onClick={cancelEvent}>Cancel Event</button>}
      <div className="details">
        <h3>{name}</h3>
        <div className="date-container">
          <p className="date">
            {startDate.toDateString()}
          </p>
          <p className="hours">
            {startDate.toLocaleString('en-US', timeSetting)} 
            - 
            {endDate.toLocaleString('en-US', timeSetting)}
          </p>
        </div>
      </div>        
      <p className="notes">{notes}</p>
      {editable && <button type="button" onClick={() => showEventForm(true)}>Edit Event</button>}
      {editEvent && <EventForm event={event} venueId={venueId} toggleView={showEventForm} /> }
    </article>
  );
}

export default EventCard;

EventCard.propTypes = {
  event: PropTypes.object,
  editable: PropTypes.bool  
};

EventCard.defaultProps = {
  event: {},
  editable: false
};
