import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import requests from '../../utils/requests/requests';
import EventCard from '../EventCard/EventCard';

export function AdminDash(props) {
  const [adminData, setAdminData] = useState({});
  const { user } = props;
  
  const getEventsAndVenues = async () => {
    const result = await requests.getAdminDetails();
    const { me } = result;
    setAdminData(me);
  };
  
  useEffect(() => {
    getEventsAndVenues();
  }, []);

  const generateAdminDetails = () => {
    const {
      email, phoneNumber, addresses
    } = adminData;
    const { 
      city, street1, street2, zip, state
    } = addresses[0];
    const address = `${street1}, ${street2 || ''} ${city}, ${state} ${zip}`;
    return (
      <div className="admin">
        <h4>My Contact Info:</h4>
        <p>
          Phone: 
          {phoneNumber}
        </p>
        <p>
          Email: 
          {email}
        </p>
        <p>
          Address:
          {address}
        </p>
      </div>
    );
  };

  const generateEventCards = () => adminData.venues[0]
    .events.map(event => <EventCard event={event} key={event.id} />);

  const generateVenueDetails = () => {
    const { 
      name, notes, email, webUrl 
    } = adminData.venues[0];
    return (
      <div className="venue">
        <p>{notes}</p>
        <h3>{name}</h3>
        <p>{webUrl}</p>
        <p>{email}</p>
      </div>
    );
  };

  return (
    <section className="AdminDash">
      <div className="admin-header">
        <h2>
          Admin:&nbsp;
          {adminData.username}
        </h2>
      </div>
      <div className="details-container">
        <section className="venue-section">
          {adminData.venues && generateVenueDetails()}
          {adminData.venues && generateAdminDetails()}
        </section>
        <section className="events-section">
          <div className="events-header">
            <p>Your Upcoming Events:</p>
            <button type="button">+ Create New Event</button>
          </div>
          {adminData.venues && generateEventCards()}
        </section>
      </div>
    </section>
  );
}

const mapStateToProps = state => ({
  isLoading: state.isFetching,
  error: state.error,
  user: state.user
});

export default connect(mapStateToProps)(AdminDash);

AdminDash.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  user: PropTypes.object
};

AdminDash.defaultProps = {
  isLoading: false,
  error: '',
  user: {}
};