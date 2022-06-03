import React,{useState} from 'react'; 
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
  
} from '@mui/material'; 

import {useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(()=>({
     title:{
         flexGrow: 1,
         marginLeft: 10,
     }
}))

const Header = ( ) => {
    const classes = useStyles();
    const navigate  = useNavigate();

    const [menuOpen,setMenuOpen] = useState(false);

    const handleToggleMenu = () =>{
      setMenuOpen(!menuOpen);
    }

    const handleMenuClick = route =>{
      navigate(route);
      handleToggleMenu();
    }

    return(
      <>
        <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start" 
            aria-label="menu"
            sx={{ mr: 2 }}
            color='secondary'
            onClick={()=> handleToggleMenu()}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} >
            My app
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer open={menuOpen} onClose={()=> handleToggleMenu()}>
        <List>
          <ListItem button onClick={()=> handleMenuClick('/')}>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem button onClick={()=> handleMenuClick('/users')}>
            <ListItemIcon><PersonIcon /></ListItemIcon>
            <ListItemText>Lista de Clientes</ListItemText>
          </ListItem>
          <ListItem button onClick={()=> handleMenuClick('/users/add')}>
            <ListItemIcon><PersonAddIcon /></ListItemIcon>
            <ListItemText>Cadastro de Clientes</ListItemText>
          </ListItem>
        </List>
      </Drawer>
      </>
    )
}

export default Header;