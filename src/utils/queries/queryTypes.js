import { gql } from 'apollo-boost';

// This is how to create graphQL queries(ensure new line after template literal start)
// The naming convention I saw on the docs looks like redux actions so thats how the queries are named
// If you want to make a new query just follow the format below
export const GET_USERS = gql`
  {
    allUsers {
      id
      nickname
      role
    }
  }
`