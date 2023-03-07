import React from 'react'
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';

const Alerta = ({alerta }) => {
    return (
        <Box sx={{ width: '100%' }}>
            <Alert
                variant="filled" 
                sx={{ mb: 2 }}
                severity="error"
            >
                {alerta.message}
            </Alert>
        </Box>
    )
}

export default Alerta