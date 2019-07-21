import React from 'react';
import PropTypes from 'prop-types';

function EventCard({ event }) {
  const { 
    name, notes, startTime, endTime, id 
  } = event;
  const startDate = new Date(startTime);
  const endDate = new Date(endTime);
  const timeSetting = { hour: 'numeric', hour12: true };

  return (
    <article>
      <h3>{name}</h3>
      <p>
        When:
        {startDate.toDateString()}
      </p>
      <p>
        {startDate.toLocaleString('en-US', timeSetting)} 
        - 
        {endDate.toLocaleString('en-US', timeSetting)}
      </p>
      <p>{notes}</p>
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
