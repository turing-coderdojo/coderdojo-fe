import { apolloQuery, apolloMutate } from './apolloRequests';
import * as requests from './gqlRequests';

const requests = {
  signIn: user => apolloMutate(requests.SIGN_IN, user),
  createStudent: student => apolloMutate(requests.CREATE_STUDENT, student),
  createGuardian: guardian => apolloMutate(requests.CREATE_GUARDIAN, guardian),
  getAllUsers: () => apolloQuery(requests.GET_ALL_USERS),
  getUserByToken: () => apolloQuery(requests.GET_USER_BY_TOKEN),
  getAllVenues: () => apolloQuery(requests.GET_ALL_VENUES),
  getVenuesByCity: city => apolloQuery(requests.GET_VENUES_BY_CITY, city),
  getEventsByVenue: venueId => apolloQuery(requests.GET_EVENTS_BY_VENUE, venueId)
};

export default requests;
