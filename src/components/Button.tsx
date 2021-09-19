import React from 'react'

interface ButtonProps {
    children: any,
    onClick: () => void
}

export const Button: React.FC<ButtonProps> = ({ children, onClick = () => { } }) => {
    return (
        <button onClick={onClick} className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-300 transition-colors rounded-lg">
            {children}
        </button>
    )
}
