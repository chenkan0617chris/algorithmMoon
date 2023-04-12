import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const DefaultAppBar = () => {

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton>
                        <MenuIcon></MenuIcon>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Algorithm Moon</Typography>
                    <Button onClick={() => window.location.replace('/sign-in')} color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
};

export default DefaultAppBar;