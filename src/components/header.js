import React from 'react'
import { MdPhoto } from 'react-icons/md';


const Header = () => {
    return (
        <header>
            <div className="header-title">
                <h1>Photo FIlter Online </h1>
                <span className="header-icon"><MdPhoto /></span>
            </div>
        </header>
    )
}

export default Header
