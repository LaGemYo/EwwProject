import { combineReducers } from 'redux';
import { setLanguageReducer } from './languageReducers';

export default combineReducers({
  setLanguageReducer: setLanguageReducer
})