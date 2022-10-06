import React from 'react';
import Image from 'next/image';
import logo from '../public/badgerlabs-logo.png'
function Navbar() {
    return (
        <nav className='navbar'>
            <Image
                src={logo}
                alt="Picture of the author"
                width={227.6}
                height={60}
            />
            <div className="features">
                <ul className="feature-list">
                    <li className="feature-item">Feature 1</li>
                    <li className="feature-item">Feature 2</li>
                    <li className="feature-item">Feature 3</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
