import React from 'react';

const Product = ({product}) => {
    console.log(product)
    const {img,model} = product;
    return (
        <div>
            <h1>{model}</h1>
            <img src={img} alt="" />
        </div>
    );
};

export default Product;