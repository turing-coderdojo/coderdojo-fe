import React from 'react';
import { shallow } from 'enzyme';
import { ContactForm } from './ContactForm';

describe('ContactForm', () => {
  let wrapper;
  const mockInputChange = {
    target: {
      name: 'email',
      value: 'nim@sum.com'
    }
  };
  const mockSubmitEvent = {
    preventDefault: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallow(<ContactForm /> );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    const defaultState = {
      email: '',
      phoneNumber: '',
      street1: '',
      street2: '',
      city: '',
      state: '',
      zip: '',
      success: false
    }
    expect(wrapper.state()).toEqual(defaultState);
  });

  it('should set state data on handleChange', () => {
    wrapper.instance().handleChange(mockInputChange);
    expect(wrapper.state().email).toEqual(mockInputChange.target.value);
  });

  it('should be able to handle submit', () => {
    wrapper.instance().handleSubmit(mockSubmitEvent);
    expect(mockSubmitEvent.preventDefault).toHaveBeenCalled();
  });

  it('should send name and value to handleChange props on input change', () => {
    wrapper.find('input#email-input').simulate('change', mockInputChange);
    expect(wrapper.state().email).toEqual(mockInputChange.target.value);
  });

  it('should invoke handleSubmit prop on form submit', () => {
    wrapper.find('form.ContactForm').simulate('submit', mockSubmitEvent);
    expect(mockSubmitEvent.preventDefault).toHaveBeenCalled();
  });    
});
