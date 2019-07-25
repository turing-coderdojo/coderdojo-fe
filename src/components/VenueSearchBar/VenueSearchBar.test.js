import React from 'react';
import { shallow } from 'enzyme';
import { VenueSearchBar, mapDispatchToProps } from './VenueSearchBar';
import * as actions from '../../actions';
import requests from '../../utils/requests/requests';

jest.mock('../../actions');

describe('VenueSearchBar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<VenueSearchBar />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should dispatch setSearchResults', () => {
    const searchResults = [{ name: 'Dojo' }];
    const action = actions.setSearchResults(searchResults);
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).setSearchResults(searchResults);

    expect(dispatch).toHaveBeenCalledWith(action);
  });
});
