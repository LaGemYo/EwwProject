
const defaultState = {
    ewwState: "",
    levelPlayingBar: 20,
  }
  
  export const playingReducer = (state = defaultState, action) => {
    if(action.type === 'PLAYING') {
      return {
        ewwState: "playing",
        levelPlayingBar: 100
      }
    }  
    return state;
  }