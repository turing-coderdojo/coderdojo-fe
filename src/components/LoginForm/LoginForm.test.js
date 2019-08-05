import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { LoginForm, mapDispatchToProps } from './LoginForm';
import * as actions from '../../actions';

jest.mock('../../actions');

describe('LoginForm', () => {
  let wrapper;
  let mounted;

  beforeEach(() => {
    wrapper = shallow(<LoginForm />);
    mounted = mount(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot when mounted', () => {
    expect(mounted).toMatchSnapshot();
  });

  it('should update state on input change', () => {
    expect(wrapper.state()).toEqual({
      usernameOrEmail: '',
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
