import React from 'react';
import { render, screen } from '@testing-library/react';
import { CoffeeMini } from '../containers/CoffeeBook/components/CoffeeMini'
import coffees from '../db/coffees.json'

test('Renders Coffee Mini Block', () => {
    const coffee = coffees[Math.floor(Math.random() * coffees.length - 1)]
    render(<CoffeeMini coffee={coffee} />);
    const title = screen.getByText(coffee.title);
    const description = screen.getByText(coffee.description);
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
});
