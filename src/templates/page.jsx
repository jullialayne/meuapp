import React from 'react'; 
import { makeStyles } from '@mui/styles'; 
import Typography from '@mui/material/Typography';

const useStyles = makeStyles(()=>({
     container:{
         padding: '15px 0', 
     }
}))

const Page = ({title, Component}) => { 
  const classes = useStyles();
  return (
    <>
        <Typography variant='h3'>
            {title}
        </Typography>
        <Component />
    </>
  );
}

export default Page;
