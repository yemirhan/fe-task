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
    data: Array<Entry>,
    categories: Array<string> | unknown
}
const initialState = {
    search: "",
    filter: "",
    categories: [],
    data: []

} as state
interface action {
    type: String,
    payload: any
}

const reducer = (state = initialState, { type, payload }: action): state => {
    switch (type) {
        case "FETCH_DATA":
            return { ...state, data: payload, categories: [... new Set((payload || []).map((coffee:Entry) => coffee.category))] }
        case "SEARCH":
            return { ...state, search: payload }

        default:
            return state
    }
}

export default reducer

export const $set_search: Function = (search: string) => {
    return { type: "SEARCH", payload: search }
}
export const $fetch_data = (data: Array<Entry>) => {
    return { type: "FETCH_DATA", payload: data }
}