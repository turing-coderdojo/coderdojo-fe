import { gql } from 'apollo-boost';

export const GET_USERS = gql`
  {
    allUsers {
      id
      nickname
      role
    }
  }
`;

export const NEW_USER = gql`
  mutation createUser(
    $email: String!, 
    $nickname: String!, 
    $password: String!) {
    createUser(
      email: $email,
      nickname: $nickname,
      password: $password
    )
    {
      id
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


