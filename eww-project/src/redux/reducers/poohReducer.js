
const defaultState = {
    allPoohs: [
        { id: "pooh1", visible: false, position: "100px 0 0 100px"},
        { id: "pooh2", visible: false, position: "100px 0 0 80px"},
        { id: "pooh3", visible: false, position: "100px 0 0 60px"},
        { id: "pooh4", visible: false, position: "100px 0 0 20px"},
    ]
}

export const poohReducer = (state = defaultState, action) => {
    if (action.type === 'POOH') {
        return {
            ...state
        }
    }
    return state;
}
