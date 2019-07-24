import { combineReducers } from 'redux';
import userReducer from './userReducer';
import isFetchingReducer from './isFetchingReducer';
import errorReducer from './errorReducer';
import searchResultsReducer from './searchResultsReducer';
import studentsReducer from './studentsReducer';

const rootReducer = combineReducers({
  user: userReducer,
  isFetching: isFetchingReducer,
  error: errorReducer,
  searchResults: searchResultsReducer,
  students: studentsReducer
});

export default rootReducer;
