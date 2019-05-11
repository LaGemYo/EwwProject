
const defaultState = {
    hidePooh: false,
}

export const poohReducer = (state = defaultState, action) => {
    if (action.type === 'POOH') {
        return {
            hidePooh: true,
        }
    }
    return state;
}



