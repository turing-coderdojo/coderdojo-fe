import React from 'react';

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
      <label htmlFor="phone-number-input">
        Phone Number:
        <input
          id="phone-number-input"
          type="text"
          name="phone-number"
          onChange={eventHandler}
        />
      </label>
      <button type="submit" className="signin-btn">Submit</button>
    </form>
  );
}

export default GuardianDetailsForm;
