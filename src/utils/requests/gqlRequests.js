import { gql } from 'apollo-boost';

export const GET_ALL_USERS = gql`
  {
    allUsers {
      id
      name
      username
      role
      guardianId{
        name
      }
      students{
        name
      }
    }
  }
`;

export const GET_USER_BY_TOKEN = gql`
  {
    me{
        username
        name
        role
    }
  }
`;

export const CREATE_STUDENT = gql`
  mutation createStudent(
    $username: String!,
    $password: String!,
    $name: String!,
    $birthdate: String!    
    ) {
    createStudent(
      username: $username,
      password: $password,
      name: $name,
      birthdate: $birthdate
    ) {
      id
    }
  }
`;

export const CREATE_GUARDIAN = gql`
  mutation createUser(
    $email: String!,
    $username: String!,
    $password: String!,
    $name: String!,
    $phoneNumber: String!,
    $street1: String!,
    $street2: String,
    $city: String!,
    $state: String!,
    $zip: String!
    ) {
    createUser(
      email: $email,
      username: $username,
      password: $password,
      name: $name,
      phoneNumber: $phoneNumber,
      street1: $street1,
      street2: $street2,
      city: $city,
      state: $state,
      zip: $zip
    ) {
      id
    }
  }
`;

export const CREATE_NEW_EVENT = gql`
  mutation createEvent(
    $name: String!,
    $venueId: Int!,
    $notes: String,
    $startTime: String!,
    $endTime: String!
    ) {
    createEvent(
      name: $name,
      venueId: $venueId,
      notes: $notes,
      startTime: $startTime,
      endTime: $endTime
    ) {
      id
    }
  }
`;

export const SIGN_IN = gql`
  mutation signIn(
    $username: String!,
    $password: String!    
    ) {
    signIn(
      username: $username,
      password: $password
    ) {
      token
      user{
        id
        username
        name
        role
      }
    }
  }
`;

export const GET_ALL_VENUES = gql`
  {
    allVenues{
      id
      name
      notes
      addresses{
        city
        street1
        street2
        zip
        state
        id
      }
    }
  }
`;

export const GET_VENUES_BY_CITY = gql`
  query allVenues($city: String!) {
    allVenues(city: $city) {
      id
      name
      notes
      addresses{
        city
        street1
        street2
        zip
        state
        id
      }
    }
  }
`;

export const GET_VENUE_DETAILS = gql`
  query allVenues($venueId: Int!) {
    allVenues(id: $venueId) {
      name
      email
      webUrl
      notes
      addresses {
        street1
        street2
        city
        state
        zip
      }
    }
  }
`;

export const UPCOMING_EVENTS_BY_VENUE = gql`
  query futureEvents($venueId: Int!) {
    futureEvents(venueId: $venueId){
      id
      name
      notes
      startTime
      endTime
    }
  }
`;

export const RECENT_EVENTS_BY_VENUE = gql`
  query pastEvents($venueId: Int!) {
    pastEvents(venueId: $venueId){
      id
      name
      notes
      startTime
      endTime
    }
  }
`;

export const GET_FAMILY = gql`
  {
    me {
      students {
        name
        username
        birthdate
        id
      }
    }
  }
`;

export const GET_ADMIN_DATA = gql`
  {
    me {
      email
      phoneNumber
      username
      addresses{
          street1
          street2
          city
          state
          zip
      }
      venues {
        id
        name
        notes
        email
        webUrl
        events {
          id
          name
          notes
          startTime
          endTime
          eventCode
        }
      }
    }
  }
`;

export const GET_EVENTS_ATTENDED = gql`
 {
    me{
        eventsAttended{
            name
            startTime
            id
        }
    }
}
`;

export const LOG_ATTENDANCE = gql`
  mutation logAttendance( 
    $eventCode: String!
    ) {
    logAttendance(
      eventCode: $eventCode
    ) {
      id
    }
  }
`;

export const GET_GUARDIAN_DATA = gql`
  {
    me {
      email
      phoneNumber
      addresses {
        street1
        street2
        city
        state
        zip
      }
    }
  }
`;
