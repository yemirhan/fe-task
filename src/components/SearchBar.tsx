import React from 'react'
import { InputProps } from '../@types/InputProps'
import SearchIcon from '../assets/SearchIcon.svg'
import { Input } from './Input'



export const SearchBar: React.FC<InputProps> = ({ defaultValue, onChange, value, placeholder="", ...props }) => {
    return (
        <div className="w-full h-8 inline-flex items-center space-x-2 px-2">
            <img src={SearchIcon} alt="" className="w-5 h-5" />
            <Input defaultValue={defaultValue} value={value} onChange={onChange} placeholder={placeholder} />
        </div>
    )
}
