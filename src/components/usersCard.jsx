import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { makeStyles } from '@mui/styles';
import classNames from 'classnames';

const useStyles = makeStyles(()=>({
    root:{
        maxWidth:345,
    }
}))

const UsersCard = ({
 
    name,
    lastname,
    email,
    avatar,
    className
}) => {
    const classes= useStyles();

  return (
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
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default UsersCard;