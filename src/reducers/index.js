import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { isFetchingReducer } from './isFetchingReducer';
import { errorReducer } from './errorReducer';


export const rootReducer = combineReducers({
  user:userReducer,
  isFetching: isFetchingReducer,
  error: errorReducer
})