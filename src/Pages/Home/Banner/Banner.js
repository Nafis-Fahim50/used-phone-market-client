import React from 'react';
import phone from '../../../images/phone.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${phone})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content  text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Mobile Resale Market</h1>
                    <p className="mb-5">Here you can find different kinds of used mobile. Such as iPhone, SmartPhone, Tablet, Featues Phone. Buy any phone with <span className='font-bold'>10% discount</span>.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;