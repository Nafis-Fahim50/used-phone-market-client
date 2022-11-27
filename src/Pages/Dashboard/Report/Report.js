import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';

const Report = () => {
    const { data: reported = [] } = useQuery({
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
                                    <button className='btn btn-error text-white hover:bg-red-500'>Deleted</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Report;