import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import coffees from '../db/coffees.json'

test('renders all coffees text', () => {
    render(
        <App />
    );
    const linkElement = screen.getByText(/All Coffees/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders no entries with unknown search', () => {
    render(
        <App />
    );

    fireEvent.change(screen.getByLabelText(/search_input/i), { target: { value: 'johndoe' } })
    const entries = screen.queryAllByLabelText("coffee_entry")
    expect(entries.length).toBe(0)
});
test('renders entries with black in it', () => {
    render(
        <App />
    );

    fireEvent.change(screen.getByLabelText(/search_input/i), { target: { value: 'black' } })
    const entries = screen.queryAllByLabelText("coffee_entry")
    const list =
        coffees
            .filter(coffee => coffee.category.includes(""))
            .filter(coffee => (coffee.title + " " + coffee.description).includes("black")).length
    expect(entries.length).toBe(list)
    fireEvent.change(screen.getByLabelText(/search_input/i), { target: { value: '' } })
});

test('render every coffee that is iced', async () => {
    render(
        <App />
    );
    await fireEvent(screen.getByRole("button", { name: "iced" }), new MouseEvent("click", { bubbles: true }))
    const entries = screen.getAllByLabelText("coffee_entry")

    const list =
        coffees
            .filter(coffee => coffee.category.includes("iced")).length
    expect(entries.length).toBe(list)
});