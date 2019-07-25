import React from 'react';
import { mount } from 'enzyme';
import { EventsContainer, mapStateToProps } from './EventsContainer';
import requests from '../../utils/requests/requests';
import mockData from '../../utils/mockData';

jest.mock('../../utils/requests/requests');

describe('EventsContainer', () => {
  let mounted;
  const mockUpcoming = mockData.mockFutureEvents;
  const mockRecent = mockData.mockPastEvents;
  const mockError = '';
  const mockMatch = {
    params: {
      id: 1
    }
  };

  requests.getUpcomingEvents.mockImplementation(() => Promise.resolve(mockUpcoming));
  requests.getRecentEvents.mockImplementation(() => Promise.resolve(mockRecent));
  requests.getVenueDetails.mockImplementation(() => Promise.resolve(mockData.mockVenue));

  beforeEach(() => {
    mounted = mount(<EventsContainer match={mockMatch} isLoading={false} error={mockError} />);
  });

  it('should match snapshot', () => {
    expect(mounted).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should map state to props with correct values', () => {
      const mockState = {
        isFetching: false
      };
      const expected = {
        isLoading: false
      };
      const result = mapStateToProps(mockState);
      expect(result).toEqual(expected);
    });
  });
});
