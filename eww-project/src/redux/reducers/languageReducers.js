const defaultState = {
    language: 'en'
  }
  
  export const setLanguageReducer = (state = defaultState, action) => {
    if(action.type === 'SET_LANGUAGE') {
      return Object.assign({}, state, {language: action.language});
    }
  
    return state;
  }