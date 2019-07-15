import React from 'react';
import VenuesContainer from './VenuesContainer';
import { shallow } from 'enzyme';

describe('VenuesContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(< VenuesContainer /> )
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})