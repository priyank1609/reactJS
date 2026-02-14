import React, { Suspense } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router';
import { useAuth } from '../providers/with-auth-provider';
import Loader from '../loader';

const ProtectedRoutes = () => {
    const location = useLocation();
    const from = location.pathname;
    const {user} = useAuth();
    const isLoggedIn = user != null;

    if(isLoggedIn) return (
        <Suspense fallback={<Loader message='Protected Routes Loading....' />}>
            <Outlet />
        </Suspense>
    )

    return <Navigate to={"/login"} state={{from}} replace />
}

export default ProtectedRoutes
