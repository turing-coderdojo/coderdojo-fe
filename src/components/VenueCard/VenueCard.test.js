import React from 'react';
import { shallow } from 'enzyme';
import VenueCard from './VenueCard';

describe('VenueCard', () => {
  let wrapper;
  const mockVenue = {
    id: 1,
    name: 'Venue One',
    notes: 'Here be Dragons',
    addresses: [
      {
        city: 'Denver',
        street1: '567 Main St.',
        street2: 'Apt 678',
        zip: '80128',
        state: 'CO',
        id: 4
      }
    ]
  };

  beforeEach(() => {
    wrapper = shallow(<VenueCard venue={mockVenue} key={mockVenue.id} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
