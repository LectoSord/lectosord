import React from 'react'
import { Grid, Paper, CardMedia } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
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

class PracticaComprender extends React.Component{
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
        var practicaComprension=e.currentTarget.value
        var nvalue=await this.getValueFirebase('/practicas/' +this.props.estudiante)
        if(nvalue==null)
            nvalue={respuesta:{[key]:practicaComprension}}
        else if (nvalue.respuesta==undefined)
            nvalue={respuesta:{[key]:practicaComprension}}
        else
            nvalue.respuesta[key]=practicaComprension
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
        console.log(this.state.lstComprender)
        const { styles } = theme;
        return(
            <div style={styles.root5} >
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <CardMedia style={styles.sizeImage3} image={this.props.image.img1} /> <br></br>
                    </Grid>
                    <Grid item xs={6}>
                        <CardMedia style={styles.sizeImage3} image={this.props.image.img2} /> <br></br>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={5}>
                        <Paper style={styles.spaceText3}> 
                            <Typography variant="h6">
                               {this.props.image.preg1}
                            </Typography>
                        </Paper> <br></br>
                    
                        <Paper style={styles.spaceText3}> 
                            <Typography variant="h6">
                               {this.props.image.preg2}
                            </Typography>
                        </Paper> <br></br>
                    
                        <Paper style={styles.spaceText3}> 
                            <Typography variant="h6">
                               {this.props.image.preg3}
                            </Typography>
                        </Paper> <br></br>
                    </Grid>

                    <Grid item xs={4}>
                        <Paper style={styles.spaceText3}> 
                            <Typography variant="h6">
                               {this.props.image.res1}
                            </Typography>
                        </Paper> <br></br>
                        <Paper style={styles.spaceText3}> 
                            <Typography variant="h6">
                               {this.props.image.res2}
                            </Typography>
                        </Paper> <br></br>

                        <Paper style={styles.spaceText3}> 
                            <Typography variant="h6">
                               {this.props.image.res3}
                            </Typography>
                        </Paper> <br></br>

                    </Grid>

                    <Grid item xs={2}>
                        <TextField
                            id="outlined-textarea"
                            label="Escribe el texto"
                            placeholder="Escribe el texto"
                            multiline
                            margin="normal"
                            variant="outlined"
                            fullWidth={100}
                            style={styles.spaceTextArea}
                            value={this.state.respuesta.txtComprender1}
                            onChange={(key)=>this.setValue(key, "txtComprender1")}
                            onBlur={(e)=>this.setValueFirebase(e,"txtComprender1")}
                        />
                       
                        <TextField
                            id="outlined-textarea"
                            label="Escribe el texto"
                            placeholder="Escribe el texto"
                            multiline
                            margin="normal"
                            variant="outlined"
                            fullWidth={100}
                            style={styles.spaceTextArea}
                            value={this.state.respuesta.txtComprender2}
                            onChange={(key)=>this.setValue(key, "txtComprender2")}
                            onBlur={(e)=>this.setValueFirebase(e,"txtComprender2")}
                        />
                        <TextField
                            id="outlined-textarea"
                            label="Escribe el texto"
                            placeholder="Escribe el texto"
                            multiline
                            margin="normal"
                            variant="outlined"
                            fullWidth={100}
                            style={styles.spaceTextArea}
                            value={this.state.respuesta.txtComprender3}
                            onChange={(key)=>this.setValue(key, "txtComprender3")}
                            onBlur={(e)=>this.setValueFirebase(e,"txtComprender3")}
                        />
                    </Grid>
                </Grid>
            </div>
        );
    }
}
export default withStyles(styles) (PracticaComprender);