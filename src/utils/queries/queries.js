import { gqlQuery, gqlMutate } from './clientQuery';
import * as queryTypes from './queryTypes';

const queries = {
  getUsers: () => gqlQuery(queryTypes.GET_USERS),
  newUser: user => gqlMutate(queryTypes.NEW_USER, user)
};

export default queries;
