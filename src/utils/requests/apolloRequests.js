import ApolloClient from 'apollo-boost';
import store from '../../store';
import { setFetching, setError } from '../../actions';

export function dispatchError(error) {
  const { message } = error.graphQLErrors[0];

  store.dispatch(setError(message));
  store.dispatch(setFetching(false));
}

export function setFetchingAndError() {
  const state = store.getState();
  const { isFetching, error } = state;

  if (!isFetching) store.dispatch(setFetching(true));
  if (error.length) store.dispatch(setError(''));
}

export async function apolloQuery(query, variables) {
  const client = new ApolloClient({
    uri: 'https://cryptic-stream-22818.herokuapp.com/graphql',
    request: (operation) => {
      operation.setContext({
        headers: {
          authorization: localStorage.getItem('token') || ''
        }
      });
    }
  });

  setFetchingAndError();

  let result;

  try {
    result = await client.query({ query, variables });
    if (result) store.dispatch(setFetching(false));
  } catch (error) {
    dispatchError(error);
  }

  return result ? result.data : false;
}

export async function apolloMutate(mutation, variables) {
  const client = new ApolloClient({
    uri: 'https://cryptic-stream-22818.herokuapp.com/graphql',
    request: (operation) => {
      operation.setContext({
        headers: {
          authorization: localStorage.getItem('token') || ''
        }
      });
    }
  });

  setFetchingAndError();

  let result;

  try {
    result = await client.mutate({ mutation, variables });
    if (result) store.dispatch(setFetching(false));
  } catch (error) {
    dispatchError(error);
  }
  
  return result ? result.data : false;
}
