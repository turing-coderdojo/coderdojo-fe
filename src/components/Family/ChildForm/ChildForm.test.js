import React from 'react';
import ChildForm from './ChildForm';
import { shallow } from 'enzyme';

describe('ChildForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(< ChildForm /> )
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})