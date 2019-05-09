import { combineReducers } from 'redux';
import { userReducer } from './userReducers';
import { talkingReducer } from './talkingReducer';
import { playingReducer } from './playingReducer';

export default combineReducers({
  userReducer,
  talkingReducer,
  playingReducer
})