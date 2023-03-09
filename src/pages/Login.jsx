import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { Box, Container } from '@mui/system';
import { FormLogin } from '../components/FormLogin';
import imageLogin from '../assets/images/login.jpg'

const Login = () => {

  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      navigate('/user')
    }
  }, [])

  return (
    <Container sx={{ background: 'whitesmoke',
      width: '100%',
      height: '100vh',
      borderRadius: '16px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    }}  >
       <Grid
         lg={4} 
         maxWidth='30%'
         container
          direction="column"
         justifyContent="center"
          alignItems="center"
        >
         <img src={imageLogin} alt="Login Imagen" width='100%' sx={{ borderRadius: '20px' }} /> 
        </Grid>
        <Grid
        container
          direction="column"
          justifyContent="center"
          alignItems="center"
          lg={8}
        >
           <h2>Iniciar Sesión</h2> 
            <FormLogin />

        </Grid>
    </Container>
  )
}

export default Login