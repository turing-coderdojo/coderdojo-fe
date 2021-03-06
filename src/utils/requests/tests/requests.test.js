import queries from '../requests';
import * as queryTypes from '../gqlRequests';
import * as apollo from '../apolloRequests';

jest.mock('../apolloRequests.js');
apollo.apolloQuery.mockImplementation(() => {});
apollo.apolloMutate.mockImplementation(() => {});

describe('Queries', () => {
  it('signIn: should invoke apollo mutation with correct args', () => {
    const user = {
      email: 'nim',
      password: 'sum'
    };
    const expectedQuery = queryTypes.SIGN_IN;

    queries.signIn(user);
    expect(apollo.apolloMutate).toHaveBeenCalledWith(expectedQuery, user);
  });

  it('createStudent: should invoke apollo mutation with correct args', () => {
    const newStudent = {
      username: 'nim',
      password: 'sum',
      name: 'nimsum',
      birthdate: '07/07/7077'
    };
    const expectedQuery = queryTypes.CREATE_STUDENT;

    queries.createStudent(newStudent);
    expect(apollo.apolloMutate).toHaveBeenCalledWith(expectedQuery, newStudent);
  });

  it('createGuardian: should invoke apollo mutation with correct args', () => {
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
    expect(apollo.apolloMutate).toHaveBeenCalledWith(expectedQuery, newGuardian);
  });

  it('getAllUsers: should invoke apollo query with correct args', () => {
    const expectedQuery = queryTypes.GET_ALL_USERS;

    queries.getAllUsers();
    expect(apollo.apolloQuery).toHaveBeenCalledWith(expectedQuery);
  });

  it('getUserByToken: should invoke apollo query with correct args', () => {
    const expectedQuery = queryTypes.GET_USER_BY_TOKEN;

    queries.getUserByToken();
    expect(apollo.apolloQuery).toHaveBeenCalledWith(expectedQuery);
  });

  it('getAllVenues: should invoke apollo query with  correct args', () => {
    const expectedQuery = queryTypes.GET_ALL_VENUES;

    queries.getAllVenues();
    expect(apollo.apolloQuery).toHaveBeenCalledWith(expectedQuery);
  });

  it('getVenuesByCity: should invoke apollo query with  correct args', () => {
    const expectedQuery = queryTypes.GET_VENUES_BY_CITY;

    const expectedCity = {
      city: 'Denver'
    };

    queries.getVenuesByCity(expectedCity);

    expect(apollo.apolloQuery).toHaveBeenCalledWith(expectedQuery, expectedCity);
  });

  it('getVenueDetails: should invoke apollo query with  correct args', () => {
    const expectedQuery = queryTypes.GET_VENUE_DETAILS;

    const expectedId = {
      venueId: 2
    };

    queries.getVenueDetails(expectedId);

    expect(apollo.apolloQuery).toHaveBeenCalledWith(expectedQuery, expectedId);
  });

  it('getUpcomingEvents: should invoke apollo query with  correct args', () => {
    const expectedQuery = queryTypes.UPCOMING_EVENTS_BY_VENUE;

    const expectedId = {
      venueId: 2
    };

    queries.getUpcomingEvents(expectedId);

    expect(apollo.apolloQuery).toHaveBeenCalledWith(expectedQuery, expectedId);
  });

  it('getRecentEvents: should invoke apollo query with  correct args', () => {
    const expectedQuery = queryTypes.RECENT_EVENTS_BY_VENUE;

    const expectedId = {
      venueId: 2
    };

    queries.getRecentEvents(expectedId);

    expect(apollo.apolloQuery).toHaveBeenCalledWith(expectedQuery, expectedId);
  });

  it('getFamily: should invoke apollo query with  correct args', () => {
    const expectedQuery = queryTypes.GET_FAMILY;

    queries.getFamily();
    expect(apollo.apolloQuery).toHaveBeenCalledWith(expectedQuery);
  });

  it('getAdminDetails: should invoke apollo query with  correct args', () => {
    const expectedQuery = queryTypes.GET_ADMIN_DATA;

    queries.getAdminDetails();
    expect(apollo.apolloQuery).toHaveBeenCalledWith(expectedQuery);
  });

  it('getEventsAttended: should invoke apollo query with  correct args', () => {
    const expectedQuery = queryTypes.GET_EVENTS_ATTENDED;

    queries.getEventsAttended();
    expect(apollo.apolloQuery).toHaveBeenCalledWith(expectedQuery);
  });

  it('logAttendance: should invoke apollo mutation with  correct args', () => {
    const expectedQuery = queryTypes.LOG_ATTENDANCE;
    const expectedEventCode = {
      eventCode: 123456
    };

    queries.logAttendance(expectedEventCode);
    expect(apollo.apolloMutate).toHaveBeenCalledWith(expectedQuery, expectedEventCode);
  });

  it('getEventAttendance: should invoke apollo query with  correct args', () => {
    const expectedQuery = queryTypes.GET_EVENT_ATTENDANCE;
    const expectedEventId = {
      eventId: 1
    };

    queries.getEventAttendance(expectedEventId);
    expect(apollo.apolloQuery).toHaveBeenCalledWith(expectedQuery, expectedEventId);
  });

  it('getGuardianData: should invoke apollo query with  correct args', () => {
    const expectedQuery = queryTypes.GET_GUARDIAN_DATA;

    queries.getGuardianData();
    expect(apollo.apolloQuery).toHaveBeenCalledWith(expectedQuery);
  });
});
