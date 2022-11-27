import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Product = ({ product,setProductData}) => {
    const { img, model, location, resalePrice, orginalPrice, usedYear, postTime, sellerName } = product;
    // console.log(product);

    const {data: user = {}} = useQuery({
        queryKey: ['user', product?.email],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/user/verifySeller/${product?.email}`);
            const data = await res.json()
            return data;
        }
    })

    console.log(user);
    return (
        <div className="card lg:card-side shadow-xl">
            <figure><img className='h-96 w-72' src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{model}</h2>
                <p>
                    Seller Name: {sellerName}
                    {user.verified && <FaCheckCircle className='inline ml-2 text-blue-500'></FaCheckCircle>}
                </p>
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