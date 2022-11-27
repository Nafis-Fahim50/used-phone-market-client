import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import BookingModal from './BookingModal';
import Product from './Product';

const Products = () => {
    const products = useLoaderData();
    const [productData, setProductData] = useState(null);

    if (!products.length) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-xl font-bold text-green-500'>Total Products: {products.length}</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 my-10'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        setProductData={setProductData}
                    ></Product>)
                }
            </div>
            {
                productData && <BookingModal
                    productData={productData}
                    setProductData={setProductData}
                ></BookingModal>
            }

        </div>
    );
};

export default Products;