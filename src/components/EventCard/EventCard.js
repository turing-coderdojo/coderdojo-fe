import React, { useState } from 'react';
import PropTypes from 'prop-types';
import EventForm from '../EventForm/EventForm';
import requests from '../../utils/requests/requests';

function EventCard({ event, editable, updateAdminDash }) {
  const { 
    name, notes, startTime, endTime, venueId, id
  } = event;
  const startDate = new Date(startTime);
  const endDate = new Date(endTime);
  const timeSetting = { hour: 'numeric', hour12: true };
  const [editEvent, setEditEvent] = useState(false);

  const showEventForm = (bool) => {
    setEditEvent(bool);
  };

  const cancelEvent = async () => {
    if (window.confirm('Please confirm event cancellation.')) {
      const response = await requests.cancelEvent({ id });
      if (response) updateAdminDash();
    }
  };

  const editButtons = (
    <div className="event-edit-btns">
      <button className="edit" type="button" onClick={() => showEventForm(true)}>Edit</button>
      <button className="cancel" type="button" onClick={cancelEvent}>Cancel</button>
    </div>
  );

  return (
    <article className="EventCard">
      {editable && editButtons}
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
      {editEvent && <EventForm event={event} venueId={venueId} toggleView={showEventForm} updateAdminDash={updateAdminDash} /> }
    </article>
  );
}

export default EventCard;

EventCard.propTypes = {
  event: PropTypes.object,
  editable: PropTypes.bool,
  updateAdminDash: PropTypes.func 
};

EventCard.defaultProps = {
  event: {},
  editable: false,
  updateAdminDash: () => {}
};
