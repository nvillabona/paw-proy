import { Box, CircularProgress } from '@mui/material'
import React from 'react'

const AppLoader = () => {
    return (
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <CircularProgress />
        </Box>
    )
}

export default AppLoader