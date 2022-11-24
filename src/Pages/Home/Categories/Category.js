import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { name, img, info, _id } = category;
    return (
        <div className="card card-compact w-96  shadow-xl">
            <figure><img className='h-72' src={img} alt="phones" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{info}</p>
                <div className="card-actions">
                    <Link to={`/category/${_id}`} className='w-full'>
                        <button className="btn btn-primary w-full">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Category;