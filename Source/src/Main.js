import React from 'react'
import MenuBar from './Docente/MenuBar'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
//mio
import MenuLateral from './Docente/MenuLateral'
import InformacionApp from './Docente/InformacionApp'
import CrearProyecto from './Docente/CrearProyecto'
import firebase from 'firebase'
import ListaProyectos from './Estudiante/ListaProyectos'
import MainEstudiante from './Estudiante/MainEstudiante'
import MainTemaEstudiante from './Estudiante/MainTemaEstudiante'
import ConceptoEstudiante from './Estudiante/ConceptoEstudiante'
import PracticaEstudiante from './Estudiante/PracticaEstudiante'
import EvaluacionEstudiante from './Estudiante/EvaluacionEstudiante'
import IndexApp from './indexApp';
import CrearEstudiante from './Docente/CrearEstudiante';
import theme from './theme'

const styles = {
  responsivePage: {
    width: '1000px',
    maxWidth: '1000px',
    margin: 'auto',
    overflow: 'hidden'
  }
};

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      option: 0,
      mode:""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 

  initFirebase() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyDpFJOeLQzcc6E7grRxNVhZSPHy-bCrzYc",
      authDomain: "lectosord-c9e51.firebaseapp.com",
      databaseURL: "https://lectosord-c9e51.firebaseio.com",
      projectId: "lectosord-c9e51",
      storageBucket: "lectosord-c9e51.appspot.com",
      messagingSenderId: "761668175941",
      appId: "1:761668175941:web:6d65822066742a71"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
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
   
  handleView() { //posibles vistas tanto del estudiante como del docente 
     switch (this.state.view) {
      case 1:
        return (<CrearProyecto />)
      case 2:
        return (<MainEstudiante />)
      case 3:
        return (<MainTemaEstudiante  object={this.state.object} changeView={this.changeView.bind(this)}/>)
      case 4:
        return (<ConceptoEstudiante  object={this.state.object} changeView={this.changeView.bind(this)}/>)
      case 5:
        return (<PracticaEstudiante estudiante={this.state.nombre} object={this.state.object} changeView={this.changeView.bind(this)}/>)
      case 6:
        return (<EvaluacionEstudiante estudiante={this.state.nombre} object={this.state.object} changeView={this.changeView.bind(this)}/>)
      case 7:
        return (<InformacionApp />)
      case 8:
        return (<CrearEstudiante changeView={this.changeView.bind(this)}/>)
      default:
        return (<IndexApp changeView={this.changeView.bind(this)} changeMode={this.changeMode.bind(this)} />)
    }
  }
  changeView(view,object) {
    this.setState({ view,object })
  }
  changeMode(mode,nombre) {
    this.setState({ mode,nombre }) //{key:value} mode:mode mode
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('El proyecto:' + ' ' + this.state.value + ' ' + 'ha sido guardado');
    event.preventDefault();
  }

  componentDidMount() {
   this.initFirebase();
   this.getProjects();
  }

  render() {
    const { styles } = theme;
    return (
      <div style={styles.responsivePage}>
        <MenuBar title={"LectoSord"} user={this.state.nombre} />
        <Grid container>
          {this.state.mode!=""?
          <Grid item xs={3}>
            
            {this.state.mode=="profesor"?<MenuLateral  
            listaProyectos={this.state.listaProyectos} 
            changeView={this.changeView.bind(this)} 
            changeMode={this.changeMode.bind(this)}/>: <ListaProyectos listaProyectos={this.state.listaProyectos} 
            changeView={this.changeView.bind(this)}/>}
          </Grid>  :""}
          
          <Grid item xs={9}>
            {this.handleView()}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles) (Main);


