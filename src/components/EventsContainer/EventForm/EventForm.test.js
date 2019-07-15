import React from 'react';
import EventForm from './EventForm';
import { shallow } from 'enzyme';

describe('EventForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(< EventForm /> )
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})