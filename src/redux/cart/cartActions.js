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

export const removeCartItem = (item) => {
    return {
        type: CartActionTypes.REMOVE_CART_ITEM,
        payload: item
    }
}

export const deleteItem = (item) => {
    return {
        type: CartActionTypes.DELETE_ITEM,
        payload: item
    }
}
