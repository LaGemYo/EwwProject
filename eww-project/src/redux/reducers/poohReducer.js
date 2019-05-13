
const defaultState = {
   displayPooh: "block",
}

export const poohReducer = (state = defaultState, action) => {
    if (action.type === 'POOH') {
        return {
            displayPooh: "none"
        }
    }
    return state;
}
