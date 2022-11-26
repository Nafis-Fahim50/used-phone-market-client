import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmModal from '../../Shared/ConfirmModal/ConfirmModal';
import Loading from '../../Shared/Loading/Loading';

const AllSellers = () => {
    const [deletedSeller, setDeletedSeller] = useState(null)

    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allSellers', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data;
        }
    })

    const closeModal = () =>{
       setDeletedSeller(null);
    }

    const handleDeleteSeller = seller => {
        fetch(`http://localhost:5000/allSellers/${seller._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Successfully deleted ${seller.name}`)
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

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
                            sellers.map((seller, i) => <tr
                                className='hover'
                                key={seller._id}>
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>
                                    <label onClick={()=> setDeletedSeller(seller) } htmlFor="confirm-modal" className="btn btn-sm btn-error hover:bg-red-600">Deleted</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletedSeller && <ConfirmModal
                title={`Are you sure want to delete?`}
                message={`If you delete ${deletedSeller?.name}, it can't be undone.`}
                closeModal={closeModal}
                modalData={deletedSeller}
                successAction={handleDeleteSeller}
                succesButtonName='Delete'
                ></ConfirmModal>
            }
        </div>
    );
};

export default AllSellers;