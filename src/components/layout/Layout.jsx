import React from 'react'
import { Outlet } from 'react-router-dom'
import PawAppBar from './PawAppBar'
import { Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

const Layout = () => {
  return (
    <div>
      <PawAppBar />
      <Outlet />
    </div>
  )
}

export default Layout