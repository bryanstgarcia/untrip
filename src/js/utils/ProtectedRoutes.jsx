import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserLogged } from '../context/UserLogged.jsx';

const ProtectedRoutes = () => {
    const { user } = useContext(UserLogged)
    return (
        <React.Fragment>
            {user.token ? <Outlet /> : <Navigate to={'/login'} />}
        </React.Fragment>
    )
}

export default ProtectedRoutes;