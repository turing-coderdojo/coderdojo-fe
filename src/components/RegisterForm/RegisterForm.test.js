import React from 'react';
import { shallow, mount } from 'enzyme';
import { RegisterForm, mapDispatchToProps, mapStateToProps } from './RegisterForm';
import * as actions from '../../actions';

jest.mock('../../actions');

describe('RegisterForm', () => {
  let wrapper;
  let mounted;
  const mockDispatch = jest.fn();
  const defaultState = {
    fullName: '',
    username: '',
    password: '',
    reEnteredPassword: '',
    displayContactForm: false,
    displayAgeForm: false
  };
  const mockSubmitEvent = {
    preventDefault: jest.fn(),
    target: { name: 'student' }
  };
  const mockStudent = {
    fullName: 'erik k',
    username: 'ehk90000',
    password: 'password',
    reEnteredPassword: 'reEnteredPassword',
    displayContactForm: false,
    displayAgeForm: false
  };
  const mockSetError = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<RegisterForm 
      mockStudent={mockStudent}
      setError={mockSetError}
    />);
    mounted = mount(<RegisterForm
      mockStudent={mockStudent}
      setError={mockSetError}
    />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot when mounted', () => {
    expect(mounted).toMatchSnapshot();
  });

  it('should update userName state on input change', () => {
    expect(wrapper.state()).toEqual(defaultState); 

    const mockEvent = {
      target: { value: 'ehk', name: 'username' }
    };

    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('username')).toEqual('ehk');
  });

  it('should update fullName state on input change', () => {
    expect(wrapper.state()).toEqual(defaultState);

    const mockEvent = {
      target: { value: 'erik k.', name: 'fullName' }
    };

    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('fullName')).toEqual('erik k.');
  });

  it('should update password state on input change', () => {
    expect(wrapper.state()).toEqual(defaultState);

    const mockEvent = {
      target: { value: 'password1', name: 'password' }
    };

    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('password')).toEqual('password1');
  });

  it('should update reEnteredPassword state on input change', () => {
    expect(wrapper.state()).toEqual(defaultState);

    const mockEvent = {
      target: { value: 'password1', name: 'reEnteredPassword' }
    };

    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('reEnteredPassword')).toEqual('password1');
  });

  it('should dispatch addUser', () => {
    const mockUser = { username: 'ehk' };
    const mockAction = actions.addUser(mockUser);

    mapDispatchToProps(mockDispatch).addUser(mockUser);

    expect(mockDispatch).toHaveBeenCalledWith(mockAction);  
  });

  describe('mapStateToProps', () => {
    it('should MSTP', () => {
      const state = {
        error: '',
        loading: false
      };

      const { error } = mapStateToProps(state);

      expect(error).toEqual(state.error);
    });
  }); 

  it('should be able to preventdefault on submit', () => {
    wrapper.instance().handleRegister(mockSubmitEvent);
    expect(mockSubmitEvent.preventDefault).toHaveBeenCalled();
  });

  it('should set an error if the passwords do not match', () => {
    wrapper.setState({
      name: 'Jude Bacher',
      username: 'judebacher',
      password: 'password',
      reEnteredPassword: 'cats',
      dob: '1/23/18'
    });

    const error = wrapper.instance().checkPasswords();

    expect(mockSetError).toHaveBeenCalledWith('Passwords must match.');

    expect(error).toEqual(true);
  });
});
