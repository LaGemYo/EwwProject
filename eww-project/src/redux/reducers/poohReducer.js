
const defaultState = {
   // hidePooh: false,
   displayPooh: "block",
}

export const poohReducer = (state = defaultState, action) => {
    if (action.type === 'POOH') {
        return {
            //hidePooh: true,
            displayPooh: "none"
        }
    }
    return state;
}



