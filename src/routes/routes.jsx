import React from 'react'
import Login from "../pages/auth/Login";
import Dashboard from '../pages/dashboard/Dashboard';

const routes = {
    login: {
        path: '/',
        component: <Login/>
    },
    dashboard: {
        path: '/dashboard',
        component: <Dashboard />
    }
}

export default routes;