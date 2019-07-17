import React from 'react';
import { PropTypes } from 'prop-types';

function GuardianDetailsForm(props) {
  const { handleSubmit, handleChange } = props;

  const eventHandler = ({ target }) => {
    const { name, value } = target;
    handleChange(name, value);
  };

  return (
    <form
      className="GuardianDetailsForm"
      onSubmit={handleSubmit}
    >
      <h2>Guardian Details</h2>
      <label htmlFor="email-input">
        Email:
        <input
          id="email-input"
          type="email"
          name="email"
          onChange={eventHandler}
        />
      </label>
      <label htmlFor="phoneNumber-input">
        Phone Number:
        <input
          id="phoneNumber-input"
          type="text"
          name="phoneNumber"
          onChange={eventHandler}
        />
      </label>

      <div className="address-section">
        <label htmlFor="street1-input">
          Street 1:
          <input
            id="street1-input"
            type="text"
            name="street1"
            onChange={eventHandler}
          />
        </label>
        <label htmlFor="street2-input">
          Street 2:
          <input
            id="street2-input"
            type="text"
            name="street2"
            onChange={eventHandler}
          />
        </label>
        <label htmlFor="city-input">
          City:
          <input
            id="city-input"
            type="text"
            name="city"
            onChange={eventHandler}
          />
        </label>
        <label htmlFor="state-input">
          State:
          <input
            id="state-input"
            type="text"
            name="state"
            onChange={eventHandler}
          />
        </label>
        <label htmlFor="zip-input">
          Zip Code:
          <input
            id="zip-input"
            type="text"
            name="zip"
            onChange={eventHandler}
          />
        </label>
      </div>
      <button type="submit" className="signin-btn">Submit</button>
    </form>
  );
}

export default GuardianDetailsForm;

GuardianDetailsForm.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func
}

GuardianDetailsForm.defaultProps = {
  handleChange: () => {},
  handleSubmit: () => {}
};
