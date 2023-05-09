

import { AppBar, IconButton, Toolbar, Grid, Typography } from '@mui/material';
import { MenuOutlined, LogoutOutlined } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/auth';

export const NavBar = ({ drawerWidth = 240 }) => {

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logout());
    };

    return (
        <AppBar
            position='fixed'
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` }
            }}>

            <Toolbar>
                <IconButton
                    color='inherit'
                    edge='start'
                    sx={{ mr: 2, display: { sm: 'none', } }}>
                    <MenuOutlined />
                </IconButton>

                <Grid
                    container
                    direction='row'
                    justifyContent='space-between'
                    alignItems='center'>
                    <Typography variant='h6' noWrap component='div'>JournalApp</Typography>
                    <IconButton color='error' onClick={onLogout}>
                        <LogoutOutlined />
                    </IconButton>
                </Grid>

            </Toolbar>
        </AppBar>
    )
}
