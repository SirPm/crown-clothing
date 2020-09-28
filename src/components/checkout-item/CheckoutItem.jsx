import React from 'react';
import { connect } from 'react-redux';

import { deleteItem, removeCartItem, addItem } from '../../redux/cart/cartActions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, deleteCartItem, removeCartItem, addCartItem }) => {

    const { imageUrl, name, quantity, price } = cartItem;

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="img"/>
            </div>
            <span className="name">{name}</span>
            <div className="quantity">
                <div className='arrow' onClick={ () => { removeCartItem(cartItem)} }>&#10094;</div>
                <div>{quantity}</div>
                <div className='arrow' onClick={ () => { addCartItem(cartItem) } }>&#10095;</div>
            </div>
            <span className="price">${price}</span>
            <div className="remove-button" onClick={ () => { deleteCartItem(cartItem) } }>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCartItem: (cartItem) => {
            dispatch( deleteItem(cartItem) )
        },
        removeCartItem: (cartItem) => {
            dispatch( removeCartItem(cartItem))
        },
        addCartItem: (cartItem) => {
            dispatch( addItem(cartItem))
        }
    }
}

export default connect( null, mapDispatchToProps )(CheckoutItem);
