import React from 'react'
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
    let page = useLocation().pathname;

    return (
        <nav className="navbar py-3 justify-content-between border-bottom border-light" style={{backgroundColor: "#181818"}}>
            <h1 className="" style={{color: "var(--gray-200)"}}>Bryce Albertazzi Portfolio Projects</h1>
            <div>
                {page == "/" ? 
                <Link to="/about" className="btn btn-outline-light about-btn">About Bryce</Link> :
                <Link to="/" className="btn btn-outline-light about-btn">Home</Link> 
                }
            </div>
        </nav>
    )
}
