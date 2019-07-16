import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://cors-anywhere.herokuapp.com/https://pure-castle-14648.herokuapp.com/graphql'
})

async function gqlQuery(query) {
  const result = await client.query({ query });
  return result.data;
}

export default gqlQuery;