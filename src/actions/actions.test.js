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
});