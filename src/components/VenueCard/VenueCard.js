import React from 'react';
import { ReactComponent as Logo } from '../../images/yin-yang-logo.svg';
import { Link } from 'react-router-dom';

function VenueCard({ venue }) {
  const { 
    id, name, notes, addresses 
  } = venue;

  const generateAdresses = addresses.map((address) => {
    const { 
      city, street1, street2, zip, state, id: addressId
    } = address;
    const combined = `${street1}, ${street2 || ''} ${city}, ${state} ${zip}`;
    return <p key={addressId}>{combined}</p>;
  });

  const linkToEvent = {
    pathname: `/venues/${id}/events`,
    venue
  };

  return (
    <article className="venue-card" key={id}>
      <Logo className="dojo-logo" />
      <div className="info-container">
        <h3>
          {name}
        </h3>
        {generateAdresses}
      </div>
      <Link to={linkToEvent}>
        SHOW EVENTS
      </Link>
      
    </article> 
  );
}

export default VenueCard;
