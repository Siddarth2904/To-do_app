import React, { useContext } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { fontSize } from '@mui/system';
import { DeleteContext } from './context/ContextProvider';
import Alert from 'react-bootstrap/Alert';

const Navbaar = () => {
    const { dlttask, setdlttask } = useContext(DeleteContext)
    // console.log(dlttask);
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{ background: "#232f3e" }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ textAlign: 'center' }}>
                            Redux To-Do List
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            {/* {
                dlttask ? <Alert variant="danger" onClose={() => setdlttask(false)} dismissible>
                    <Alert.Heading>Your task has been removed successfully</Alert.Heading>

                </Alert> : ""
            } */}
        </>
    )
}

export default Navbaar