import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://pure-castle-14648.herokuapp.com/graphql'
})

// This is the function that "posts" the query, the client automatically sends the query object from the function argument.
// A failed query also triggers the catch method
async function gqlQuery(query) {
  const result = await client.query({ query });
  return result.data;
}

export default gqlQuery;