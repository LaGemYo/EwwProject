import { combineReducers } from 'redux';
import { userReducer } from './userReducers';
import { talkingReducer } from './talkingReducer';

export default combineReducers({
  userReducer,
  talkingReducer
})