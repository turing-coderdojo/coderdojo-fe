import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import requests from '../../utils/requests/requests';
import EventCard from '../EventCard/EventCard';
import EventForm from '../EventForm/EventForm';


export function AdminDash(props) {
  const [adminData, setAdminData] = useState({});
  const [eventFormVisible, showEventForm] = useState(false);
  const [currentEvent, setCurrentEvent] = useState({});
  const { error, isLoading, user } = props;
  const today = new Date();

  const toggleEventForm = (bool) => {
    showEventForm(bool);
  };

  const sortEvents = arr => arr.sort((a, b) => new Date(a.startTime) - new Date(b.endTime));

  const getEventsAndVenues = async () => {
    const result = await requests.getAdminDetails();
    const { me } = await result;
    if (result.me.venues.length) {
      const currEvent = result.me.venues[0].events
        .find(event => today.toDateString() === new Date(event.startTime).toDateString());
      const attendance = await requests.getEventAttendance({ eventId: 1 });
      setCurrentEvent({ ...currEvent, ...attendance });
    }
    setAdminData(me);
  };
  
  useEffect(() => {
    getEventsAndVenues();
  }, []);

  if (user.role !== 2) {
    let route;
    if (user.role === 0) {
      route = '/dashboard/student';
    } else if (user.role === 1) {
      route = '/myfamily';
    } else route = '/';
    return <Redirect to={route} />;
  }
  
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
    const sorted = sortEvents(adminData.venues[0].events);
    const pastEvents = [];
    const futureEvents = [];
    sorted.forEach((event) => {
      if (new Date(event.startTime) > today) {
        futureEvents.push(event);
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

  const generateStudentCards = students => students
    .map((student) => {
      const { user } = student;
      return (
        <article>
          <h4>
            {user.name}
            :
            {user.username}
          </h4>
          <div className="guardian-details">
            <h4>Guardian Details:</h4>
            <p>
              {user.guardianId.name}
              :
              {user.guardianId.username}
            </p>
            <p>
              Phone:
              {user.guardianId.phoneNumber}
            </p>
            <p>
              Email:
              {user.guardianId.email}
            </p>
          </div>
        </article>
      );
    });
  
  const generateCurrentEvent = () => {
    const timeSetting = { hour: 'numeric', hour12: true };
    const { 
      name, notes, startTime, endTime, attendance, eventCode
    } = currentEvent;
    const readableStart = new Date(startTime).toLocaleString('en-US', timeSetting);
    const readableEnd = new Date(endTime).toLocaleString('en-US', timeSetting);
    return (
      <div>
        <h3>{name}</h3>
        <p>
          {readableStart} 
          - 
          {readableEnd}
        </p>
        <p>{notes}</p>
        <h4>{eventCode}</h4>
        <section>
          {generateStudentCards(attendance)}
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
      {eventFormVisible && <EventForm venueId={adminData.venues[0].id} toggleView={toggleEventForm} />}
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
          {currentEvent.id && generateCurrentEvent()}
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
