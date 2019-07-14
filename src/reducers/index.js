import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { isFetchingReducer } from './isFetchingReducer'


export const rootReducer = combineReducers({
  user:userReducer,
  isFetching: isFetchingReducer
})