import { combineReducers } from 'redux';
import { userReducer } from './userReducers';
import { talkingReducer } from './talkingReducer';
import { poohReducer } from './poohReducer';
import { ewwAppearenceReducer } from './ewwAppearenceReducer';
import { modifyStatusBarReducer } from './modifyStatusBarReducer';
import { musicReducer } from './musicReducer';
import { ewwDataReducer } from './ewwDataReducer';

export default combineReducers({
  userReducer,
  ewwAppearenceReducer,
  talkingReducer,
  poohReducer,
  modifyStatusBarReducer,
  musicReducer,
  ewwDataReducer,
})