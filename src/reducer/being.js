export function being(state = [], action) {
    if (action.type === "ADD_BEING") {
        return [
            ...state,
            action.payload
        ].sort(sort)
    }

    if (action.type === "RANDOM_BEING") {
        return action.payload.sort(sort)
    }

    if (action.type === "CLEAN") {
        return []
    }

    if (action.type === "LIFE_CYCLE") {
        return action.payload
    }

    return state
}


function sort(a, b) {
    return a - b
}