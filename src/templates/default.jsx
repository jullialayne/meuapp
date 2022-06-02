import React from 'react';
import Header from '../partials/Header/header'; 
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles'; 

const useStyles = makeStyles(()=>({
     container:{
         padding: '15px 0',
         background: 'white'
     }
}))

const Default = ({children}) => { 
  const classes = useStyles();
  return (
    <>
      <Header /> 
      <Container className={classes.container}>
        {children}
      </Container>
    </>
  );
}

export default Default;
