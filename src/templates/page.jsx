import React from 'react'; 
import { makeStyles } from '@mui/styles'; 
import Typography from '@mui/material/Typography';
import Header from '../partials/Header/header'; 
import Container from '@mui/material/Container';
import useAuth from '../state/auth';

const useStyles = makeStyles(()=>({
  container:{
      padding: '15px 0',
      background: 'white'
  }
}))


const Page = ({title, Component}) => { 
  const classes = useStyles();

  const{ user } =useAuth();

  return (
    <>
      <Header user={user} /> 
      <Container className={classes.container}>
        <Typography variant='h3'>
          {title}
        </Typography>
        <Component />
      </Container> 
    </>
  );
}

export default Page;
