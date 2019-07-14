import * as actions from './index'

describe('actions', () => {
  it('should return a type of user', () =>  {
    const user = {
      name: "Finn",
      email: "finn@finn.com",
      password: "1234",
      role: "student",
      phone_number: "310-555-5555",
      address_id: 1,
      id:1
    }

    const expected = {
      type:"ADD_USER",
      user
    }
    
    const result = actions.addUser(user)

    expect(result).toEqual(expected)
  });

  it('should return a type of setFetching  with a boolean', () => {
    const bool = true;
    const expected = {
      type:'SET_FETCHING',
      isFetching: bool
    }

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