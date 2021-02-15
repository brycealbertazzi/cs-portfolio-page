import React from 'react'
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
    let page = useLocation().pathname;

    return (
        <nav className="navbar bg-dark py-3 justify-content-between">
            <h1 className="text-light">Bryce Albertazzi Portfolio Projects</h1>
            <div>
                {page == "/" ? 
                <Link to="/about" className="btn btn-outline-light about-btn">About Bryce</Link> :
                <Link to="/" className="btn btn-outline-light about-btn">Home</Link> 
                }
            </div>
        </nav>
    )
}
