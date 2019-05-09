
const defaultState = {
    ewwState: null,
    levelWaterBar: 20,
  }
  
  export const showeringReducer = (state = defaultState, action) => {
    if(action.type === 'SHOWERING') {
      return {
        ewwState: "showering",
        levelWaterBar: 100,
      }
    }  
    return state;
  }