import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Loading from '../Shared/Loading/Loading';
import Product from './Product';

const Products = () => {
    const {loading} = useContext(AuthContext);
    const products = useLoaderData();
    
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-xl font-bold text-green-500'>Total Products: {products.length}</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 my-10'>
                {
                   products.map(product=> <Product
                    key={product._id}
                    product={product}></Product>) 
                }
            </div>
        </div>
    );
};

export default Products;