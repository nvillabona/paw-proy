import React from 'react'
import { Outlet } from 'react-router-dom'
import PawAppBar from './PawAppBar'
import { Box } from '@mui/material'

const Layout = () => {
  return (
    <div>
      <PawAppBar />
      <Box mt={10}>
        <Outlet /> 
      </Box>
    </div>
  )
}

export default Layout