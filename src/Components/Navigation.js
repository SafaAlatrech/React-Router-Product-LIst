import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
            <nav >
                <ul className="menu">
                 <Link to="/"><li className="menu-item">Home</li></Link>
                 <Link to="/productlist"><li className="menu-item"  >Product List</li></Link>
                 <Link to="/login"><li className="menu-item">Login</li></Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation
