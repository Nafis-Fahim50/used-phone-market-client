import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Checkout from './Checkout';

const stripePromise = loadStripe(process.env.REACT_APP_pk)

const Payment = () => {
    const booking = useLoaderData();
    const {model, price} = booking;
    console.log(booking);

    return (
        <div>
           <h1 className='text-2xl my-5 font-bold text-primary'>Payment</h1>
            <h3 className="text-xl">Payment for {model}</h3>
            <p className="mt-2">Please pay <strong className='text-red-500'>BDT {price} Tk</strong> for {model} device.</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <Checkout
                    booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;