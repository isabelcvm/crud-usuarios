import React from 'react'
import { Outlet } from 'react-router-dom'
import Container from '@mui/material/Container';

export const AuthLayout = () => {
  return (
    <>
      <Container maxWidth="100%"
        sx= {{
          padding:'20px', bgcolor: '#E8ECF1',
        }}
      >
        <Outlet />
      </Container>
    </>
  )
}
