import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmModal from '../../Shared/ConfirmModal/ConfirmModal';
import Loading from '../../Shared/Loading/Loading';

const AllBuyers = () => {
    const [deletedBuyer, setDeletedBuyer] = useState(null)
    const { data: buyers = [], isLoading, refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allBuyers',{
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data;
        }
    })

    const closeModal = () =>{
        setDeletedBuyer(null);
     }

     const handleDeletedBuyer = buyer =>{
        fetch(`http://localhost:5000/allBuyers/${buyer._id}`,{
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount > 0){
                refetch()
                toast.success(`Succussfully deleted ${buyer.name}`)
            }
        })
     }
    
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-2xl font-bold text-green-500 my-5'>All Buyers</h1>
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
                            buyers.map((buyer, i) => <tr
                                key={buyer._id}>
                                <th>{i + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td>
                                <label onClick={()=> setDeletedBuyer(buyer) } htmlFor="confirm-modal" className="btn btn-sm btn-error hover:bg-red-600">Deleted</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletedBuyer && <ConfirmModal
                title={`Are you sure want to delete?`}
                message={`If you delete ${deletedBuyer?.name}, it can't be undone.`}
                closeModal={closeModal}
                modalData={deletedBuyer}
                successAction={handleDeletedBuyer}
                succesButtonName='Delete'
                ></ConfirmModal>
            }
        </div>
    );
};

export default AllBuyers;