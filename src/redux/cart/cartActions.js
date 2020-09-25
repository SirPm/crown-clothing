import CartActionTypes from './cartTypes';

export const toggleCartDropdown = () => {
    return {
        type: CartActionTypes.TOGGLE_CART_DROPDOWN
    }
}

export const addItem = (item) => {
    return {
        type: CartActionTypes.ADD_ITEM,
        payload: item
    }
}