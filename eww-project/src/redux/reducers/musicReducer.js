
const defaultState = {
    musicIsPlaying: false,
 }
 
 export const musicReducer = (state = defaultState, action) => {
     if (action.type === 'MUSIC') {
         return {
             musicIsPlaying: state.musicIsPlaying ? false : true
         }
     }
     return state;
 }