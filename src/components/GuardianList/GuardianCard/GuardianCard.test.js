import React from 'react';
import GuardianCard from './GuardianCard';
import { shallow } from 'enzyme';

describe('GuardianCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(< GuardianCard /> )
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})