import React, { Component } from 'react'

export class ContactForm extends Component {
  state = {}

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }
  
  render() {
    return (
      <form
        className="ContactForm"
        onSubmit={this.handleSubmit}
      >
        <h2>Guardian Details</h2>
        <label htmlFor="email-input">
          Email:
          <input
            id="email-input"
            type="email"
            name="email"
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="phoneNumber-input">
          Phone Number:
          <input
            id="phoneNumber-input"
            type="text"
            name="phoneNumber"
            onChange={this.handleChange}
          />
        </label>
  
        <div className="address-section">
          <label htmlFor="street1-input">
            Street 1:
            <input
              id="street1-input"
              type="text"
              name="street1"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="street2-input">
            Street 2:
            <input
              id="street2-input"
              type="text"
              name="street2"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="city-input">
            City:
            <input
              id="city-input"
              type="text"
              name="city"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="state-input">
            State:
            <input
              id="state-input"
              type="text"
              name="state"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="zip-input">
            Zip Code:
            <input
              id="zip-input"
              type="text"
              name="zip"
              onChange={this.handleChange}
            />
          </label>
        </div>
        <button type="submit" className="signin-btn">Submit</button>
      </form>
    );
  }
}

export default ContactForm;
