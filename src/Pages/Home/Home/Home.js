import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Delivary from '../Delivary/Delivary';

const Home = () => {
    const advertiseProducts = useLoaderData();
    const {loading} = useContext(AuthContext);
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <div>
                <h1 className='text-3xl font-bold my-5 text-center'>Advertise Product</h1>
                <div>
                    {
                        advertiseProducts &&
                        advertiseProducts.map(product => <Advertise
                        key={product._id}
                        product={product}></Advertise>)
                    }
                </div>
            </div>
            <Delivary></Delivary>
        </div>
    );
};

export default Home;