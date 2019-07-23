import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import requests from '../../utils/requests/requests';


export function StudentDash(props) {
  const [pastEvents, setAttendedEvents] = useState({});
  const [eventCode, setEventCode] = useState({});
  const [success, setSuccess] = useState(false);
  const { user, error, isFetching } = props;

  const getEventsAttended = async () => {
    const attendedEvents = await requests.getEventsAttended();
    setAttendedEvents(attendedEvents.me.eventsAttended);
  };

  useEffect(() => {
    getEventsAttended(user.id);
  }, [user.id]);

  const generateEvents = events => events.map(event => <p>{event.name}</p>);

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
            className="EventCode"
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
      <div className="StudentDashHeader">
        <h2>
          Welcome, {user.name}
        </h2>
      </div>
      <h3>Current Event</h3>
      <div className="EventWrapper">
        {assignForm()}
      </div>
      {pastEvents.length > 0 && generateEvents(pastEvents)}
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
