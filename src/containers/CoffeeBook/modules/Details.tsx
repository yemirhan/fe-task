import React from 'react'
import { useSelector } from 'react-redux'
import { CoffeeMini } from '../components/CoffeeMini'

export const Details: React.FC = () => {
    const $coffee = useSelector(state => state.$coffee)
    return (
        <main className="col-span-8">
            {$coffee.data
            .filter(coffee => coffee.category.includes($coffee.filter))
            .filter(coffee => (coffee.title + " "+ coffee.description).includes($coffee.search))
            .map(coffee => <CoffeeMini coffee={coffee} />)}
        </main>
    )
}
