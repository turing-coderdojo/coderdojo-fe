import React from 'react';
import EventsContainer from './EventsContainer';
import { shallow } from 'enzyme';

describe('EventsContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(< EventsContainer /> )
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})