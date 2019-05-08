const defaultState = {
    talking: ["ESPABILADO", "PANCARTA", "CASCABEL"]
  }
  
  export const talkingReducer = (state = defaultState, action) => {
    if(action.type === 'TALKING') {
      return {
        talking: state.talking[Math.floor(Math.random() * state.talking.length)]         
        }
      }
      return state;   
  }