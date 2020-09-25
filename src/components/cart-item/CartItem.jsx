import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ cartItem: { imageUrl, name, price, quantity }}) => {
    return (
        <div className='cart-item'>
            <img src={imageUrl} alt="img"/>
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="name">{quantity} X ${price}</span>
            </div>
        </div>
    )
}

export default CartItem;
