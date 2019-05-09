
const defaultState = {
    playing: '../components/images/standByEww.gif',
    levelPlayingBar: 20,
  }
  
  export const playingReducer = (state = defaultState, action) => {
    if(action.type === 'PLAYING') {
      return {
        playing: '../components/images/playingEwwGif.gif',
        levelPlayingBar: 100
      }
    }  
    return state;
  }