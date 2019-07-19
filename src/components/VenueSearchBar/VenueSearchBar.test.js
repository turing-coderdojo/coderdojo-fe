import React from 'react';
import { shallow } from 'enzyme';
import VenueSearchBar from './VenueSearchBar';

describe('VenueSearchBar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<VenueSearchBar />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
