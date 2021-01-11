import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header__logo"
                    alt="amazon logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                />
            </Link>
            
            <div className="header__searchBox">

            </div>

            
        </div>
    )
}

export default Header;
