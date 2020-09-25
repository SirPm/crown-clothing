import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/' >
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                </Link>
                {
                    currentUser ?
                    <Link className='option' to='/' onClick={ () => auth.signOut() }>
                        SIGN OUT
                    </Link>
                    :
                    <Link className='option' to='/sign-in-and-sign-up'>
                        SIGN IN
                    </Link>
                }
                <CartIcon />
            </div>
            {
                hidden ? null : <CartDropdown /> 
            }
        </div>
    ) 
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden }}) => {
    return {
        currentUser,
        hidden
    }
}

export default connect(mapStateToProps)(Header);
