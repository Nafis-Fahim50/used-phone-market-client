import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useBuyer from '../../Hooks/useBuyer';

const Product = ({ product, setProductData, handleReport }) => {
    const { img, _id, model, location, resalePrice, orginalPrice, usedYear, postTime, sellerName } = product;

    const { user: currentUser } = useContext(AuthContext)
    const [isBuyer] = useBuyer(currentUser?.email);

    const { data: user = {} } = useQuery({
        queryKey: ['user', product?.email],
        queryFn: async () => {
            const res = await fetch(`https://used-phone-market-server.vercel.app/user/verifySeller/${product?.email}`);
            const data = await res.json();
            return data;
        },
    })

    return (
        <div className="card lg:card-side shadow-xl">
            <figure><img className='h-96 w-72' src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{model}</h2>
                <p>
                    Seller Name: {sellerName}
                    {user.verified && <FaCheckCircle className='inline ml-2 text-blue-500'></FaCheckCircle>}
                </p>
                <p>Location: {location}</p>
                <p>Resale Price: Tk {resalePrice}</p>
                <p>Orginal Price: Tk {orginalPrice}</p>
                <p>Uses Time: {usedYear}</p>
                <p>Post Time: <span className='italic text-gray-400'>{postTime}</span></p>
                <div className="card-actions">

                    {
                        isBuyer ? <>
                            <label onClick={() => setProductData(product)} htmlFor="booking-modal" className="btn w-full btn-primary">Book Now</label>
                            <button onClick={() => handleReport(_id)} className='bg-red-400 px-5 py-3 rounded-lg font-bold hover:bg-red-600 w-full text-white'>Report</button>
                        </>
                            :
                            <>
                                <label onClick={() => setProductData(product)} htmlFor="booking-modal" disabled className="btn w-full btn-primary">Book Now</label>
                            </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Product;