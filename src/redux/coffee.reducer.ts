const initialState = {

}
interface action {
    type: String,
    payload: Object
}

const reducer = (state = initialState, { type, payload }: action) => {
    switch (type) {

        case "SEARCH":
            return { ...state, ...payload }

        default:
            return state
    }
}

export default reducer