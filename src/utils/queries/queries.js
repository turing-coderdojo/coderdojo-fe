import gqlQuery from './clientQuery';
import * as queryTypes from './queryTypes';

// Create new methods for new queries, i.e If you want to createa a new user, create a new queryType that has a "mutation" query.
const queries = {
  getUsers: () => gqlQuery(queryTypes.GET_USERS)
}

export default queries;