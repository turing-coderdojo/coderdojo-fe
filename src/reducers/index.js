import { combineReducers } from 'redux';
import userReducer from './userReducer';
import isFetchingReducer from './isFetchingReducer';
import errorReducer from './errorReducer';
import searchResultsReducer from './searchResultsReducer';


const rootReducer = combineReducers({
  user: userReducer,
  isFetching: isFetchingReducer,
  error: errorReducer,
  searchResults: searchResultsReducer
});

export default rootReducer;
