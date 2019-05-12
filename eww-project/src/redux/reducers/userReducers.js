const defaultState = {
  user: null,
}

export const userReducer = (state = defaultState, action) => {
  if(action.type === 'SET_USER_INFO') {
    return {
      ...state,
      user: action.payload
    }
  }

  return state;
}