import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {
    const { data: sellers = [] } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allSellers')
            const data = await res.json()
            return data;
        }
    })
    return (
        <div>
            <h1 className='text-2xl font-bold text-green-500 my-5'>All Sellers</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((seller,i)=><tr
                            key={seller._id}>
                            <th>{i+1}</th>
                            <td>{seller.name}</td>
                            <td>{seller.email}</td>
                            <td>
                                <button className='btn btn-sm btn-error hover:bg-red-600'>Delete</button>
                            </td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;