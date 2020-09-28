export const addItemToCart = ( cartItems, cartItemToAdd ) => {
    const existingCartItem = cartItems.find( cartItem => cartItem.id === cartItemToAdd.id )
    
    if(existingCartItem) {
        // use the map() on the cartItems array to return an array and only modify the
        // quantity property of the objects in the array if it already exists
        return cartItems.map( cartItem => (
            cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        ))
    }

    // spread the contents of the cartItems array. Note: the contents are array
    // after spreading them add a new content i.e an object which is the cartItemToAdd
    // then create a quantity property on the cartItemToAdd object
    return [ ...cartItems, { ...cartItemToAdd, quantity: 1 } ]
}

export const removeCartItem = ( cartItems, cartItemToRemove ) => {
    const existingCartItem = cartItems.find( cartItem => cartItem.id === cartItemToRemove.id );

    if( existingCartItem.quantity === 1 ) {
        return cartItems.filter( cartItem => cartItem.id !== cartItemToRemove.id )
    }

    return cartItems.map( cartItem => cartItem.id === cartItemToRemove.id ? ({
        ...cartItem,
        quantity: cartItem.quantity - 1
    }) : (
        cartItem
    ) )

}
