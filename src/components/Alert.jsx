import React from 'react'
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';

const Alerta = ({ alerta }) => {
    return (
        <Alert
            variant="outlined"
            sx={{ marginBottom: 5 }}
            severity="error"
        >
            {alerta.msg}
        </Alert>
    )
}

export default Alerta