import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

function EventForm(props) {
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
      setEventDetails({ ...eventDetails, end_time: endTime });
      setStartEndDate({ ...startEndDate, end: date });
    } else {
      setEventDetails({ ...eventDetails, start_time: startTime });
      setStartEndDate({ ...startEndDate, start: date });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInvalidField('');
    if (!eventDetails.name || !eventDetails.start_time || !eventDetails.end_time) {
      setInvalidField('Please fill out required fields');
    } else {
      console.log('hi')
    }
  };

  return (
    <div className="EventForm">
      <form onSubmit={handleSubmit}>
        <h2>Create New Event:</h2>
        <label htmlFor="event-name">
          Event Name:
          <input
            id="event-name"
            type="text"
            name="name"
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
        />
        <DatePicker
          selected={startEndDate.end}
          onChange={date => handleDateChange(date, true)}
          minDate={new Date()}
          showTimeSelect
          dateFormat="MMMM d, yyyy h:mm aa"
          placeholderText="Ends"
        />
        <label htmlFor="event-notes">
          Notes(Optional):
          <textarea
            id="event-notes"
            type="text"
            name="notes"
            onChange={handleChange}
          />
        </label>
        {invalidField && <p className="error">{invalidField}</p>}
        <button type="submit" className="create-event-btn" onClick={handleSubmit}>Create</button>
      </form>
    </div>
  );
}

export default EventForm;
