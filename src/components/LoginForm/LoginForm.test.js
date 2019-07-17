import React from 'react';
import { shallow } from 'enzyme';
import { LoginForm } from './LoginForm';

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
      password: ''
    });

    const mockEvent = {
      target: { value: 'tbacher', name: 'username' }
    };

    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state('username')).toEqual('tbacher');
  });
});
