import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers';
import thunk from 'redux-thunk';
import App from './components/App/App';
import './index.scss';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// apollo client setup
const client = new ApolloClient({
  uri: 'https://pure-castle-14648.herokuapp.com/graphql'
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const router = (
  <ApolloProvider client={ client }>
    <Provider store={store}>
      <BrowserRouter>
        < App />
      </BrowserRouter>
    </Provider>
  </ApolloProvider>
)


ReactDOM.render(router, document.getElementById('root'));
