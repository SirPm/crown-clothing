import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItemCount } from '../../redux/cart/cartSelector';
import { ReactComponent as ShopIcon } from '../../assets/11.2 shopping-bag.svg.svg';
import { toggleCartDropdown } from '../../redux/cart/cartActions';

import './cart-icon.styles.scss';


const CartIcon = ({ toggleHidden, itemCount }) => {
    // console.log(toggleHidden)

    return (
        <div className='cart-icon' onClick={ toggleHidden }>
            <ShopIcon className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemCount
})

const mapDispatchToProps = (dispatch) => {
    return {
        toggleHidden: () => {
            dispatch(toggleCartDropdown())
        }
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(CartIcon);
