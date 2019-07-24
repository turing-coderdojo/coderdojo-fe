import React from 'react';
import { shallow } from 'enzyme';
import { VenuesContainer, mapStateToProps } from './VenuesContainer';

describe('VenuesContainer', () => {
  let wrapper;
  const isLoading = false;
  const error = '';
  const mockResults = {
    city: 'Denver',
    venues: [{
      id: 1,
      name: 'Venue One',
      notes: 'Here be Dragons'
    }]
  };

  beforeEach(() => {
    wrapper = shallow(
      <VenuesContainer 
        isloading={isLoading} 
        error={error}
        searchResults={mockResults}
      />
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot with error/loading', () => {
    wrapper.setProps({ error: 'Failed to fetch', loading: true });
    
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    const mockState = {
      isFetching: false,
      searchResults: []
    };
    const expected = {
      isLoading: false,
      searchResults: []
    };
    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);
  });
});
