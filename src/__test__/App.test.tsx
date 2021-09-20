import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import coffees from '../db/coffees.json'

test('renders all coffees text', () => {
  render(
    <App />
  );
  const linkElement = screen.getByText(/All Coffees/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders hot button', () => {
  render(
    <App />
  );
  const linkElement = screen.getByRole("button", { name: "hot" });
  expect(linkElement).toBeInTheDocument();
});

test('renders all buttons', () => {
  render(
    <App />
  );
  const linkElement = screen.getAllByRole("button");
  expect(linkElement.length).toBe(1 + [...new Set((coffees || []).map((coffee) => coffee.category))].length);
});