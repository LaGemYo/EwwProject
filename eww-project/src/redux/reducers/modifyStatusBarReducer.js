const defaultState = {
    playingBarLevel: 20,
    cleanBarLevel: 60,
    foodBarLevel: 0
}

export const modifyStatusBarReducer = (state = defaultState, action) => {
    if (action.type === 'MODIFY_STATUS_BAR') {
        switch (action.barId) {
            case 'playBar':
                return {
                    ...state,
                    playingBarLevel: 100
                };
            case 'cleanBar':
                if (state.cleanBarLevel < 100)
                    return {
                        ...state,
                        cleanBarLevel: state.cleanBarLevel + action.modifier
                    };
                    else {
                        return {
                            ...state,
                            cleanBarLevel: 100
                        }
                    }
            case 'foodBar':
                if (state.foodBarLevel < 100)
                    return {
                        ...state,
                        foodBarLevel: state.foodBarLevel + action.modifier
                    };
                else {
                    return {
                        ...state,
                        cleanBarLevel: state.cleanBarLevel - 20,
                        //añadir cacas
                    }
                }
        }
    }
    return {
        ...state,
        playingBarLevel: state.playingBarLevel,
        cleanBarLevel: state.cleanBarLevel,
        foodBarLevel: state.foodBarLevel
    };
}