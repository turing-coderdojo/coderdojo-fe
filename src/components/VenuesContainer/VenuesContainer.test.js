import React from 'react';
import { shallow } from 'enzyme';
import VenuesContainer from './VenuesContainer';

describe('VenuesContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<VenuesContainer />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
