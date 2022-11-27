import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import useBuyer from '../Hooks/useBuyer';
import useSeller from '../Hooks/useSeller';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isSeller] = useSeller(user?.email);
    const [isAdmin] = useAdmin(user?.email)
    const [isBuyer] = useBuyer(user?.email)

    return (
        <div>
            <Navbar></Navbar>
            <h1 className='text-center mt-5 text-2xl font-bold'>Welcome To Dashboard</h1>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        {
                            isBuyer && <>
                                <li className='text-green-500 font-bold'><Link to='/dashboard/myOrder'>My Order</Link></li>
                            </>
                        }
                        {
                            isSeller && <>
                                <li className='text-orange-500 font-bold'><Link to='/dashboard/addProducts'>Add Products</Link></li>
                                <li className='text-blue-500 font-bold'><Link to='/dashboard/myProducts'>My Products</Link></li>
                            </>
                        }
                        {
                            isAdmin && <>
                                <li className='text-orange-500 font-bold'><Link to='/dashboard/allSellers'>All Sellers</Link></li>
                                <li className='text-blue-500 font-bold '><Link to='/dashboard/allBuyers'>All Buyers</Link></li>
                                <li className='text-red-500 font-bold '><Link to='/dashboard/reported'>Reported Products</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;