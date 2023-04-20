import React from 'react'
import Login from "../pages/auth/Login";
import Dashboard from '../pages/dashboard/Dashboard';
import Profile from '../pages/profile/Profile';
import Messages from '../pages/messages/Messages';

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
    }
}

export default routes;