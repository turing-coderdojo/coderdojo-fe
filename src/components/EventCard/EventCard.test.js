import React from 'react';
import { shallow } from 'enzyme';
import EventCard from './EventCard';

describe('EventCard', () => {
  let wrapper;
  const mockEvent = {
    id: 2,
    name: 'Test Event 2',
    notes: 'testing notes',
    startTime: '2019-08-21 17:00:00 UTC',
    endTime: '2019-08-21 18:00:00 UTC'
  };

  beforeEach(() => {
    wrapper = shallow(<EventCard />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
