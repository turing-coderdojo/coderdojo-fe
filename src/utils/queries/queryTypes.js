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
