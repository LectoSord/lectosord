import React from 'react'
import Paper from '@material-ui/core/Paper';
import firebase from 'firebase'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid, CardMedia, TextField, Card } from '@material-ui/core';
import Mal from '@material-ui/icons/SentimentVeryDissatisfied';
import Bien from '@material-ui/icons/SentimentSatisfiedAlt';
import Check from '@material-ui/icons/CheckCircle';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Bienn from '@material-ui/icons/SentimentSatisfiedTwoTone';
import Mall from '@material-ui/icons/SentimentDissatisfiedTwoTone';


//styles
import theme from '../theme'
import Feliz from '../Images/feliz.png'
import {Triste} from '../Images/triste.png'

const styles = {
    text2: {
      width: '100%',
    },
    root5: {
        flexGrow: 1,
    },
    spaceText1: {
      width: 30,
      marginLeft: 30,
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary
    },
    spaceText2: {
        width: 20,
        marginLeft: 60,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
};

class PracticaOrganizar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            respuesta:{},
            practicasValidas:{
                respuesta1:0,
                respuesta2:0,
                respuesta3:0,
                respuesta4:0
            }
        }
    }
    async getValueFirebase(ref){
        return firebase.database().ref(ref).once('value').then((snapshot)=>{
            return snapshot.val()
        });      
    }
     async setValueFirebase(e,key){
        var practicaOrganizacional=e.currentTarget.value
        var nvalue=await this.getValueFirebase('/practicas/' +this.props.estudiante)
        if(nvalue==null)
            nvalue={respuesta:{[key]:practicaOrganizacional}}
        else if (nvalue.respuesta==undefined)
            nvalue={respuesta:{[key]:practicaOrganizacional}}
        else
            nvalue.respuesta[key]=practicaOrganizacional
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
    async getValidValue(){
        var practicasValidas=await this.getValueFirebase('/practicasCorrectas/respuesta')// en esta ruta debes poner los valores validos de cada opcion
        this.setState({practicasValidas})
    }
    componentDidMount(){
        if(this.props.escritura==false)
            this.getValue()
        this.getValidValue()
    }
    render(){
        const { styles } = theme;

        return(
            <div style={styles.responsivePage}>
                <Grid container spacing={1} style={styles.spaceGrid} >
                    <Grid item xs={2}>
                        <Card style={styles.textField4}>
                            <Typography variant='h7' style={styles.cardNumber}>1</Typography>
                         </Card><br/>  
                        <Card style={styles.textField4}>
                            <Typography variant='h7' style={styles.cardNumber}>2</Typography>
                         </Card><br/>  
                         <Card style={styles.textField4}>
                            <Typography variant='h7' style={styles.cardNumber}>3</Typography>
                         </Card><br/>  
                         <Card style={styles.textField4}>
                            <Typography variant='h7' style={styles.cardNumber}>4</Typography>
                         </Card><br/>  
                    </Grid>
                    <Grid item xs={3}>
                        <CardMedia style={styles.spaceText1} image={this.props.image.img1}/> <br></br>
                        <CardMedia style={styles.spaceText1} image={this.props.image.img2}/> <br></br>
                        <CardMedia style={styles.spaceText1} image={this.props.image.img3}/> <br></br>
                        <CardMedia style={styles.spaceText1} image={this.props.image.img4}/> <br></br>                   
                    </Grid>
                    <Grid item xs={3}>
                        <Paper style={styles.spaceText2}> {this.props.image.text1} {this.state.practicasValidas.respuesta1==(this.state.respuesta.opcion1)*1? <Bienn style={{color:"green", size:"large"}}/>:(this.state.respuesta.opcion1=="" ||this.state.respuesta.opcion1==undefined)?"":<Mall style={{color:"red", size:"large"}}/> } </Paper> <br></br>
                        <Paper style={styles.spaceText2}> {this.props.image.text2} {this.state.practicasValidas.respuesta2==(this.state.respuesta.opcion2)*1? <Bienn style={{color:"green", size:"large"}}/>:(this.state.respuesta.opcion2=="" ||this.state.respuesta.opcion2==undefined)?"":<Mall style={{color:"red", size:"large"}}/> }</Paper> <br></br>
                        <Paper style={styles.spaceText2}> {this.props.image.text3} {this.state.practicasValidas.respuesta3==(this.state.respuesta.opcion3)*1? <Bienn style={{color:"green", size:"large"}}/>:(this.state.respuesta.opcion3=="" ||this.state.respuesta.opcion3==undefined)?"":<Mall style={{color:"red", size:"large"}}/> } </Paper> <br></br>
                        <Paper style={styles.spaceText2}> {this.props.image.text4} {this.state.practicasValidas.respuesta4==(this.state.respuesta.opcion4)*1? <Bienn style={{color:"green", size:"large"}}/>:(this.state.respuesta.opcion4=="" ||this.state.respuesta.opcion4==undefined)?"":<Mall style={{color:"red", size:"large"}}/> }</Paper> <br></br>
                    </Grid>
                    <Grid item xs={1}>
                        <TextField id="outlined-bare" style={styles.textField2} value={this.state.respuesta.opcion1} margin="normal"
                            variant="outlined"
                            inputProps={{ 'aria-label': 'bare' }}
                            onChange={(key)=>this.setValue(key,"opcion1")}
                            onBlur={(e)=>this.setValueFirebase(e,"opcion1")}
                            type='number'
                           // disabled={this.state.respuesta.opcion1==""?true:false} //Para el Botón "SIGUIENTE" de las prácticas 
                        /> <br/>
                        <TextField id="outlined-bare" style={styles.textField3} value={this.state.respuesta.opcion2} margin="normal"
                            variant="outlined"
                            inputProps={{ 'aria-label': 'bare' }}
                            onChange={(key)=>this.setValue(key,"opcion2")}
                            onBlur={(e)=>this.setValueFirebase(e,"opcion2")}
                            type='number'
                        /> <br/>
                        <TextField id="outlined-bare" style={styles.textField3} value={this.state.respuesta.opcion3} margin="normal"
                            variant="outlined"
                            inputProps={{ 'aria-label': 'bare' }}
                            onChange={(key)=>this.setValue(key,"opcion3")}
                            onBlur={(e)=>this.setValueFirebase(e,"opcion3")}
                            type='number'
                        /> <br/>
                        <TextField id="outlined-bare" style={styles.textField3} value={this.state.respuesta.opcion4} margin="normal"
                            variant="outlined"
                            inputProps={{ 'aria-label': 'bare' }}
                            onChange={(key)=>this.setValue(key,"opcion4")}
                            onBlur={(e)=>this.setValueFirebase(e,"opcion4")}
                            type='number'
                        /> <br/>
                    </Grid>
                </Grid>
            </div>
   
        );
    }
}
export default withStyles(styles) (PracticaOrganizar);