import React, { useEffect } from 'react'
import { FormLogin } from '../components/FormLogin';
import Grid from '@mui/material/Grid';
import ImageLogin from '../assets/images/login.jpg'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      navigate('/register')
    }
  }, [])

  return (
    <Grid container rowSpacing={1}>

        <Grid md={5}>
            <div>
                <img src={ImageLogin} alt="Image Login" width='90%'/>
            </div>
        </Grid>
        <Grid  md={6} >
            <h2>Iniciar Sesión</h2> 
            <FormLogin />
        </Grid>
    </Grid>
  )
}

export default Login