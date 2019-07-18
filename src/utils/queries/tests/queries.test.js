import queries from '../queries';
import * as queryTypes from '../queryTypes';
import { gqlQuery } from '../clientQuery';
import { gqlMutate } from '../clientQuery';

jest.mock('../clientQuery.js');
gqlQuery.mockImplementation(() => {});
gqlMutate.mockImplementation(() => {});

describe('Queries', () => {
  it('signIn: should invoke gql mutation with correct args', () => {
    const user = {
      email: 'nim',
      password: 'sum'
    };
    const expectedQuery = queryTypes.SIGN_IN;

    queries.signIn(user);
    expect(gqlMutate).toHaveBeenCalledWith(expectedQuery, user);
  });

  it('createStudent: should invoke gql mutation with correct args', () => {
    const newStudent = {
      username: 'nim',
      password: 'sum',
      name: 'nimsum',
      birthdate: '07/07/7077'
    };
    const expectedQuery = queryTypes.CREATE_STUDENT;

    queries.createStudent(newStudent);
    expect(gqlMutate).toHaveBeenCalledWith(expectedQuery, newStudent);
  });

  it('createGuardian: should invoke gql mutation with correct args', () => {
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
    expect(gqlMutate).toHaveBeenCalledWith(expectedQuery, newGuardian);
  });

  it('getAllUsers: should invoke gql query with correct args', () => {
    const expectedQuery = queryTypes.GET_ALL_USERS;

    queries.getAllUsers();
    expect(gqlQuery).toHaveBeenCalledWith(expectedQuery);
  });
});
