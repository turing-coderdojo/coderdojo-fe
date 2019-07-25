import React from 'react';
import { mount } from 'enzyme';
import StudentAttendanceCard from './StudentAttendanceCard';
import mockData from '../../utils/mockData';

describe('StudentAttendanceCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<StudentAttendanceCard student={mockData.mockStudentAttendance} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render guardian info on mouseenter', () => {
    wrapper.find('StudentAttendanceCard div').simulate('mouseEnter');
    const result = wrapper.find('.guardian-header').props().className;
    expect(result).toEqual('guardian-header');
  });

  it('should render guardian info on hover', () => {
    wrapper.find('StudentAttendanceCard div').simulate('mouseLeave');
    expect(wrapper.exists('.guardian-details')).toEqual(false);
  });
});
