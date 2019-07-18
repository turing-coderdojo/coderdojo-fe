import queries from '../queries';
import * as queryTypes from '../queryTypes';
import { gqlQuery } from '../clientQuery';
import { gqlMutate } from '../clientQuery';

jest.mock('../clientQuery.js');
gqlQuery.mockImplementation(() => {});
gqlMutate.mockImplementation(() => {});

describe('Queries', () => {
  it('signIn: should invoke mutation query with correct args', () => {
    const user = {
      email: 'nim',
      password: 'sum'
    };
    const expectedQuery = queryTypes.SIGN_IN;

    queries.signIn(user);
    expect(gqlMutate).toHaveBeenCalledWith(expectedQuery, user);
  });

  it('createStudent: should invoke mutation query with correct args', () => {
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
});
