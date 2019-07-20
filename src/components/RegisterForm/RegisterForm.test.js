import React from 'react';
import { shallow } from 'enzyme';
import { RegisterForm, mapDispatchToProps } from './RegisterForm';
import * as actions from '../../actions';

jest.mock('../../actions');


describe('RegisterForm', () => {
  let wrapper;
  const mockDispatch = jest.fn();


  beforeEach(() => {
    wrapper = shallow(<RegisterForm />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state on input change', () => {
    expect(wrapper.state()).toEqual({
      fullName: '',
      username: '',
      password: '',
      reEnteredPassword: '',
      displayContactForm: false,
      displayAgeForm: false
    }); 

    const mockEvent = {
      target: { value: 'ehk', name: 'username' }
    };

    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('username')).toEqual('ehk');
  });

  it('should dispatch addUser', () => {
    const mockUser = { username: 'ehk' };
    const mockAction = actions.addUser(mockUser);

    mapDispatchToProps(mockDispatch).addUser(mockUser);

    expect(mockDispatch).toHaveBeenCalledWith(mockAction);  
  });
});
