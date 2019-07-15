import React from 'react';
import ChildPreview from './ChildPreview';
import { shallow } from 'enzyme';

describe('ChildPreview', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(< ChildPreview /> )
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})