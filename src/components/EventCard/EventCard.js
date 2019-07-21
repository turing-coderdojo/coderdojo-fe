import React from 'react';
import PropTypes from 'prop-types';

function EventCard({ event }) {
  const { 
    name, notes, startTime, endTime 
  } = event;
  const startDate = new Date(startTime);
  const endDate = new Date(endTime);
  const timeSetting = { hour: 'numeric', hour12: true };

  return (
    <article className="EventCard">
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
    </article>
  );
}

export default EventCard;

EventCard.propTypes = {
  event: PropTypes.object
};

EventCard.defaultProps = {
  event: {}
};
