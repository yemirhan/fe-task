import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SearchBar } from '../../../components/SearchBar'
import { $set_search } from '../../../redux/coffee.reducer'

export const Sidebar: React.FC = () => {
    const $coffee = useSelector(state => state.$coffee)
    const dispatch = useDispatch()
    return (
        <aside className="col-span-4 border-r border-gray-300 py-8">
            <SearchBar value={$coffee.search} onChange={(srch) => dispatch($set_search(srch))} placeholder="Search" />
        </aside>
    )
}
