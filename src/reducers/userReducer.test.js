import userReducer from './userReducer';
import * as actions from '../actions';

describe('userReducer', () => {
  const user = {
    name: 'Finn',
    role: 0,
    id: 1
  };

  it('should return default state', () => {
    const expected = {};
    const result = userReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  describe('ADD_USER', () => {
    it('should add user to the state tree', () => {
      const expected = user;
      const action = actions.addUser(user);
      const result = userReducer({}, action);

      expect(result).toEqual(expected);
    });
  });
});
