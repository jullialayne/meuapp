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

const UsersCard = ({
    id,
    name,
    lastname,
    email,
    avatar,
    className,
    onRemoveUser, 
    onEditUser
}) => {
    const classes= useStyles();

    const [openModal, setOpenModal]=useState(false);

    const handleToggleOpenModal = () =>{
      setOpenModal(!openModal);
    }

    const handleConfirmModal = id =>{
      onRemoveUser(id);
      handleToggleOpenModal();
    }
     
    const handleEditUsers = id =>{
      onEditUser(id);
    }

    const handleRemoveUsers = () =>{
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
          <IconButton aria-label="editar" onClick={() =>handleEditUsers(id)}>
            <EditIcon />
          </IconButton>
          <IconButton aria-label="deletar" onClick={handleRemoveUsers}>
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

export default UsersCard;