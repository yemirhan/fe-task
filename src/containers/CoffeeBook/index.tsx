import React from 'react'
import { Details } from './modules/Details'
import { Sidebar } from './modules/Sidebar'

const CoffeeBook: React.FC<any> = ({ ...props }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 md:gap-2" >
            <Sidebar />
            <Details />
        </div>
    )
}
export default CoffeeBook