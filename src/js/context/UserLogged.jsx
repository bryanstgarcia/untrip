import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const UserLogged = React.createContext() 

const UserLoggedProvider = ({ children }) => {
    const [ user, setUser ] = useState({
        info: null,
        token: true,
        refresh: null,
        
    })
    return (
        <UserLogged.Provider value={{ user, setUser }} >
            { children }
        </UserLogged.Provider>
    )
}

export default UserLoggedProvider;