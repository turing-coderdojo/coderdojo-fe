import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/yin-yang-logo.svg';

function VenueCard({ venue }) {
  const { 
    id, name, addresses 
  } = venue;

  const generateAdresses = addresses.map((address) => {
    const { 
      city, street1, street2, zip, state, id: addressId
    } = address;
    const combined = `${street1}, ${street2 || ''} ${city}, ${state} ${zip}`;
    return <p key={addressId}>{combined}</p>;
  });

  return (
    <article className="venue-card" key={id}>
      <Logo className="dojo-logo" />
      <div className="info-container">
        <h3>
          {name}
        </h3>
        {generateAdresses}
      </div>
      <Link to={`/venues/${id}/events`}>
        SHOW EVENTS
      </Link>
      
    </article> 
  );
}

export default VenueCard;