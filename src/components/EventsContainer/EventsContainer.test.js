import React from 'react';
import { shallow } from 'enzyme';
import EventsContainer from './EventsContainer';

describe('EventsContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<EventsContainer />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
