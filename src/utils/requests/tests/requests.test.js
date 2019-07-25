import queries from '../requests';
import * as queryTypes from '../gqlRequests';
import * as apollo from '../apolloRequests';

jest.mock('../apolloRequests.js');
apollo.apolloQuery.mockImplementation(() => {});
apollo.apolloMutate.mockImplementation(() => {});

describe('Queries', () => {
  it('signIn: should invoke apollo mutation with correct args', () => {
    const user = {
      email: 'nim',
      password: 'sum'
    };
    const expectedQuery = queryTypes.SIGN_IN;

    queries.signIn(user);
    expect(apollo.apolloMutate).toHaveBeenCalledWith(expectedQuery, user);
  });

  it('createStudent: should invoke apollo mutation with correct args', () => {
    const newStudent = {
      username: 'nim',
      password: 'sum',
      name: 'nimsum',
      birthdate: '07/07/7077'
    };
    const expectedQuery = queryTypes.CREATE_STUDENT;

    queries.createStudent(newStudent);
    expect(apollo.apolloMutate).toHaveBeenCalledWith(expectedQuery, newStudent);
  });

  it('createGuardian: should invoke apollo mutation with correct args', () => {
    const newGuardian = {
      username: 'nim',
      password: 'sum',
      name: 'nimsum',
      birthdate: '07/07/7077',
      email: 'nim@sum.com',
      phoneNumber: '210210210',
      street1: '123 Market St',
      street2: '456 Turing Ln',
      city: 'Denver',
      state: 'Colorado',
      zip: '80202'
    };
    const expectedQuery = queryTypes.CREATE_GUARDIAN;

    queries.createGuardian(newGuardian);
    expect(apollo.apolloMutate).toHaveBeenCalledWith(expectedQuery, newGuardian);
  });

  it('getAllUsers: should invoke apollo query with correct args', () => {
    const expectedQuery = queryTypes.GET_ALL_USERS;

    queries.getAllUsers();
    expect(apollo.apolloQuery).toHaveBeenCalledWith(expectedQuery);
  });

  it('getUserByToken: should invoke apollo query with correct args', () => {
    const expectedQuery = queryTypes.GET_USER_BY_TOKEN;

    queries.getUserByToken();
    expect(apollo.apolloQuery).toHaveBeenCalledWith(expectedQuery);
  });

  it('getAllVenues: should invoke apollo query with  correct args', () => {
    const expectedQuery = queryTypes.GET_ALL_VENUES;

    queries.getAllVenues();
    expect(apollo.apolloQuery).toHaveBeenCalledWith(expectedQuery);
  });

  it('getVenuesByCity: should invoke apollo query with  correct args', () => {
    const expectedQuery = queryTypes.GET_VENUES_BY_CITY;

    const expectedCity = {
      city: 'Denver'
    };

    queries.getVenuesByCity(expectedCity);

    expect(apollo.apolloQuery).toHaveBeenCalledWith(expectedQuery, expectedCity);
  });
  
});
