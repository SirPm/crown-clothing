import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShopIcon } from '../../assets/11.2 shopping-bag.svg.svg';
import toggleCartDropdown from '../../redux/cart/cartAction';

import './cart-icon.styles.scss';


const CartIcon = ({toggleHidden}) => {
    // console.log(toggleHidden)

    return (
        <div className='cart-icon' onClick={ toggleHidden }>
            <ShopIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleHidden: () => {
            dispatch(toggleCartDropdown())
        }
    }
}

export default connect( null, mapDispatchToProps )(CartIcon);
