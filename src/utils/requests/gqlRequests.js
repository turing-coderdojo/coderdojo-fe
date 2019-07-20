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
