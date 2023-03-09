import React from 'react'
import { Outlet } from 'react-router-dom'
import Container from '@mui/material/Container';

export const AuthLayout = () => {
  return (
    <>
      <Container 
        sx= {{
          padding:'20px' ,width: '100%',
        }}
      >
        <Outlet />
      </Container>
    </>
  )
}
