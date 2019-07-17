import { gql } from 'apollo-boost';

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
      }
    }
  }
`;
