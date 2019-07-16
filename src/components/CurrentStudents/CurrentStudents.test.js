import React from 'react';
import { shallow } from 'enzyme';
import CurrentStudents from './CurrentStudents';

describe('CurrentStudents', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CurrentStudents />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
