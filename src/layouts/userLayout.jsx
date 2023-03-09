import React from 'react'
import { Container } from '@mui/system'
import { Navigate, Outlet } from 'react-router-dom'
import { Box } from '@mui/material';
import Header from '../components/Header'
import Sidebar from '../components/Sidebar';

const UserLayout = () => {
  return (
    <>
        <Header />
        <Container maxWidth="100%" sx={{bgcolor: '#DFEAF7', height: '100vh' }}>
        <Sidebar />
            <Box>
                <main>
                    <Outlet />
                </main>
            </Box>

        </Container>
    </>
  )
}

export default UserLayout