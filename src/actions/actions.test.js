import * as actions from './index';

describe('actions', () => {
  it('should return a type of user', () => {
    const user = {
      name: 'Finn',
      role: 0,
      id: 1
    };
    const expected = {
      type: 'ADD_USER',
      user
    };
    const result = actions.addUser(user);

    expect(result).toEqual(expected);
  });

  it('should return a type of setFetching  with a boolean', () => {
    const bool = true;
    const expected = {
      type: 'SET_FETCHING',
      isFetching: bool
    };
    const result = actions.setFetching(bool);

    expect(result).toEqual(expected);
  });

  it('should return a type of setError with an error message', () => {
    const error = 'Something went wrong';
    const expected = {
      type: 'SET_ERROR',
      error
    };
    const result = actions.setError(error);

    expect(result).toEqual(expected);
  });
});
