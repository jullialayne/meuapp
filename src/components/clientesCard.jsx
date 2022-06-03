import React,{useState} from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit'; 
import { makeStyles } from '@mui/styles';
import classNames from 'classnames';
import ModalConfirm from './modalConfirm';

const useStyles = makeStyles(()=>({
    root:{
        maxWidth:345,
    }
}))

const ClientesCard = ({
    id,
    name,
    lastname,
    email,
    avatar,
    className,
    onRemoveCliente, 
    onEditCliente
}) => {
    const classes= useStyles();

    const [openModal, setOpenModal]=useState(false);

    const handleToggleOpenModal = () =>{
      setOpenModal(!openModal);
    }

    const handleConfirmModal = id =>{
      onRemoveCliente(id);
      handleToggleOpenModal();
    }
     
    const handleEditClientes = id =>{
      onEditCliente(id);
    }

    const handleRemoveClientes = () =>{
      handleToggleOpenModal();
    }

  return (
    <>
      <Card className={classNames(className,classes.root)} >
        <CardHeader
          avatar={
            <Avatar aria-label='recipe' src={avatar}>
              R
            </Avatar>
          }
          title={`${name} ${lastname}`}
          subheader={email}
        />
        <CardActions disableSpacing>
          <IconButton aria-label="editar" onClick={() =>handleEditClientes(id)}>
            <EditIcon />
          </IconButton>
          <IconButton aria-label="deletar" onClick={handleRemoveClientes}>
            <DeleteForeverIcon />
          </IconButton>
        </CardActions>
      </Card>
      <ModalConfirm
        title="Deseja realmente excluir esse cadastro?"
        message="Ao confirmar não será possível reverter esta operação."
        open={openModal}
        onClose={handleToggleOpenModal}
        onConfirm={()=>handleConfirmModal(id)}
        />
    </>
  );
}

export default ClientesCard;