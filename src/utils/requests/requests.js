import { apolloQuery, apolloMutate } from './apolloRequests';
import * as queryTypes from './gqlRequests';

const requests = {
  signIn: user => apolloMutate(queryTypes.SIGN_IN, user),
  createStudent: student => apolloMutate(queryTypes.CREATE_STUDENT, student),
  createGuardian: guardian => apolloMutate(queryTypes.CREATE_GUARDIAN, guardian),
  getAllUsers: () => apolloQuery(queryTypes.GET_ALL_USERS),
  getUserByToken: () => apolloQuery(queryTypes.GET_USER_BY_TOKEN)
};

export default requests;
