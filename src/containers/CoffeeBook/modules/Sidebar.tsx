import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../../../components/Button'
import { SearchBar } from '../../../components/SearchBar'
import { $set_filter, $set_search } from '../../../redux/coffee.reducer'

export const Sidebar: React.FC = () => {
    const $coffee = useSelector(state => state.$coffee)
    console.log($coffee);

    const dispatch = useDispatch()
    return (
        <aside className="col-span-4 border-r border-gray-300 py-8 ">
            <SearchBar value={$coffee?.search || ""} onChange={(srch) => dispatch($set_search(srch))} placeholder="Search" />
            <div className="flex flex-col space-y-2 mt-4 px-2"><Button onClick={() => dispatch($set_filter(""))}>All Coffees</Button>
                {$coffee.categories.map(category => <Button onClick={() => dispatch($set_filter(category))}>{category}</Button>)}</div>
        </aside>
    )
}
