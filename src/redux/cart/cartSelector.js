import { createSelector } from 'reselect';

// input selector
const selectCart = (state) => state.cart;

export const selectCartItems = createSelector( [selectCart], (cart) => {
    return cart.cartItems
} )

export const selectCartItemCount = createSelector( [selectCartItems], (cartItems) => {
    return cartItems.reduce( ( accumulatedQuantity, cartItem ) => {
        return accumulatedQuantity + cartItem.quantity
    }, 0 )
} )
