import React from 'react';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SendIcon from '@material-ui/icons/Send';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Card } from '@material-ui/core';
import firebase from 'firebase'
import { withStyles } from '@material-ui/core/styles';

//mio
import theme from '../theme'

const styles = {
  root: {
      width: '100%',
    },

    fab: {
      marginLeft: 180,
    },
  }

class MenuLateral extends React.Component {
  constructor(props){
    super(props);
    this.state={
      listaProyectos:[],
      listaEstudiantes: []
    }
  }
  
  getProjects(){
    return firebase.database().ref('/project/').once('value').then((snapshot)=>{
      if(snapshot.val()!=undefined){
        this.setState({listaProyectos:snapshot.val()})
      }
      // ...
    });
  }
  getProjects2(){
    return firebase.database().ref('/Estudiante/').once('value').then((snapshot)=>{
      try{let value=Object.keys(snapshot.val());
      this.setState({listaEstudiantes:value})}
      catch(err){
        console.log("No hay estudiantes")
      }
      // ...
    });
  }

  handleCrearProyecto(){
      this.props.changeView(1);
  }
  handleCrearEstudiante(){
    this.props.changeView(8);
  }
  handleMode(nombre){
    this.props.changeMode("estudiante",  nombre);
    this.props.changeView(2);
  }
  componentDidMount(){
    this.getProjects();
    this.getProjects2();
  }

  render(){
    const {styles} = theme;

    return (
      <div style={styles.root}>
        {/*
          <MenuList>
            <Card>
              <MenuItem>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <Typography variant="inherit">Proyectos</Typography>
              </MenuItem>
              <MenuItem>
                <Typography variant="inherit"> Colombia </Typography>
              </MenuItem>
              <MenuItem>
                <Typography variant="inherit"> Cauca </Typography>
              </MenuItem>
                         
              {
                Object.keys(this.state.listaProyectos).map(p=>{
                return (<MenuItem>
                  <Typography variant="inherit">{this.state.listaProyectos[p].projectName}</Typography>  
                </MenuItem>)
                })
              } 
              
              <MenuItem>
                <Typography variant="inherit"> Popayán </Typography>
              </MenuItem>

              <Fab size="small" color="primary" aria-label="Add" style={styles.fab} onClick={()=>this.handleCrearProyecto()}  >
                <AddIcon />
              </Fab>
            </Card>
          </MenuList>
            */}

          <MenuList>
            <Card>
              <MenuItem>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <Typography variant="inherit">Estudiantes</Typography>
              </MenuItem>
              <MenuItem onClick={()=>this.handleMode("Luz Angela Meneses")}>
                <Typography variant="inherit"> Luz Angela Meneses </Typography>
              </MenuItem>
              <MenuItem onClick={()=>this.handleMode("Juan Sebastián Canencio")}>
                <Typography variant="inherit"> Juan Sebastián Canencio </Typography>
              </MenuItem>
                            
              {
                this.state.listaEstudiantes.map(a=>{
                  return(
                    <MenuItem>
                    <Typography variant="inherit"> {a.nameEstudiante}</Typography>
                    </MenuItem>
                  )
                })
              }
              
              <MenuItem onClick={()=>this.handleMode("Estiben Imbachí")}>
                <Typography variant="inherit"> Estiben Imbachí </Typography>
              </MenuItem>

              <MenuItem onClick={()=>this.handleMode("Breynner Smith Pascuas")}>
                <Typography variant="inherit"> Breynner Smith Pascuas </Typography>
              </MenuItem>

              <Fab size="small" color="primary" aria-label="Add" style={styles.fab} onClick={()=>this.handleCrearEstudiante()}  >
                <AddIcon />
              </Fab>
            </Card>
          </MenuList>
      </div>
    );
  }
}

export default  withStyles(styles)(MenuLateral); 
