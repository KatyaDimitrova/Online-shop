import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ( { price }) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51K4mA4EsiYNzBlcgKbL8YvzD5VGvt43h51y1FUZ4TKaMgI4f3QDlAc5PS7v4EESb8Q3xSnDAnf51vIAh3Zy9kZQa00FjC065t8';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
          label='Pay Now'
          name='Online Shop Ltd.'
          billingAddress
          shippingAddress
          image='https://svgshare.com/i/CUz.svg'
          description={`Your total is $${price}`}
          amount={priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;