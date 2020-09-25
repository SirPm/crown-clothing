import React from 'react';
import { connect } from 'react-redux';

import { selectCartItems } from '../../redux/cart/cartSelector';
import CartItem from '../cart-item/CartItem';
import CustomButton from '../custom-button/CustomButton.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => {
    return (
        <div className='cart-dropdown'>
            <div className="cart-items">
                {
                    cartItems.map( cartItem => {
                        return <CartItem key={cartItem.id} cartItem={cartItem} />
                    })
                }
            </div>
            <CustomButton>Go To Checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cartItems: selectCartItems(state)
    }
}

export default connect(mapStateToProps)(CartDropdown);
