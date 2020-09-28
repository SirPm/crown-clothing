import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HWPDWASTqDpSl350rOk4xsYgL0TQ40gIu9PjnIkUau73HCuLLSLFZuiIzADjPRAkmr79ksepA8WkQid4dY53zyh00T9cjCcTL';

    const onToken = token => {
        console.log(token)
        alert('Payment successfull!')
    }

    return (
        <StripeCheckout
            name='Crown Clothing Pm'
            label='Pay Now'
            token={onToken}
            amount={priceForStripe}
            description={`Total Money is ${price}`}
            panelLabel='Start Payment Here'
            stripeKey={publishableKey}
            shippingAddress
            billingAddress
        />
    )
}

export default StripeButton;