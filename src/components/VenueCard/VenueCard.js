import React from 'react';
import { ReactComponent as Logo } from '../../images/yin-yang-logo.svg';

function VenueCard({ venue }) {
  const { 
    id, name, notes, addresses 
  } = venue;

  const generateAdresses = addresses.map((address) => {
    const { 
      city, street1, street2, zip, state, id: addressId
    } = address;
    const combined = `${street1} ${street2 || ''}, ${city} ${state}, ${zip}`;
    return <p key={addressId}>{combined}</p>;
  });

  return (
    <article className="venue-card" key={id}>
      <Logo className="dojo-logo" />
      <div>
        <h3>
          {name}
        </h3>
        {generateAdresses}
      </div>
    </article> 
  );
}

export default VenueCard;
