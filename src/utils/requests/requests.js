import { apolloQuery, apolloMutate } from './apolloRequests';
import * as gql from './gqlRequests';

const requests = {
  signIn: user => apolloMutate(gql.SIGN_IN, user),
  createStudent: student => apolloMutate(gql.CREATE_STUDENT, student),
  createGuardian: guardian => apolloMutate(gql.CREATE_GUARDIAN, guardian),
  createNewEvent: event => apolloMutate(gql.CREATE_NEW_EVENT, event),
  editEvent: event => apolloMutate(gql.EDIT_EVENT_DETAILS, event),
  getAllUsers: () => apolloQuery(gql.GET_ALL_USERS),
  getUserByToken: () => apolloQuery(gql.GET_USER_BY_TOKEN),
  getAllVenues: () => apolloQuery(gql.GET_ALL_VENUES),
  getVenuesByCity: city => apolloQuery(gql.GET_VENUES_BY_CITY, city),
  getVenueDetails: venueId => apolloQuery(gql.GET_VENUE_DETAILS, venueId),
  getUpcomingEvents: venueId => apolloQuery(gql.UPCOMING_EVENTS_BY_VENUE, venueId),
  getRecentEvents: venueId => apolloQuery(gql.RECENT_EVENTS_BY_VENUE, venueId),
  getFamily: () => apolloQuery(gql.GET_FAMILY),
  getAdminDetails: () => apolloQuery(gql.GET_ADMIN_DATA),
  getEventsAttended: () => apolloQuery(gql.GET_EVENTS_ATTENDED),
  logAttendance: eventCode => apolloMutate(gql.LOG_ATTENDANCE, eventCode),
  getEventAttendance: eventId => apolloQuery(gql.GET_EVENT_ATTENDANCE, eventId),
  getGuardianData: () => apolloQuery(gql.GET_GUARDIAN_DATA)
};

export default requests;
