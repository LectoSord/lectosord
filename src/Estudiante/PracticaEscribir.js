import React from 'react'
import { Grid, CardMedia } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import firebase from 'firebase'
import { withStyles } from '@material-ui/core/styles';
//mio
import theme from '../theme'

const styles = {
    spaceTextArea: {
      width: '100%',
    },
    img: {
        width: {

        }
    }
}

class PracticaEscribir extends React.Component{
    constructor(props) {
        super(props);
        this.state = {          
            respuesta: {}
        }
    }

    async getValueFirebase(ref){
        return firebase.database().ref(ref).once('value').then((snapshot)=>{
            return snapshot.val()
        });      
    }
     async setValueFirebase(e,key){
        var practicaEscritura=e.currentTarget.value
        var nvalue=await this.getValueFirebase('/practicas/' +this.props.estudiante)
        if(nvalue==null)
            nvalue={respuesta:{[key]:practicaEscritura}}
        else if (nvalue.respuesta==undefined)
            nvalue={respuesta:{[key]:practicaEscritura}}
        else
            nvalue.respuesta[key]=practicaEscritura
        // Get a key for a new Post.
       // var newKey = firebase.database().ref().child('practicas/'+this.props.estudiante).push().key;
       // setkeyProject(newKey)
        var updates = {};
        updates['/practicas/' +this.props.estudiante] = nvalue;
        return firebase.database().ref().update(updates);
    }
    setValue(e,key){
        var respuesta=this.state.respuesta
        respuesta[key]=e.target.value
        this.setState({respuesta})
    }
    async getValue(){
        var respuesta=await this.getValueFirebase('/practicas/' +this.props.estudiante+"/respuesta")
        this.setState({respuesta})
    }
    componentDidMount(){
        if(this.props.escritura==false)
            this.getValue()
    }

    render(){
        console.log(this.state.lstEscribir)
        const { styles } = theme;
        return(
            <div style={styles.root5}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <CardMedia style={styles.sizeImage2} image={this.props.image.img1} /> <br></br>
                    </Grid>
                    <Grid item xs={3}>
                        <CardMedia style={styles.sizeImage} image={this.props.image.img2} /> <br></br>
                    </Grid>
                    <Grid item xs={3}>
                        <CardMedia style={styles.sizeImage2} image={this.props.image.img3} /> <br></br>
                    </Grid>

                    <TextField
                        id="outlined-textarea"
                        label="Escribe el texto"
                        placeholder="Escribe el texto"
                        multiline
                        margin="normal"
                        variant="outlined"
                        fullWidth={100}
                        style={styles.spaceTextArea}
                        value={this.state.respuesta.txtEscribir}
                        onChange={(key)=>this.setValue(key,"txtEscribir")}
                        onBlur={(e)=>this.setValueFirebase(e,"txtEscribir")}
                    />
                </Grid>
            </div>
        );
    }

    /*
    render(){
        return(
            <div>
                <Grid content>
                    <Grid  align='center'>
                        <h4> Imagen 1 </h4>
                    </Grid>
                    <Grid  align='center'>
                        <h4> Imagen 2 </h4>
                    </Grid>

                    <TextField
                        id="outlined-textarea"
                        label="Escribe el texto"
                        placeholder="Escribe el texto"
                        multiline
                        margin="normal"
                        variant="outlined"
                        fullWidth={100}
                    />
                </Grid>
            </div>
        );
    }
    */
}
export default withStyles(styles) (PracticaEscribir);