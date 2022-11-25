import React from 'react';

const Product = ({ product,setProductData }) => {
    const { img, model, location, resalePrice, orginalPrice, usedYear, postTime, sellerName } = product;
    return (
        <div className="card lg:card-side shadow-xl">
            <figure><img className='h-96 w-72' src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{model}</h2>
                <p>Seller Name: {sellerName}</p>
                <p>Locatin: {location}</p>
                <p>Resale Price: Tk {resalePrice}</p>
                <p>Orginal Price: Tk {orginalPrice}</p>
                <p>Uses Time: {usedYear}</p>
                <p>Post Time: <span className='italic text-gray-400'>{postTime}</span></p>
                <div className="card-actions">
                    <label onClick={()=>setProductData(product)} htmlFor="booking-modal" className="btn">Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default Product;