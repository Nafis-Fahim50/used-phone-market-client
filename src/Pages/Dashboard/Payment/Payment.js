import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const booking = useLoaderData();
    const {model, price} = booking;

    return (
        <div>
           <h1 className='text-2xl my-5 font-bold text-primary'>Payment</h1>
            <h3 className="text-xl">Payment for {model}</h3>
            <p className="mt-2">Please pay <strong className='text-red-500'>BDT {price} Tk</strong> for {model} device.</p> 
        </div>
    );
};

export default Payment;