import React from 'react';
import { mount } from 'enzyme';
import { VenueSearchBar, mapDispatchToProps } from './VenueSearchBar';
import * as actions from '../../actions';
import mockData from '../../utils/mockData';
import requests from '../../utils/requests/requests';

jest.mock('../../utils/requests/requests');
requests.getVenuesByCity(() => mockData.mockVenue);

describe('VenueSearchBar', () => {
  let wrapper;
  const mockSubmitEvent = {
    preventDefault: () => {}
  };

  beforeEach(() => {
    wrapper = mount(<VenueSearchBar />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match send search request on click', () => {
    wrapper.find('.city-search-btn', mockSubmitEvent);
    expect(requests.getVenuesByCity).toHaveBeenCalled();
  });

  it('should dispatch setSearchResults', () => {
    const searchResults = [{ name: 'Dojo' }];
    const action = actions.setSearchResults(searchResults);
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).setSearchResults(searchResults);

    expect(dispatch).toHaveBeenCalledWith(action);
  });
});
