import React from 'react';
import { shallow, mount } from 'enzyme';
import EventForm from './EventForm';
import requests from '../../utils/requests/requests';

jest.mock('../../utils/requests/requests');
requests.createNewEvent = jest.fn();
requests.editEvent = jest.fn();

describe('EventForm', () => {
  let wrapper;
  let mounted;
  const mockName = { 
    target: { name: 'name', value: 'Test Event' } 
  };
  const mockNotes = { 
    target: { name: 'notes', value: 'Test Notes' } 
  };
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

  it('should set set state start date select', () => {
    const expected = 'August 24, 2019 6:00 AM';
    mounted.find('.start').at(1).simulate('change', mockedDate);
    const result = mounted.find('.start').at(1).props().value;
    expect(result).toEqual(expected);
  });

  it('should set set state end date select', () => {
    const expected = 'August 24, 2019 12:00 PM';
    mounted.find('.end').at(1).simulate('change', mockedDate);
    const result = mounted.find('.end').at(1).props().value;
    expect(result).toEqual(expected);
  });

  it('should set state event name', () => {
    mounted.find('#event-name').simulate('change', mockName);
    const result = mounted.find('#event-name').props().value;
    const expected = 'Test Event';
    expect(result).toEqual(expected);
  });

  it('should set state event notes', () => {
    mounted.find('#event-notes').simulate('change', mockNotes);
    const result = mounted.find('#event-notes').props().value;
    const expected = 'Test Notes';
    expect(result).toEqual(expected);
  });

  
});
