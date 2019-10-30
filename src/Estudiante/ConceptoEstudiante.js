import React from 'react'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, CardMedia } from '@material-ui/core';

//style
import theme from '../theme'

const styles = {
  root5: {
    width: '100%',
  },
  spaceTextArea2:{
    maxWidth: '95%',
    marginLeft: 40,
    marginLeft: 30,
    padding: 20,
    textAlign: 'center'
},
  spaceText1: {
         
    marginLeft: 30,
    padding: 20,
    textAlign: 'center'
  },
  marginTypography: {
    marginTop: 30,
  }
}

class ConceptoEstudiante extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          image: '',
          imageURL: '',
        }
    }

    renderConcepto(objeto){
      return(
        <div>
          <Typography variant="h5"> {objeto.name}  </Typography>
          <Typography>{objeto.imgTema}</Typography>
        </div>
      )
    }

    render(){
      const { styles } = theme; 
        return (
          <div>

            <Typography variant="h5" align='center' style={styles.marginTypography}> {this.props.object.concepto.name} </Typography>

            <Grid container spacing={3}>
                <Grid item xs={3} style={styles.images}>
                    <CardMedia style={styles.sizeImage} image={this.props.object.concepto.imgCpto} /> <br></br>
                </Grid>
                <Grid item xs={3} style={styles.images}>
                    <CardMedia style={styles.sizeImages} image={this.props.object.concepto.imgCpto2}/> <br></br>
                </Grid>
                <Grid item xs={3} style={styles.images}>
                    <CardMedia style={styles.sizeImage} image={this.props.object.concepto.imgCpto3}/> <br></br>
                </Grid>

                <Grid item xs={12} >
                  <Paper style={styles.spaceTextArea2} >
                    <Typography variant="h6">
                      {this.props.object.concepto.text}
                    </Typography>
                  </Paper> <br></br>
                </Grid>
            </Grid>
          
          </div>
        );

    }
}
export default withStyles(styles) (ConceptoEstudiante);