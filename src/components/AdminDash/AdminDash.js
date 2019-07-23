import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import requests from '../../utils/requests/requests';
import EventCard from '../EventCard/EventCard';

export function AdminDash(props) {
  const [venuesAndEvents, setVenuesAndEvents] = useState({});
  const { user } = props;
  
  const getEventsAndVenues = async () => {
    const result = await requests.getAdminDetails();
    const { venues } = result.me;
    setVenuesAndEvents(venues[0]);
  };

  const generateEventCards = () => venuesAndEvents
    .events.map(event => <EventCard event={event} key={event.id} />);

  const generateVenueDetails = () => {
    const { name, notes, email, webUrl } = venuesAndEvents;
    return (
      <section className="venue-section">
        <h3>{name}</h3>
        <p>{webUrl}</p>
        <p>{email}</p>
        <p>{notes}</p>
      </section>
    );
  };
  
  useEffect(() => {
    getEventsAndVenues();
  }, []);

  return (
    <section className="AdminDash">
      <div className="admin-header">
        <h2>
          Admin: 
          {user.username}
        </h2>
      </div>
      <div className="details-container">
        <section className="venue-section">
          {venuesAndEvents.events && generateVenueDetails()}
        </section>
        <section className="events-section">
          <div className="events-header">
            <p>Your Upcoming Events:</p>
            <button type="button">+ Create New Event</button>
          </div>
          {venuesAndEvents.events && generateEventCards()}
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