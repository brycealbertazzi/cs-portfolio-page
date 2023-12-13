import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

export const Navbar = () => {
    let page = useLocation().pathname;
    return (
        <nav className="navbar py-3 justify-content-between border-bottom border-light" style={{backgroundColor: "#181818"}}>
            <div></div>
            <h1 style={{color: "#e9ecef"}}>Bryce Albertazzi Portfolio Projects</h1>
            <div>
                {page !== "/" &&
                    <Link to="/" className="btn btn-outline-light about-btn">Home</Link> 
                }
            </div>
        </nav>
    )
}
