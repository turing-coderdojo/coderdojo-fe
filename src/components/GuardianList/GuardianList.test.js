import React from 'react';
import GuardianList from './GuardianList';
import { shallow } from 'enzyme';

describe('GuardianList', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(< GuardianList /> )
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})