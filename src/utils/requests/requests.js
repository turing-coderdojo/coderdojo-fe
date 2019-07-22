import { apolloQuery, apolloMutate } from './apolloRequests';
import * as gql from './gqlRequests';

const requests = {
  signIn: user => apolloMutate(gql.SIGN_IN, user),
  createStudent: student => apolloMutate(gql.CREATE_STUDENT, student),
  createGuardian: guardian => apolloMutate(gql.CREATE_GUARDIAN, guardian),
  getAllUsers: () => apolloQuery(gql.GET_ALL_USERS),
  getUserByToken: () => apolloQuery(gql.GET_USER_BY_TOKEN),
  getAllVenues: () => apolloQuery(gql.GET_ALL_VENUES),
  getVenuesByCity: city => apolloQuery(gql.GET_VENUES_BY_CITY, city),
  getVenueDetails: venueId => apolloQuery(gql.GET_VENUE_DETAILS, venueId),
  getUpcomingEvents: venueId => apolloQuery(gql.UPCOMING_EVENTS_BY_VENUE, venueId),
  getRecentEvents: venueId => apolloQuery(gql.RECENT_EVENTS_BY_VENUE, venueId),
  getAdminDetails: () => apolloQuery(gql.GET_ADMIN_VENUES)
};

export default requests;
