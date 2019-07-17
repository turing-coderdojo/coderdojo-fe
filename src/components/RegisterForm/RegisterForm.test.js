import React from 'react';
import { shallow } from 'enzyme';
import { RegisterForm } from './RegisterForm';

describe('RegisterForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<RegisterForm />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
