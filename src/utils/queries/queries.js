import { gqlQuery, gqlMutate } from './clientQuery';
import * as queryTypes from './queryTypes';

const queries = {
  signIn: user => gqlMutate(queryTypes.SIGN_IN, user),
  createStudent: student => gqlMutate(queryTypes.CREATE_STUDENT, student),
  getAllUsers: () => gqlQuery(queryTypes.GET_ALL_USERS)
};

export default queries;
