import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { logo } from '../constants/constant';

const Header = () => {
    return (
        <StyledAppBar position="static">
            <StyledToolbar>
                <Box display="flex" alignItems="center">
                    <img src={logo} alt="logo" style={{ width: 40, marginRight: 10 }} />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                     NoteWise
                    </Typography>
                </Box>
                <Box>
                    <IconButton href="https://github.com/rithvikkumar3" target="_blank" color="inherit">
                        <i className="fab fa-github"></i>
                    </IconButton>
                    <IconButton href="https://linkedin.com/in/rithvikkumar" target="_blank" color="inherit">
                        <i className="fab fa-linkedin"></i>
                    </IconButton>
                </Box>
            </StyledToolbar>
        </StyledAppBar>
    );
}

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    color: '#fff',
    padding: theme.spacing(0.2), // Reduced padding
}));

const StyledToolbar = styled(Toolbar)({
    minHeight: '36px', // Corrected minHeight
    display: 'flex',
    justifyContent: 'space-between',
});

export default Header;
