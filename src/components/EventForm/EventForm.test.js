import React from 'react';
import { shallow } from 'enzyme';
import EventForm from './EventForm';

describe('EventForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<EventForm />);
  });

  it('should match snapshot', () => {
  });
});
