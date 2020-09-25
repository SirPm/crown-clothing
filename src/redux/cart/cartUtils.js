export const addItemToCart = ( cartItems, cartItemToAdd ) => {
    const existingCartItems = cartItems.find( cartItem => cartItem.id === cartItemToAdd.id )
    
    if(existingCartItems) {
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
