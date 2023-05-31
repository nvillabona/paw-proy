import React from 'react'
import Login from "../pages/auth/Login";
import Dashboard from '../pages/dashboard/Dashboard';
import Profile from '../pages/profile/Profile';
import Messages from '../pages/messages/Messages';
import Register from '../pages/auth/Register';

const routes = {
    login: {
        path: '/',
        component: <Login/>
    },
    dashboard: {
        path: '/dashboard',
        component: <Dashboard />
    },
    profile: {
        path: '/profile',
        component: <Profile />
    },
    messages: {
        path: '/messages',
        component: <Messages />
    },
    register: {
        path: '/register',
        component: <Register />
    }
}

export default routes;