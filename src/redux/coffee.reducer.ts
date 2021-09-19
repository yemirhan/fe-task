export interface Entry {
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
    categories: Array<string>
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
            return { ...state, data: payload, categories: unique(payload) }
        case "SEARCH":
            return { ...state, search: payload }
        case "CATEGORY":
            return { ...state, filter: payload }

        default:
            return state
    }
}

export default reducer

export const $set_search: Function = (search: string) => {
    return { type: "SEARCH", payload: search }
}
export const $set_filter: Function = (category: string) => {
    return { type: "CATEGORY", payload: category }
}
export const $fetch_data = (data: Array<Entry>) => {
    return { type: "FETCH_DATA", payload: data }
}


const unique: Function = (arr: Array<Entry>) => {
    return [...new Set((arr || []).map((coffee: Entry) => coffee.category))]
}