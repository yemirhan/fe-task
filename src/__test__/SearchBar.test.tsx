import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SearchBar } from '../components/SearchBar'

test('Renders Coffee Mini Block', () => {
    const onChange = jest.fn()
    const { getByLabelText } = render(<SearchBar defaultValue={""} onChange={onChange} />)
    fireEvent.change(getByLabelText(/search_input/i), { target: { value: 'johndoe' } })
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith('johndoe')
});
