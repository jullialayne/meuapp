import React,{useState, useEffect}  from 'react'; 
import '../style/style.css'; 
import axios from 'axios';
import UsersCard from '../components/usersCard';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles'; 
import { ThemeProvider } from 'styled-components';
import { red } from '@mui/material/colors';

const useStyles = makeStyles(()=>({
  root:{
      flexGrow:1,
  },
  card:{
    padding: '50px',
  }
}))

const Users = () => {
  const classes = useStyles();
  const [users,setUsers] = useState([]);

  console.log(users);
  useEffect(()=>{
    axios.get('https://reqres.in/api/users')
      .then((response)=>{
        const {data}=response.data
        setUsers(data)
      })
  },[])

  return ( 
    <Grid container>
      {users.map(item => (
        <Grid item xs={12} md={4} key={item.id}>
          <UsersCard  
            name={item.first_name}
            lastname={item.last_name}
            email={item.email}
            avatar={item.avatar}
            className={classes.card}
          />
        </Grid>
        )
        )
      }
    </Grid> 
  );
}

export default Users;