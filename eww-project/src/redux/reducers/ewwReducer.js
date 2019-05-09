
const defaultState = {
    ewwState: 'standard',
  }
  
  export const ewwReducer = (state = defaultState, action) => {
    if(action.type) {
      return {
        ewwState: action.type.toLowerCase()
      }
    }
    console.log('redux state', state)
    return state;
  }