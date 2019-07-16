import { gql } from 'apollo-boost';

export const GET_USERS = gql`
  {
    allUsers {
      id
      nickname
      role
    }
  }
`