import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import Category from './Category';

const Categories = () => {
    // const [categories, setCategories] = useState([]);

    // axios.get('http://localhost:5000/categories')
    // .then(data => setCategories(data.data));

    const {data: categories = []} = useQuery({
        queryKey: ['categories'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data;
        }
    })

    if(!categories.length){
       return <Loading></Loading>
    }


    return (
        <div className='mt-5'>
            <h1 className='text-3xl font-bold text-center'>Browse items by category</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
                {
                    categories.map(category=> <Category
                    key={category._id}
                    category={category}></Category>)
                }
            </div>
        
        </div>
    );
};

export default Categories;