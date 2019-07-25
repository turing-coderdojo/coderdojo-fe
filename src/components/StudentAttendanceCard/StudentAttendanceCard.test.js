import React from 'react';
import { shallow } from 'enzyme';
import StudentAttendanceCard from './StudentAttendanceCard';

describe('StudentAttendanceCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<StudentAttendanceCard />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
