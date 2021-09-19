import React from 'react'
import { Entry } from '../../../redux/coffee.reducer'

export const CoffeeMini: React.FC<{ coffee: Entry }> = ({ coffee: { category, description, id, ingredients, title }, children }) => {
    return (
        <article className="w-full h-auto border-b border-gray-200 p-3 m-3">
            <h5 className="font-semibold text-xl mb-2">{title}</h5>
            <p className="mb-2">{description}</p>
            <ul className="flex flex-row space-x-2 text-gray-600 text-sm">
                <li>Ingredients:</li>
                {
                    ingredients
                        .map(ingredient =>
                            <li key={`${id}_${ingredient}`}>
                                {ingredient.replaceAll("*", "")}
                            </li>
                        )
                }
            </ul>
        </article>
    )
}
