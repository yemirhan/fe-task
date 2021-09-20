import React from 'react'
import { InputProps, onChangeProps } from '../@types/InputProps'

export const Input: React.FC<InputProps> = ({ defaultValue = "", value = "", onChange, placeholder = "", ...props }) => {
    return (
        <input
            value={value}
            onChange={({ target: { value } }: onChangeProps) => onChange(value)}
            placeholder={placeholder}
            {...props}
            type="text"
            aria-label="search_input"
            className="w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-200 focus:outline-none transition-all"
        />
    )
}
