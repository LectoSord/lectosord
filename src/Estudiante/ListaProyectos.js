import React from 'react';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SendIcon from '@material-ui/icons/Send';
import { Card, CardMedia } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import firebase from 'firebase'
import StarBorder from '@material-ui/icons/StarBorder';

//Styles
import theme from '../theme'

const styles = {
  root3: {
    width: '100%',
  },

  card2: {
    minWidth: 275,
    marginTop: theme.spacing(2),
  },
  spaceText1: {
    
  }
};

class ListaProyectos extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listaProyectos: [],
    }
  }

  handleTema(view,object) {
    this.props.changeView(view,object);
  }
  handlePracticar(view,object){
    this.props.changeView(view,object);
  }
  handleEvaluar(view,object){
    this.props.changeView(view,object);
  }

  //Traer datos de Firebase
  getProjects() {
    return firebase.database().ref('/proyectos/').once('value').then((snapshot) => {
      try {
        this.setState({ listaProyectos: snapshot.val() })
      }
      catch (err) {
        console.log("No hay proyectos")
      } 
    });
  }

  componentDidMount() {
    //this.getProjects();
    this.setState({listaProyectos:this.props.listaProyectos})
  }
  renderMenuTema(objeto) {
    const { styles } = theme;
    return Object.keys(objeto).map(p => {
      return (
       
          <MenuList>
            <MenuItem>  
              <ListItemIcon size='small'>
                <StarBorder />
              </ListItemIcon>       
                <Typography key={p} onClick={()=>this.handleTema(4,objeto[p])}> {objeto[p].name} </Typography>
            </MenuItem>
            
            <MenuItem style={styles.listItem}  onClick={()=>this.handleTema(4,objeto[p])}>
                <CardMedia style={styles.imageList} image={objeto[p].concepto.id} />   
                {this.renderMenuConcepto(objeto[p].concepto)}
            </MenuItem>
            
            <MenuItem style={styles.listItem} onClick={()=>this.handlePracticar(5,objeto[p])}>
                <CardMedia style={styles.imageList} image={objeto[p].practicas.id} />  
                {this.renderMenuPractica(objeto[p].practicas)}
            </MenuItem>
            
            <MenuItem style={styles.listItem} onClick={()=>this.handleTema(6,objeto[p])}>
                <CardMedia style={styles.imageList} image={objeto[p].evaluacion.id} />  
                {this.renderMenuEvaluacion(objeto[p].evaluacion)}
            </MenuItem>
          </MenuList>
      )
    })
  }

  renderMenuConcepto(objeto) {
    return (
        <MenuItem>
            <Typography> Concepto  </Typography>
        </MenuItem>
    )
  }

  renderMenuPractica(objeto) {
    return (
      <MenuItem>
        <Typography> Práctica  </Typography>
      </MenuItem>     
    )
  }

  renderMenuEvaluacion(objeto) {
    return (
      <MenuItem>
        <Typography> Evaluación  </Typography>
      </MenuItem>     
    )
  }

  renderMenuProject(objeto) {
    return Object.keys(objeto).map(p => {
      
      console.log(objeto);
      return (
        <MenuList>
          <Card>
            <MenuItem style={styles.listItem}>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>            
                <Typography key={p} variant="inherit"> {objeto[p].name} </Typography>
            </MenuItem>
             {this.renderMenuTema(objeto[p].temas)} 
          </Card>
        </MenuList>
      )
    })
  }

  render() {
    const { styles } = theme;

    console.log(this.state.listaProyectos)
    return (
      <div style={styles.root3}>
         {this.renderMenuProject(this.state.listaProyectos)}   

      </div>
    );
  }
}
export default withStyles(styles)(ListaProyectos);