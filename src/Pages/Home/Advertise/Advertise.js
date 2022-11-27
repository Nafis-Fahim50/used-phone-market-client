import React from 'react';
import { Link } from 'react-router-dom';

const Advertise = ({ product }) => {
    console.log(product);
    const { model, img, resalePrice, description, category_id} = product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='w-full' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{model}</h2>
                <p>Specification: {description}</p>
                <p>Price: Tk. {resalePrice}</p>
                <div className="card-actions">
                    <Link to={`/category/${category_id}`}>
                        <button className="btn btn-primary">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Advertise;