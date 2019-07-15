import React from 'react';
import ContactInfo from './ContactInfo';
import { shallow } from 'enzyme';

describe('ContactInfo', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(< ContactInfo /> )
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})