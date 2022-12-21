import React from 'react';
import { Link } from 'react-router-dom';
import delivary from '../../../images/delivary.jpg'
const Delivary = () => {
    return (
        <div >
            <div className="hero lg:shadow-lg rounded-lg my-10">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={delivary} alt='product-delivary' className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Order Online to Get Delivery Free!!</h1>
                        <p className="py-6">Choose from over 4,800 items that can be delivered to your destination. Order online and enjoy our Free Shipping with Buyer Protection program, which means that we’ll replace the item for FREE.</p>
                        <Link to='/categories'><button className="btn btn-primary">Shop Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Delivary;