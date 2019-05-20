const defaultState = {
    birth: null,
    cleanbar: 100,
    foodbar: 100,
    funbar: 100,
    id: "",
    name: null,
    poohs: 0,
    status: "alive",
    uid: "",
  }
  
  export const ewwDataReducer = (state = defaultState, action) => {
    if(action.type === 'SET_EWW_INFO') {
      return {
        ...state,
        ...action.payload
      }
    }
  
    return state;
  }