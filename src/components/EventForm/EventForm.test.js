import React from 'react';
import { mount } from 'enzyme';
import EventForm from './EventForm';
import requests from '../../utils/requests/requests';
import mockData from '../../utils/mockData';

jest.mock('../../utils/requests/requests');
requests.createNewEvent.mockImplementation(() => Promise.resolve(true));
requests.editEvent.mockImplementation(() => Promise.resolve(true));

describe('EventForm', () => {
  let mounted;
  const mockToggleView = jest.fn();
  const mockUpdateAdminDash = jest.fn();
  const mockEvent = mockData.mockAdminData.me.venues[0].events[0];
  const mockSubmitEvent = { preventDefault: () => {} };
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
  global.Date.toUTCString = jest.fn(() => mockedDate);
  global.Date.setDate = originalDate.setDate;

  beforeEach(() => {
    mounted = mount(<EventForm toggleView={mockToggleView} updateAdminDash={mockUpdateAdminDash} />);
  });

  it('should match snapshot when mounted', () => {
    expect(mounted).toMatchSnapshot();
  });

  it('should match snapshot when mounted with event prop', () => {
    mounted = mount(<EventForm event={mockEvent} />);
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

  it('should set set state invalid field error on submit without proper inputs', () => {
    mounted.find('#event-notes').simulate('change', mockNotes);
    mounted.find('.create-event-btn').simulate('click', mockSubmitEvent);
    const expected = 'Please fill out required fields';
    const result = mounted.find('.event-form-error').props().children;
    expect(result).toEqual(expected);
  });

  it('should set toggle view on cancel click', () => {
    mounted.find('.cancel-event-btn').simulate('click');
    expect(mockToggleView).toHaveBeenCalledWith(false);
  });
});
