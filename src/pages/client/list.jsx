import React,{useState, useEffect}  from 'react';  
import axios from 'axios';
import ClientesCard from '../../components/clientesCard';
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

const ClientesList = () => {
  
  const navigate  = useNavigate();
  const classes = useStyles();
  const [clientes,setClientes] = useState([]);

  useEffect(()=>{
    axios.get('https://reqres.in/api/users')
      .then((response)=>{
        const {data}=response.data
        setClientes(data)
      })
  },[])

  const handleRemoveCliente = id =>{
    axios.delete(`https://reqres.in/api/users/${id}`)
      .then(() =>{
        const newClientesState = clientes.filter(cliente=>cliente.id!==id)
        setClientes(newClientesState)
      })
  }
  const handleEditCliente = id =>{
    navigate(`/clientes/edit/${id}`);
  }

  return ( 
    <Grid container>
      {clientes.map(item => (
        <Grid item xs={12} md={4} key={item.id}>
          <ClientesCard  
            id={item.id}
            name={item.first_name}
            lastname={item.last_name}
            email={item.email}
            avatar={item.avatar}
            className={classes.card}
            onRemoveCliente={handleRemoveCliente}
            onEditCliente={handleEditCliente}
          />
        </Grid>
        )
        )
      }
    </Grid> 
  );
}

export default ClientesList;