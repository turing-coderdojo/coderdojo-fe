import { isFetchingReducer } from './isFetchingReducer';
import * as actions from '../actions';

describe('isFetchingReducer', () => {

  it('should return default state', () => {
    const expected = false;
    const result = isFetchingReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should change is fetching on the state tree', () => {
    const expected = true;
    const action = actions.setFetching(true);
    const result = isFetchingReducer(false, action);

    expect(result).toEqual(expected);
  });
});