
const defaultState = {
    ewwAppearence: 'standard'
  }
  
  export const ewwAppearenceReducer = (state = defaultState, action) => {
    if(action.type === 'MODIFY_APPEARENCE') {
      return {
        ewwAppearence: action.appearence
      }
    }  
    return state;
  }