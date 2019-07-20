import React from 'react';
import { shallow } from 'enzyme';
import VenueCard from './VenueCard';

describe('VenueCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<VenueCard />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
