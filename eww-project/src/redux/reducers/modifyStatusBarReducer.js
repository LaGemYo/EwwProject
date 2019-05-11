const defaultState = {
    playingBarLevel: 20,
    cleanBarLevel: 60,
    foodBarLevel: 0
  }

  export const modifyStatusBarReducer = (state = defaultState, action) => {
    if(action.type === 'MODIFY_STATUS_BAR') {
        switch(action.barId) {
            case 'playBar':
                return {
                    ...state, 
                    playingBarLevel: state.playingBarLevel + action.modifier
                };
            case 'cleanBar':
                return {
                    ...state, 
                    cleanBarLevel: state.cleanBarLevel + action.modifier
                };
            case 'foodBar':
                return {
                    ...state,
                    foodBarLevel: state.foodBarLevel + action.modifier
                };
        }
    }  
    return {
        ...state,
        playingBarLevel: state.playingBarLevel,
        cleanBarLevel: state.cleanBarLevel,
        foodBarLevel: state.foodBarLevel
    };
  }