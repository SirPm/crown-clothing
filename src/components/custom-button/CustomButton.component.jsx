import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleSignIn, inverted, isCartDropDown, ...otherProps}) => (
    <button className={` ${ inverted ? 'inverted' : '' } ${ isGoogleSignIn ? 'google-sign-in' : '' } ${ isCartDropDown ? 'cart-drop-down' : '' } custom-button `} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;
