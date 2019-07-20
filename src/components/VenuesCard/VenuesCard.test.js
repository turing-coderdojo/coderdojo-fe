import React from 'react';
import { shallow } from 'enzyme';
import VenuesCard from './VenuesCard';

describe('VenuesCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<VenuesCard />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
