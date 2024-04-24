import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
 
function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="small"
              edge="end"
              color="primary"
              aria-label="menu"
              sx={{ mr: 10 }}
            >
              {/*  
              <MenuIcon />
              */}
            </IconButton>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              Gerenciador de Projetos
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
}
 
export default Header;