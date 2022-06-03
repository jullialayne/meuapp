import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import Toasty from '../../components/toasty';

const UsersRegister = () => {

  const [isLoading,setIsLoading] =useState(false);

  const [openToasty,setOpenToasty] =useState({
    open: false,
    severity:'success',
    text: ""
  });

  const [form,setForm] =useState({
    name: {
      value: '',
      error: false,
    },
    job:{
      value: '',
      error: false,
    }, 
  }); 
 
  const handleInputChange = (e) =>{
    const {name,value} = e.target;
    setForm({
      ...form,
      [name]:{
        value,
      },
    })
  }

  const handleRegisterButton = () =>{
    setIsLoading(true);

    let hasError = false;

    let newFormState = {
      ...form
    }

    if(!form.name.value){
      hasError = true;
      newFormState.name = {
        value: form.name.value,
        error: true,
        helperText: 'Digite o campo nome corretamente!'
      }
    }

    if(!form.job.value){
      hasError = true;
      newFormState.job = {
        value: form.job.value,
        error: true,
        helperText: 'Digite o campo cargo corretamente!'
      }
    }

    if(hasError){
      
        setOpenToasty({
          ...openToasty,
          open: true,
          severity:'error',
          text: "Conclua com os dados!"
        })
      return setForm(newFormState);
    }
    
    axios.post('https://reqres.in/api/users',{
      name:form.name.value,
      job:form.job.value,
    }).then(()=>{
      setOpenToasty({
        ...openToasty,
        open: true,
        severity:'success',
        text: "Cadastro realizado com sucesso!"
      })
      setIsLoading(false);
    })
  }

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <TextField  
          error={form.name.error}
          helperText={form.name.error ? form.name.helperText : ''}
          label="Digite seu nome: " 
          name="name" 
          value={form.name.value} 
          onChange={handleInputChange} />
      </div>
      <div>
        <TextField 
          error={form.job.error}
          helperText={form.name.error ? form.name.helperText : ''}
          label="Digite seu cargo: " 
          name="job" 
          value={form.job.value} 
          onChange={handleInputChange}/>
      </div>
      <div>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleRegisterButton}
          disabled={isLoading}>
          {isLoading ? 'Aguarde...': 'Cadastrar'}
        </Button>
      </div>
      <Toasty 
        open={openToasty.open} 
        severity={openToasty.severity} 
        text={openToasty.text}
        onClose={() => setOpenToasty(false)}
        />
    </Stack>
  )
}

export default UsersRegister;