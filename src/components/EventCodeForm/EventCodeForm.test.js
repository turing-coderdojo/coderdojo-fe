import React from 'react';
import EventCodeForm from './EventCodeForm';
import { shallow } from 'enzyme';

describe('EventCodeForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(< EventCodeForm /> )
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})