import { combineReducers } from 'redux';
import { userReducer } from './userReducers';
import { ewwReducer } from './ewwReducer';
import { talkingReducer } from './talkingReducer';
import { playingReducer } from './playingReducer';
import { showeringReducer } from './showeringReducer';

export default combineReducers({
  userReducer,
  ewwReducer,
  talkingReducer,
  playingReducer,
  showeringReducer,
})