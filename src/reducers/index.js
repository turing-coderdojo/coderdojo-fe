import { combineReducers } from 'redux';
import userReducer from './userReducer';
import isFetchingReducer from './isFetchingReducer';
import errorReducer from './errorReducer';


const rootReducer = combineReducers({
  user: userReducer,
  isFetching: isFetchingReducer,
  error: errorReducer
});

export default rootReducer;
