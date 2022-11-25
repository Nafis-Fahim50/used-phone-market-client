import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyProducts = () => {
    const { user } = useContext(AuthContext)

    const url = `http://localhost:5000/addProducts?email=${user?.email}`

    const { data: addProducts = [], isLoading } = useQuery({
        queryKey: ['addProducts', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-2xl font-bold my-5 text-green-500'>My Products</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Advertised</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            addProducts.map((product, i) => <tr
                                key={product._id}>
                                <th>{i + 1}</th>
                                <td>{product.model}</td>
                                <td>{product.resalePrice}</td>
                                <td>
                                    {
                                        product.resalePrice && !product.paid && <p className='text-green-500 font-bold'>Avaliable</p>
                                    }
                                    {
                                        product.resaleprice && product.paid && <span className='text-red-500 font-bold'>Sold</span>
                                    }
                                </td>
                                <td><button className='btn btn-error text-white btn-sm'>Delete</button></td>
                                <td><button className='btn btn-primary text-white btn-sm'>Advertised</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;