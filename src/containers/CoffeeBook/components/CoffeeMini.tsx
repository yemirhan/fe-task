import React from 'react'
import { Entry } from '../../../redux/coffee.reducer'
import styled from 'styled-components'

const CoffeeArticle = styled.article`
    width: 100%;
    height: auto;
    border-bottom: 1px solid rgb(229, 231, 235);
    padding: 12px;
    margin: 12px;
    &:not(&:last-child) {
        margin-bottom: 8px !important;
    }
`

export const CoffeeMini: React.FC<{ coffee: Entry }> = ({ coffee: { category, description, id, ingredients, title }, children }) => {
    return (
        <CoffeeArticle>
            <h5 className="font-semibold text-2xl font-sans">{title}</h5>
            <p>{description}</p>
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
        </CoffeeArticle>
    )
}
