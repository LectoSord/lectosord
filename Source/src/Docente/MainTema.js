import React from 'react'
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Grid } from '@material-ui/core';
import firebase from 'firebase';

//mio
import theme from '../theme'

const styles = {
  fab: {
    margin: theme.spacing(1),
  }
};

class CrearTema extends React.Component {

  setValueFirebase(e){
    console.log(e.target.value)
   firebase.database().ref('tema/').set({
      nombreTema:e.target.value
  });
  }

  handleNewTema(){
  // Agregar un nuevo TextField
  }

    render(){
      const {styles} = theme;

      return (
        <Grid>
          <TextField
            id="standard-name"
            label="Tema "
            margin="normal"
            onChange={this.setValueFirebase}
          />

          <Fab size="small" color="primary" aria-label="Add" style={styles.fab2} onClick={this.handleNewTema}>
              <AddIcon />
          </Fab>
        </Grid>
      );
    }
  }
  export default CrearTema;
