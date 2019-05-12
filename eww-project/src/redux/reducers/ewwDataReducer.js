const defaultState = {
    eww: null,
  }
  
  export const ewwDataReducer = (state = defaultState, action) => {
    if(action.type === 'SET_EWW_INFO') {
      return {
        ...state,
        ewwData: action.payload
      }
    }
  
    return state;
  }