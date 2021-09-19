import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../../../components/Button'
import { SearchBar } from '../../../components/SearchBar'
import { $set_filter, $set_search } from '../../../redux/coffee.reducer'

export const Sidebar: React.FC = () => {
    const $coffee = useSelector(state => state.$coffee)
    const dispatch = useDispatch()
    return (
        <aside className="col-span-4 border-b md:border-r md:border-b-0 border-gray-300 pt-8 pb-2 h-auto md:h-screen sticky top-0 left-0 bg-white">
            <SearchBar value={$coffee?.search || ""} onChange={(srch) => dispatch($set_search(srch))} placeholder="Search" />
            <div className="flex flex-col space-y-2 mt-4 px-2">
                <Button
                    selected={$coffee.filter === ""}
                    onClick={() => dispatch($set_filter(""))}
                >
                    All Coffees
                </Button>
                {$coffee.categories
                    .map(category =>
                        <Button
                            selected={$coffee.filter === category}
                            onClick={() => dispatch($set_filter(category))}
                        >
                            {category}
                        </Button>
                    )
                }
            </div>
        </aside>
    )
}
