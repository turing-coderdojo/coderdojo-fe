import React from 'react';
import { shallow } from 'enzyme';
import { ContactForm, mapStateToProps, mapDispatchToProps } from './ContactForm';
import * as actions from '../../actions';

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
    wrapper = shallow(<ContactForm />);
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
    };
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

  it('should checkAllFields and return false if all fields are full', () => {
    wrapper.setState({
      email: 'tiffanybacher@gmail.com',
      phoneNumber: '1234567890',
      street1: '123 address',
      city: 'Denver',
      state: 'CO',
      zip: '80203'
    });

    const result = wrapper.instance().checkAllFields();

    expect(result).toEqual(false);
  }); 

  it('should check all fields and return true if all fields are not full', () => {
    wrapper.setState({
      email: 'tiffanybacher@gmail.com',
      phoneNumber: '',
      street1: '123 address',
      city: 'Denver',
      state: 'CO',
      zip: '80203'
    });

    const result = wrapper.instance().checkAllFields();

    expect(result).toEqual(true);
  });

  describe('mdtp', () => {
    let mockDispatch;

    beforeEach(() => {
      mockDispatch = jest.fn();
    });

    it('should dispatch addUser', () => {
      const user = { id: 1, username: 'tiff' };
      const action = actions.addUser(user);

      mapDispatchToProps(mockDispatch).addUser(user);

      expect(mockDispatch).toHaveBeenCalledWith(action);
    });

    it('should dispatch setError', () => {
      const error = 'There was an error';
      const action = actions.setError(error);

      mapDispatchToProps(mockDispatch).setError(error);

      expect(mockDispatch).toHaveBeenCalledWith(action);
    });
  });

  describe('mstp', () => {
    const state = {
      error: 'There was an error',
      isFetching: false
    };

    it('should map error to props', () => {
      const prop = mapStateToProps(state).error;

      expect(prop).toEqual(state.error);
    });

    it('should map isFetching to props', () => {
      const prop = mapStateToProps(state).isFetching;

      expect(prop).toEqual(state.isFetching);
    });
  });
});
