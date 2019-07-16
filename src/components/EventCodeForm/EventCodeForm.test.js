import React from 'react';
import { shallow } from 'enzyme';
import EventCodeForm from './EventCodeForm';

describe('EventCodeForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<EventCodeForm />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
