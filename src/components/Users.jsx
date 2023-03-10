import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Box } from '@mui/system';
import { Table, TableContainer, TableHead, TableBody, TableRow, Paper,  } from '@mui/material'
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SpeedDial from './SpeedDial';
import Modal from './Modal';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];


const Users = () => {

    const [open, setOpen] = useState(false);
    const [infoMofal, setInfoModal] = useState({});
    const handleOpen = () => {
        setOpen(true);
    };


    return (
        <>
            <Box sx={{ p: 3, width: '100%', height: '100%' }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Usuarios</TableCell>
                                <TableCell align="right">Acciones</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right" >
                                        <Link to={`${row.carbs}`}>
                                            <IconButton aria-label="see" color="success" >
                                                <VisibilityIcon />
                                            </IconButton>
                                        </Link>
                                        <Link to={`editar/${row.carbs}`}>
                                            <IconButton aria-label="edit" color="primary" onClick={handleOpen}>
                                                <EditIcon />
                                            </IconButton>
                                        </Link>
                                        <IconButton aria-label="delete" color="error" onClick={handleOpen}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>

            <SpeedDial />
            <Modal open={open} close={setOpen} />

        </>
    )
}

export default Users