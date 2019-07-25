import React from 'react';
import { shallow, mount } from 'enzyme';
import EventForm from './EventForm';

describe('EventForm', () => {
  let wrapper;
  let mounted;
  const mockedDate = new Date(2019, 7, 24);
  const originalDate = Date;

  global.Date = jest.fn(() => mockedDate);
  global.Date.now = jest.fn(() => {});
  global.Date.setDate = originalDate.setDate;

  beforeEach(() => {
    wrapper = shallow(<EventForm />);
    mounted = mount(<EventForm />);
  });

  it('should match snapshot when mounted', () => {
    expect(mounted).toMatchSnapshot();
  });

  it('should set set state date select', () => {
    const mockDateChange = mockedDate;
    const expected = 'August 24, 2019 6:00 AM';
    mounted.find('.start').at(1).simulate('change', mockDateChange);
    const result = mounted.find('.start').at(1).props().value;
    expect(result).toEqual(expected);
  });

  it('should set set state date select', () => {
    const mockDateChange = mockedDate;
    const expected = 'August 24, 2019 12:00 PM';
    mounted.find('.end').at(1).simulate('change', mockDateChange);
    const result = mounted.find('.end').at(1).props().value;
    expect(result).toEqual(expected);
  });

  it('should set set state date select', () => {
    mounted.find('.end').at(1).simulate('change', mockDateChange);
    const result = mounted.find('.end').at(1).props().value;
    expect(result).toEqual(expected);
  });
  
});
