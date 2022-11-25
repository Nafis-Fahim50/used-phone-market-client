import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const sellerRoute = ({children}) => {
    const {user, loading} = React.createContext(AuthContext)
    
};

export default sellerRoute;