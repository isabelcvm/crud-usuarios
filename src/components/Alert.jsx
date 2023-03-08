import React from 'react'
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';

const Alerta = ({ alerta }) => {
    return (
        <Alert
            variant="outlined"
            sx={{ mb: 2 }}
            severity="error"
        >
            {alerta.message}
        </Alert>
    )
}

export default Alerta