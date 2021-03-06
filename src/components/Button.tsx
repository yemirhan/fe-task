import React from 'react'

interface ButtonProps {
    children: any,
    onClick: () => void,
    selected: boolean,
    props?: any,
    name?: string
}

export const Button: React.FC<ButtonProps> = ({ children, onClick = () => { }, selected = false, name, ...props }) => {
    return (
        <button name={name} onClick={onClick} className={`w-full px-4 py-1 capitalize ${selected ? "text-lightBlue-500" : "text-gray-600"} bg-white hover:bg-gray-100 transition-colors rounded-lg text-left`}>
            {children}
        </button>
    )
}
