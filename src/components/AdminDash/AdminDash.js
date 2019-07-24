import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import requests from '../../utils/requests/requests';
import EventCard from '../EventCard/EventCard';
import EventForm from '../EventForm/EventForm';

export function AdminDash(props) {
  const [adminData, setAdminData] = useState({});
  const [eventFormVisible, showEventForm] = useState(false);
  const [currentEvent, setCurrentEvent] = useState({});
  const { error, isLoading } = props;

  const toggleEventForm = (bool) => {
    showEventForm(bool);
  };

  const sortEvents = arr => arr.sort((a, b) => new Date(a.startTime) - new Date(b.endTime));

  const getEventsAndVenues = async () => {
    const result = await requests.getAdminDetails();
    const { me } = await result;
    setAdminData(me);
  };

  const setUpCurrentEvent = (event) => {
    setCurrentEvent(event);
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
          Phone:&nbsp; 
          <span>
            {phoneNumber}
          </span>
        </p>
        <p>
          Email:&nbsp; 
          <span>
            {email}
          </span>
        </p>
        <p>
          Address:&nbsp;
          <span>
            {address}
          </span>
        </p>
      </div>
    );
  };

  const generateEventCards = () => {
    const today = new Date();
    const sorted = sortEvents(adminData.venues[0].events);
    const pastEvents = [];
    const futureEvents = [];
    sorted.forEach((event) => {
      if (new Date(event.startTime) > today) {
        futureEvents.push(event);
      } else if (today.toDateString() === new Date(event.startTime).toDateString() 
      && !currentEvent.name) {
        setUpCurrentEvent(event);
      } else pastEvents.push(event);
    });

    return (
      <div>
        <div className="events-header">
          <p>Your Upcoming Events:</p>
          <button type="button" onClick={() => toggleEventForm(true)}>+ Create New Event</button>
        </div>
        <section className="future-events">
          {futureEvents.map(event => <EventCard event={event} key={event.id} />)}
        </section>
        <div className="events-header">
          <p>Your Past Events:</p>
        </div>
        <section className="past-events">
          {pastEvents.reverse().map(event => <EventCard event={event} key={event.id} />)}
        </section>
      </div>
    );
  };
  

  const generateVenueDetails = () => {
    const { 
      name, email, webUrl 
    } = adminData.venues[0];
    return (
      <div className="venue">
        <h3>{name}</h3>
        <a href={webUrl}>Home Page</a>
        <p>
          Email: &nbsp;
          <span>{email}</span>
        </p>
      </div>
    );
  };

  return (
    <section className="AdminDash">
      {eventFormVisible && <EventForm venueId={1} toggleView={toggleEventForm} />}
      <div className="admin-header">
        <h2>
          Admin:&nbsp;&nbsp;
          {adminData.username}
          {isLoading && 'Loading your information...'}
        </h2>
      </div>
      {error && <p className="error">{error}</p>}
      <div className="details-container">
        <section className="details-section">
          {adminData.venues && generateVenueDetails()}
          {adminData.venues && generateAdminDetails()}
        </section>
        <section className="events-section">
          {adminData.venues && generateEventCards()}
        </section>
      </div>
    </section>
  );
}

const mapStateToProps = state => ({
  isLoading: state.isFetching,
  error: state.error
});

export default connect(mapStateToProps)(AdminDash);

AdminDash.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.string
};

AdminDash.defaultProps = {
  isLoading: false,
  error: ''
};
