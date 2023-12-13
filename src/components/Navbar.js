import React from 'react'

export const Navbar = () => {

    const style = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#181818',
    }

    return (
        <nav className="navbar py-3 justify-content-between border-bottom border-light" style={style}>
            <h1 style={{color: "#e9ecef", alignSelf: 'center'}}>Bryce Albertazzi Portfolio Projects</h1>
        </nav>
    )
}
