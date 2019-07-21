import React from 'react';
import { shallow } from 'enzyme';
import EventCard from './EventCard';

describe('EventCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<EventCard />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
