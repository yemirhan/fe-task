interface Entry {
    title: String,
    description: String,
    ingredients: Array<String>,
    category: String,
    id: Number
}
interface state {
    search: string,
    filter: string,
    data: Array<Entry>
}
const initialState = {
    search: "",
    filter: "All",
    data: []

} as state
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

export const $set_search: Function = (search: string) => {
    return { type: "SEARCH", payload: search }
}