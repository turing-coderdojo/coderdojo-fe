import searchResultsReducer from './searchResultsReducer';
import * as actions from '../actions';

describe('searchResultsReducer', () => {
  it('should return an empty array as default', () => {
    const expected = [];
    const result = searchResultsReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return an array of objects', () => {
    const searchResults = [{ name: 'Dojo', id: 1 }];
    const action = actions.setSearchResults(searchResults);
    const result = searchResultsReducer([], action);

    expect(result).toEqual(searchResults);
  });
});
