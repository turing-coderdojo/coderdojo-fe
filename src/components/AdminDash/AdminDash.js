import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import requests from '../../utils/requests/requests';
import EventCard from '../EventCard/EventCard';
import EventForm from '../EventForm/EventForm';
import StudentAttendanceCard from '../StudentAttendanceCard/StudentAttendanceCard';

export function AdminDash(props) {
  const [adminData, setAdminData] = useState({});
  const [eventFormVisible, showEventForm] = useState(false);
  const [currentVenue, setCurrentVenue] = useState({});
  const [currentEvent, setCurrentEvent] = useState({});
  const { error, isLoading, user } = props;
  const today = new Date();

  const toggleEventForm = (bool) => {
    showEventForm(bool);
  };

  const sortEvents = arr => arr.sort((a, b) => new Date(b.startTime) - new Date(a.endTime));

  const getCurrentEvent = async (venue) => {
    const currEvent = venue.events
      .find(event => today.toDateString() === new Date(event.startTime).toDateString());
    const attendance = await requests.getEventAttendance({ eventId: 1 });
    setCurrentEvent({ ...currEvent, ...attendance });
  };

  const getEventsAndVenues = async () => {
    const result = await requests.getAdminDetails();
    const { me } = await result;
    if (result.me) {
      getCurrentEvent(result.me.venues[0]);
    }
    setAdminData(me);
    setCurrentVenue(me.venues[0]);
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
        <h3>My Contact Info:</h3>
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
    const sorted = sortEvents(currentVenue.events || []);
    const pastEvents = [];
    const futureEvents = [];
    sorted.forEach((event) => {
      if (new Date(event.startTime) > today) {
        futureEvents.push({ ...event, venueId: currentVenue.id || [] });
      } else pastEvents.push(event);
    });

    return (
      <div>
        <div className="events-header">
          <p>Your Upcoming Events:</p>
          <button type="button" onClick={() => toggleEventForm(true)}>+ Create New Event</button>
        </div>
        <section className="future-events">
          {futureEvents.reverse().map(event => <EventCard event={event} key={event.id} editable updateAdminDash={getEventsAndVenues} />)}
        </section>
        <div className="events-header">
          <p>Your Past Events:</p>
        </div>
        <section className="past-events">
          {pastEvents.slice(0, 3).map(event => <EventCard event={event} key={event.id} />)}
        </section>
      </div>
    );
  };

  const generateStudentCards = students => students
    .map(student => <StudentAttendanceCard key={student.user.id} student={student.user} />);
  
  const generateCurrentEvent = () => {
    const timeSetting = { hour: 'numeric', hour12: true };
    const { 
      name, notes, startTime, endTime, attendance, eventCode
    } = currentEvent;
    const readableStart = new Date(startTime).toLocaleString('en-US', timeSetting);
    const readableEnd = new Date(endTime).toLocaleString('en-US', timeSetting);
    return (
      <div className="current-event">
        <section className="current-event-details">
          <h3>{name}</h3>
          <p>
            {readableStart} 
            &nbsp; - &nbsp; 
            {readableEnd}
          </p>
          <h4>
            Event Code: &nbsp;&nbsp;
            {eventCode}
          </h4>
          <p>
            Notes: &nbsp;
            {notes}
          </p>
        </section>
        <section className="attendance-container">
          <h3>Attendance: </h3>
          {generateStudentCards(attendance)}
        </section>
      </div>
    );
  };

  const selectVenue = (venueId) => {
    const foundVenue = adminData.venues.find(venue => venue.id === venueId);
    setCurrentVenue(foundVenue);
  };

  const generateVenueDetails = () => {
    const venues = adminData.venues.map((venue) => {
      const { 
        name, email, webUrl 
      } = venue;
      return (
        <li className="venue" key={venue.id}>
          <button type="button" onClick={() => selectVenue(venue.id)}>Select</button>
          <h3>{name}</h3>
          <p>Website:</p>
          <a className="venue-site" href={webUrl}>{webUrl}</a>
          <p>
            Email: &nbsp;
            <span>{email}</span>
          </p>
        </li>
      );
    });
    return (
      <ul>
        {venues}
      </ul>
    );
  };

  return (
    <section className="AdminDash">
      {eventFormVisible && <EventForm updateAdminDash={getEventsAndVenues} venueId={currentVenue.id} toggleView={toggleEventForm} event={false} />}
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

export const mapStateToProps = state => ({
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
