import React from 'react';

function Navbar() {
    return (
        <nav style={{ padding: '10px', backgroundColor: '#333', color: '#fff' }}>
            <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around' }}>
                <li><a href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</a></li>
                <li><a href="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</a></li>
                <li><a href="/projects" style={{ color: '#fff', textDecoration: 'none' }}>Projects</a></li>
                <li><a href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
