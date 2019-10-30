import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles(theme => ({
  root4: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(2),
  },
}));

function MainTemaEstudiante(props) {
  const classes = useStyles();
  
  function handleConcepto(){
    props.changeView(4);
  }
  function handlePracticar(){
    props.changeView(5);
  }
  function handleEvaluar(){
    props.changeView(6);
  }

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <Typography variant="h6" gutterBottom >
           
        </Typography>
      }
      className={classes.root}
    >
      <ListItem button onClick={handleConcepto}>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Concepto" />
      </ListItem>

      <ListItem button onClick={handlePracticar}>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Practicar" />
      </ListItem>

      <ListItem button onClick={handleEvaluar}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Evaluar" />
        </ListItem>
    </List>
  );
}
export default MainTemaEstudiante;