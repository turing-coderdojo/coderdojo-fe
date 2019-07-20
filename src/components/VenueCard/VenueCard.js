import React from 'react';

function VenueCard({ venue }) {
  const { 
    id, name, notes, addresses 
  } = venue;
  return (
    <article className="venue-card" key={id}>
      <h3>
        {name}
      </h3>
      <p>{notes}</p>
    </article> 
  );
}

export default VenueCard;
