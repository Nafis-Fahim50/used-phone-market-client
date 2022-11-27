import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmModal from '../../Shared/ConfirmModal/ConfirmModal';
import Loading from '../../Shared/Loading/Loading';

const Report = () => {
    const [deletedReport, setDeletedReport] = useState(null);

    const { data: reported = [], refetch } = useQuery({
        queryKey: ["reported"],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/reportedProducts', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data;
        }
    })

    const closeModal = () => {
        setDeletedReport(null);
    }

    const handleDeletdReport = report => {
        fetch(`http://localhost:5000/reportedProducts/${report._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Successfully deleted ${report.model}`)
                }
            })
    }
    
    if (!reported.length) {
        <Loading></Loading>
    }

    return (
        <div>
            <h1 className='my-5 text-2xl text-red-500 font-bold'>Total Reported Product: {reported.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Photo</th>
                            <th>Model</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reported.map((report, i) => <tr
                                key={report._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-16 rounded-full">
                                            <img src={report.img} alt='' />
                                        </div>
                                    </div>
                                </td>
                                <td>{report.model}</td>
                                <td>{report.resalePrice}</td>
                                <td>
                                    <label onClick={() => setDeletedReport(report)} htmlFor="confirm-modal" className="btn btn-sm btn-error hover:bg-red-600">Deleted</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletedReport && <ConfirmModal
                    title={`Are you sure want to delete?`}
                    message={`If you delete ${deletedReport.model}, it can't be undone.`}
                    closeModal={closeModal}
                    modalData={deletedReport}
                    successAction={handleDeletdReport}
                    succesButtonName='Delete'
                ></ConfirmModal>
            }
        </div>
    );
};

export default Report;