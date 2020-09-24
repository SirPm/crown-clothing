import CartActionTypes from './cartTypes';

const toggleCartDropdown = () => {
    return {
        type: CartActionTypes.TOGGLE_CART_DROPDOWN
    }
}

export default toggleCartDropdown;