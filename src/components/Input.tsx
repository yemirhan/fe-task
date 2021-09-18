import React from 'react'
import { InputProps } from '../@types/InputProps'

export const Input: React.FC<InputProps> = ({ defaultValue = "", value = "", onChange, placeholder = "", ...props }) => {
    return (
        <input
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            {...props}
            type="text"
            className="w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-200 focus:outline-none transition-all"
        />
    )
}
