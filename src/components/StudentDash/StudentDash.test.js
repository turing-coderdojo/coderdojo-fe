import React from 'react';
import { shallow } from 'enzyme';
import { StudentDash } from './StudentDash';

describe('StudentDash', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<StudentDash />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
