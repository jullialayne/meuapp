import React,{useState, useEffect}  from 'react';  
import axios from 'axios';
import UsersCard from '../../components/usersCard';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';  
import {useNavigate } from 'react-router-dom';

const useStyles = makeStyles(()=>({
  root:{
      flexGrow:1,
  },
  card:{
    padding: '50px',
  }
}))

const UsersList = () => {
  
  const navigate  = useNavigate();
  const classes = useStyles();
  const [users,setUsers] = useState([]);

  useEffect(()=>{
    axios.get('https://reqres.in/api/users')
      .then((response)=>{
        const {data}=response.data
        setUsers(data)
      })
  },[])

  const handleRemoveUser = id =>{
    axios.delete(`https://reqres.in/api/users/${id}`)
      .then(() =>{
        const newUsersState = users.filter(user=>user.id!==id)
        setUsers(newUsersState)
      })
  }
  const handleEditUser = id =>{
    navigate(`/users/edit/${id}`);
  }

  return ( 
    <Grid container>
      {users.map(item => (
        <Grid item xs={12} md={4} key={item.id}>
          <UsersCard  
            id={item.id}
            name={item.first_name}
            lastname={item.last_name}
            email={item.email}
            avatar={item.avatar}
            className={classes.card}
            onRemoveUser={handleRemoveUser}
            onEditUser={handleEditUser}
          />
        </Grid>
        )
        )
      }
    </Grid> 
  );
}

export default UsersList;