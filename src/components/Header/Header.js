import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../../StateProvider';

function Header() {
    // state = current state of the dataLayer
    // can further destructure state into basket 
    const [{ basket }, dispatch] = useStateValue();

    // console.log(basket);

    return (
        <div className="header">
            {/* Amazon Icon */}
            <Link to="/">
                <img
                    className="header__logo"
                    alt="amazon logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                />
            </Link>

            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            {/* nav-right */}
            <div className="header__nav">
                <Link className='header__link' to='/login'>
                    <div className="header__option">
                    <span className='header__optionLineOne'>Hello Daniel</span>
                    <span className='header__optionLineTwo'>Sign In</span>
                    </div>
                </Link>

                <Link className='header__link' to='/'>
                    <div className="header__option">
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>& Orders</span>
                    </div>
                </Link>

                <Link className='header__link' to='/'>
                    <div className="header__option">
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                    </div>
                </Link>

                <Link className='header__link' to='/checkout'>
                    <div className="header__basket">
                        <ShoppingBasketIcon className='header__basketIcon' />
                        <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
                    </div>
                </Link>

            </div>
            
        </div>
    )
}

export default Header;
