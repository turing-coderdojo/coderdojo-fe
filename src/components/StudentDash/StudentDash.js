import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import requests from '../../utils/requests/requests';
import EventCard from '../EventCard/EventCard';

export function StudentDash(props) {
  const { username } = props.user;
  const [pastEvents, setAttendedEvents] = useState({});
  const [eventCode, setEventCode] = useState({});
  const [success, setSuccess] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const { user, error, isFetching } = props;
 
  useEffect(() => {
    if (user.role === 0) {
      const getEventsAttended = async () => {
        const attendedEvents = await requests.getEventsAttended();
        
        if (attendedEvents.me) {
          setAttendedEvents(attendedEvents.me.eventsAttended);
        }
      };

      getEventsAttended();
    }
  }, [user.role]);

  useEffect(() => {
    if (user.role !== 0) {
      setRedirect(true);
    }
  }, [user]);

  if (redirect && user.role === 1) {
    return <Redirect to="/myfamily" />;
  } else if (redirect && user.role === 2) {
    return <Redirect to="/dashboard/admin" />;
  } else if (redirect) {
    return <Redirect to="/" />;
  }

  const generateEvents = events => events.map(event => <EventCard key={event.id} event={event} />);

  const submitAttendance = async (e) => {
    e.preventDefault();
    const results = await requests.logAttendance(eventCode);
    if (results) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  };

  const handleChange = (e) => {
    setEventCode({ eventCode: e.target.value });
  };

  const assignForm = () => {
    let generateForm;
    if (!success) {
      generateForm = (
        <form onSubmit={submitAttendance}>
          <input
            type="text"
            placeholder="Enter Event Code"
            className="eventCode"
            onChange={e => handleChange(e)}
          />
          <button type="submit">Submit</button>
          {error && <p>{error}</p>}
        </form>
      );
    } else {
      generateForm = <p>Your attendance has been successfully logged!</p>;
    }
    return generateForm;
  };

  return (
    <section className="StudentDashContainer">
      <div className="studentDashHeader">
        <h2>{`Welcome, ${username}!`}</h2>
      </div>
      <h3>Current Event</h3>
      <div className="eventWrapper">
        {isFetching ? 'Loading...' : null }
        {assignForm()}
      </div>
      <section className="pastEvents">
        {pastEvents.length > 0 && generateEvents(pastEvents)}
      </section>
    </section>
  );
}

export const mapStateToProps = ({ user, isFetching, error }) => ({
  user,
  isFetching,
  error
});

export default connect(mapStateToProps, null)(StudentDash);

StudentDash.propTypes = {
  user: PropTypes.object,
  isFetching: PropTypes.bool,
  error: PropTypes.string
};

StudentDash.defaultProps = {
  user: {},
  isFetching: false,
  error: ''
};
