import React from 'react'
import { Container } from '@mui/system'
import { Navigate, Outlet } from 'react-router-dom'
import { Box } from '@mui/material';
import Header from '../components/Header'
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const UserLayout = () => {
  return (
    <>
      {/* Container */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          background: '#C2C8D0',
        }}
      >

        {/* Content */}
        <div
          style={{
            display: 'flex',
            // flex: 1,
            flexDirection: 'column',
          }}
        >

          <Header />
          <main
            style={{
              display: 'flex',
              flexDirection: 'row',
              flex: 1,
              background: '#E8ECF1',
              
            }}
          >
          <Sidebar />
          
            <Outlet />
          </main>
        </div>

        {/* Footer */}
        <div>
            <Footer />
        </div>
      </div>
    </>
  )
}

export default UserLayout