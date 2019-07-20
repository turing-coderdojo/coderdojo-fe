import ApolloClient from 'apollo-boost';
import store from '../../index';
import { setFetching, setError } from '../../actions';

const client = new ApolloClient({
  uri: 'https://cors-anywhere.herokuapp.com/https://pure-castle-14648.herokuapp.com/graphql',
  request: (operation) => {
    const token = localStorage.getItem('token');
    operation.setContext({
      headers: {
        authorization: token || ''
      }
    });
  }
});

export function dispatchError(error) {
  const { message } = error.graphQLErrors[0];
  store.dispatch(setError(message));
  store.dispatch(setFetching(false));
}

export async function apolloQuery(query) {
  store.dispatch(setFetching(true));
  let result;
  try {
    result = await client.query({ query });
    if (result) store.dispatch(setFetching(false));
  } catch (error) {
    dispatchError(error);
  }
  return result.data;
}

export async function apolloMutate(mutation, variables) {
  store.dispatch(setFetching(true));
  let result;
  try {
    result = await client.mutate({ mutation, variables });
    if (result) store.dispatch(setFetching(false));
  } catch (error) {
    dispatchError(error);
  }
  return result.data;
}
