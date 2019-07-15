import React from 'react';
import CurrentStudents from './CurrentStudents';
import { shallow } from 'enzyme';

describe('CurrentStudents', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(< CurrentStudents /> )
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})