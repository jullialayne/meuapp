import React from 'react'; 
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
  
} from '@mui/material'; 
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(()=>({
     title:{
         flexGrow: 1,
         marginLeft: 10,
     }
}))

const Header = ( ) => {
    const classes = useStyles();

    return(
        <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start" 
            aria-label="menu"
            sx={{ mr: 2 }}
            color='secondary'
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} >
            My app
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    )
}

export default Header;