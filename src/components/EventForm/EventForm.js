import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

function EventForm() {
  const [eventDetails, setEventDetails] = useState({});

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setEventDetails({ ...eventDetails, [name]: value });
  };

  return (
    <div className="EventForm">
      <form>
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
        
        <label htmlFor="event-notes">
          Notes(Optional):
          <textarea
            id="event-notes"
            type="text"
            name="notes"
            onChange={handleChange}
          />
        </label>
        <button type="button" className="create-event-btn" name="student" onClick={() => {}}>Create</button>
      </form>
    </div>
  );
}

export default EventForm;
