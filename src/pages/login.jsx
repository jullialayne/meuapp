import React, {useState} from 'react';
import { makeStyles } from '@mui/styles'; 
import {TextField,Button, Typography} from '@mui/material';
import useAuth from '../state/auth';
import {useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        margin: theme.spacing(3),
    }
}))

const Login = () =>{
    const classes = useStyles();
    const navigate = useNavigate();

    const [form,setForm] = useState({
        email:'',
        password: ''
    })

    const [isLoading,setIsLoading] = useState(false);

    const {user, setUser} = useAuth();

    const handleInputChange = (e) =>{
        const {name,value} = e.target;
        setForm({
          ...form,
          [name]:{
            value,
          },
        })
      }

      const handleFormSubmit = (e) =>{
        setIsLoading(true);

        setTimeout(()=>{
            
            setUser({
                logged:true,
                email: form.email, 
            })
            navigate('/');
        },4000)
      }

    return (
        <>
            <Typography  varient='h3'>Acesso Restrito</Typography>
            <div className={classes.wrapper}>
                <TextField
                    onChange={handleInputChange}
                    label="Digite o seu email"
                    name="email"
                />
            </div>
            <div className={classes.wrapper}>
                <TextField
                    onChange={handleInputChange}
                    label="Digite sua senha"
                    name="password"
                    type="password"
                />
            </div>
            <div className={classes.wrapper}>
                <Button 
                    variant="contained"
                    color="primary"
                    onClick={handleFormSubmit}
                >{
                    isLoading ? 'Aguarde...': 'Entrar'
                }</Button>
            </div>
        </>
    )
}

export default Login;