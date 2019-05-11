
const defaultState = {
    ewwState: "standBy",
    levelWaterBar: 20,
    displayPooh: "",
}

export const poohReducer = (state = defaultState, action) => {
    if (action.type === 'POOH') {
        return {
            ewwState: {
                appearenceEww: "standBy",
                hasPooh: true
            },
            levelWaterBar: state.levelWaterBar + 20,
            displayPooh: "none",
        }
    }
    return state;
}



