import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import requests from '../../utils/requests/requests';

function EventForm({ 
  venueId, toggleView, event, updateAdminDash 
}) {
  const [eventDetails, setEventDetails] = useState({});
  const [startEndDate, setStartEndDate] = useState({});
  const [invalidField, setInvalidField] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setEventDetails({ ...eventDetails, [name]: value });
  };

  const handleDateChange = (date, isEndTime) => {
    const startTime = new Date(date).toUTCString();
    const endTime = new Date(date).toUTCString();
    if (isEndTime) {
      setEventDetails({ ...eventDetails, endTime });
      setStartEndDate({ ...startEndDate, end: date });
    } else {
      setEventDetails({ ...eventDetails, startTime });
      setStartEndDate({ ...startEndDate, start: date });
    }
  };

  const preFillInputs = () => {
    if (event) {
      const { 
        startTime, endTime, name, notes, id
      } = event;
      const start = new Date(startTime);
      const end = new Date(endTime);
      setStartEndDate({ start, end });
      setEventDetails({ 
        name, notes, id, startTime, endTime
      });
    }
  };

  useEffect(() => {
    preFillInputs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setInvalidField('');
    if (!eventDetails.name || !eventDetails.startTime || !eventDetails.endTime) {
      setInvalidField('Please fill out required fields');
    } else {
      const newEvent = { ...eventDetails, venueId };
      let result;
      if (event) {
        result = await requests.editEvent(newEvent);
      } else result = await requests.createNewEvent(newEvent);
      if (result) {
        toggleView(false);
        updateAdminDash();
      }
    }
  };

  return (
    <div className="EventForm">
      <form onSubmit={handleSubmit}>
        <button type="button" className="cancel-event-btn" onClick={() => toggleView(false)}>&times;</button>
        {event ? <h2>Edit Event:</h2> : <h2>Create New Event:</h2>}
        <label htmlFor="event-name">
          Event Name:
          <input
            id="event-name"
            type="text"
            name="name"
            value={eventDetails.name || ''}
            onChange={handleChange}
          />
        </label>
        <DatePicker
          selected={startEndDate.start}
          onChange={date => handleDateChange(date, false)}
          minDate={new Date()}
          showTimeSelect
          dateFormat="MMMM d, yyyy h:mm aa"
          placeholderText="Starts"
          className="event-range"
        />
        <DatePicker
          selected={startEndDate.end}
          onChange={date => handleDateChange(date, true)}
          minDate={new Date()}
          showTimeSelect
          dateFormat="MMMM d, yyyy h:mm aa"
          placeholderText="Ends"
          className="event-range"
        />
        <label htmlFor="event-notes">
          Notes(Optional):
          <input
            id="event-notes"
            type="text"
            value={eventDetails.notes || ''}
            name="notes"
            onChange={handleChange}
          />
        </label>
        {invalidField && <p className="event-form-error">{invalidField}</p>}
        <button type="submit" className="create-event-btn" onClick={handleSubmit}>{event ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
}

EventForm.propTypes = {
  venueId: PropTypes.number,
  toggleView: PropTypes.func,
  updateAdminDash: PropTypes.func,
  event: PropTypes.object
};

EventForm.defaultProps = {
  venueId: 0,
  toggleView: () => {},
  updateAdminDash: () => {},
  event: {}
};


export default EventForm;
