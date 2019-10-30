import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import firebase from 'firebase'
//mio
import theme from '../theme'

const styles = {
    card: {
        marginLeft: 5,
    },
}

class CrearEstudiante extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            respuesta:{},
        }
      }
   // setValue(e,key){
     //   this.setState({[key]:e.target.value})
    //}

   /* setValueFirebase(e){
        var alumno={
            nameEstudiante: this.state.studentName,
            age:  this.state.age,
            course:  this.state.course,
          }
     var newKey = firebase.database().ref().child('estudiante').push().key;
       firebase.database().ref('estudiante/' + newKey).set(alumno); 
    }
    */

    setValue(e,key){
        var respuesta=this.state.respuesta
        respuesta[key]=e.target.value
        this.setState({respuesta})
    }
    async getValueFirebase(ref){
        return firebase.database().ref(ref).once('value').then((snapshot)=>{
            return snapshot.val()
        });      
    }
    async setValueFirebase(e,key){
        var datosEstudiante=e.currentTarget.value
        var nvalue=await this.getValueFirebase('/estudiante/')
        if(nvalue==null)
            nvalue={respuesta:{[key]:datosEstudiante}}
        else if (nvalue.respuesta==undefined)
            nvalue={respuesta:{[key]:datosEstudiante}}
        else
            nvalue.respuesta[key]=datosEstudiante
        // Get a key for a new Post.
       // var newKey = firebase.database().ref().child('practicas/'+this.props.estudiante).push().key;
       // setkeyProject(newKey)
        var updates = {};
        updates['/practicas/' +this.props.estudiante] = nvalue;
        return firebase.database().ref().update(updates);
    }

    async getValue(){
        var respuesta=await this.getValueFirebase('/estudiante/respuesta')
        this.setState({respuesta})
    }

    componentDidMount(){
        if(this.props.escritura==false)
            this.getValue()
        
    }

    render(){
        const {styles} = theme;

        return(
            <Card style={styles.card}>
                <div style={styles.text}>
                    <Typography variant="h6"> Crear Estudiante</Typography>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Nombre"
                        type="text"
                        fullWidth
                        onChange={(key)=>this.setValue(key,"nombre")}
                        onBlur={(e)=>this.setValueFirebase(e,"nombre")}
                      
                        
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="edad"
                        label="Edad"
                        type="number"
                        fullWidth
                        onChange={(key)=>this.setValue(key,"edad")}
                        onBlur={(e)=>this.setValueFirebase(e,"edad")}
                        
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="curso"
                        label="Curso"
                        type="number"
                        fullWidth
                        onChange={(key)=>this.setValue(key,"curso")}
                        onBlur={(e)=>this.setValueFirebase(e,"curso")}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="tipoDiscapacidad"
                        label="Tipo de discapacidad"
                        type="text"
                        fullWidth
                        onChange={(key)=>this.setValue(key,"tipoDiscapacidad")}
                        onBlur={(e)=>this.setValueFirebase(e,"tipoDiscapacidad")}
                    />
                    <div style={styles.button}>
                        <Button  color="primary">
                            Cancelar
                        </Button>
                        <Button color="primary" onClick={this.setValueFirebase}>
                            Crear
                        </Button>
                    </div>
                </div>
            </Card>
        );
    }

}export default withStyles(styles) (CrearEstudiante);