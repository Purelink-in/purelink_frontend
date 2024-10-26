import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../App';

export default function PrivateRoutes({ element: Element ,...rest }) {
    const { userData,loading } = useContext(UserContext);

    if (userData && !loading) {
        return <Element {...rest} />;
    } else {
        return <Navigate to='/login' />;
    }
}
