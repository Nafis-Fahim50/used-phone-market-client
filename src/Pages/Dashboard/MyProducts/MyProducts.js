import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import ConfirmModal from '../../Shared/ConfirmModal/ConfirmModal';
import Loading from '../../Shared/Loading/Loading';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const [deleteProduct, setDeleteProduct] = useState(null)

    const url = `http://localhost:5000/addProducts?email=${user?.email}`

    const { data: addProducts = [], isLoading, refetch } = useQuery({
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

    const closeModal = () => {
        setDeleteProduct(null);
    }

    const handleDeleteProduct = product => {
        fetch(`http://localhost:5000/addProducts/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success(`Succussfully deleted ${product.model}`)
                }
            })

    }

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
                                <label onClick={() => setDeleteProduct(product)} htmlFor="confirm-modal" className="btn btn-sm btn-error mt-4 hover:bg-red-600">Deleted</label>
                                <td>
                                    <Link to={`/advertise/${product._id}`}>
                                        <button className='btn btn-primary text-white btn-sm'>Advertised</button>
                                    </Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteProduct && <ConfirmModal
                    title={`Are you sure want to delete?`}
                    message={`If you delete ${deleteProduct?.model}, it can't be undone.`}
                    closeModal={closeModal}
                    modalData={deleteProduct}
                    successAction={handleDeleteProduct}
                    succesButtonName='Delete'
                ></ConfirmModal>
            }
        </div>
    );
};

export default MyProducts;