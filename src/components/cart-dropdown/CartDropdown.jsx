import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cartSelector';
import { toggleCartDropdown } from '../../redux/cart/cartActions';

import CartItem from '../cart-item/CartItem';
import CustomButton from '../custom-button/CustomButton.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => {

    const handleClick = () => {
        history.push('/checkout');
        dispatch( toggleCartDropdown() )
    }

    return (
        <div className='cart-dropdown'>
            <div className="cart-items">
                {
                    cartItems.length ? (
                        cartItems.map( cartItem => {
                            return <CartItem key={cartItem.id} cartItem={cartItem} />
                        })
                    ) : (
                        <span className='empty-message'>Your cart is empty!</span>
                    )
                }
            </div>
            <CustomButton onClick={handleClick}>
                Go To Checkout
            </CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})


// if we don't supply the second parameter of mapDispatchToProps in the 
// connect function, the dispatch function gets passed as a props to the
// component. This is useful if we just want to perform one simple dispatch action
// so we won't need to write the mapDispatchToProps for something so small e.g the
// toggleCartDropdown
export default withRouter( connect(mapStateToProps)(CartDropdown) );
