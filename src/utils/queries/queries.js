import gqlQuery from './clientQuery';
import * as queryTypes from './queryTypes';

const queries = {
  getUsers: () => gqlQuery(queryTypes.GET_USERS)
}

export default queries;