import React from 'react';
import img from '../../images/404.jpg'

const Error = () => {
    return (
        <div>
            <h1 className='mt-5 text-2xl text-red-500 font-bold text-center'>Sorry!Page Not Found</h1>
            <div className='flex justify-center items-center'>
                <img className='my-5 w-2/3 rounded-xl' src={img} alt="" />
            </div>
        </div>
    );
};

export default Error;