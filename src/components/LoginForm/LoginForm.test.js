import React from 'react';
import { shallow } from 'enzyme';
import { LoginForm, mapDispatchToProps } from './LoginForm';
import * as actions from '../../actions';

jest.mock('../../actions');

describe('LoginForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LoginForm />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state on input change', () => {
    expect(wrapper.state()).toEqual({
      username: '',
      password: '',
      success: false,
      role: null
    });

    const mockEvent = {
      target: { value: 'tbacher', name: 'username' }
    };

    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state('username')).toEqual('tbacher');
  });

  it('should dispatch addUser', () => {
    const mockDispatch = jest.fn();
    const mockUser = { username: 'fred' };
    const mockAction = actions.addUser(mockUser);

    mapDispatchToProps(mockDispatch).addUser(mockUser);
    
    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  });
});
