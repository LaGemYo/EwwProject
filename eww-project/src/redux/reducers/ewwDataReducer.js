const defaultState = {
    eww: 'anonymous'
  }
  
  export const userReducer = (state = defaultState, action) => {
    if(action.type === 'SET_EWW_INFO') {
      return {
        ...state,
        eww: action.payload
      }
    }
  
    return state;
  }