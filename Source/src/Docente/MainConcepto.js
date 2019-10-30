import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Grid, Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import firebase from 'firebase'

const useStyles = makeStyles(theme => ({
  root: {
    width: '80%',
    height: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
    fab: {
      margin: theme.spacing(4),
      marginLeft: theme.spacing(80),
    },
    extendedIcon: {
      marginLeft: theme.spacing(1),
    },
  }));

function MainConcepto() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  /*function setValueFirebase(image, text){     
    firebase.database().ref('concepto/' ).set({

       imagen: image,
       texto: text,
   }); 
 }*/

/*
  const fileSelectedHandler = event => {
    console.log(event);
  };
*/

  return (
    <div className={classes.root}>
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          
          <Typography className={classes.heading}>Tema 1</Typography>
          <Typography className={classes.secondaryHeading}></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container>
              <Grid item xs={12}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography className={classes.title} color="textPrimary" gutterBottom>
                      Concepto
                    </Typography>

                    <MenuList>
                      <MenuItem> <input type='file' /> </MenuItem>
                    </MenuList>

                    <TextField
                      id="outlined-textarea"
                      label="Descripción del Concepto"
                      placeholder="Digita el Texto"
                      multiline
                      margin="normal"
                      variant="outlined"
                      fullWidth={100}
                    />
                  </CardContent>
                  <CardActions>
                    <Fab size="small" color="primary" aria-label="Add" className={classes.fab}>
                      <AddIcon />
                    </Fab>
                  </CardActions>
                </Card>
              </Grid>
          </Grid>
         </ExpansionPanelDetails>
      </ExpansionPanel>  

      <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          
          <Typography className={classes.heading}>Tema 2</Typography>
          <Typography className={classes.secondaryHeading}></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container>
              <Grid item xs={12}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography className={classes.title} color="textPrimary" gutterBottom>
                      Concepto
                    </Typography>

                    <MenuList>
                      <MenuItem> <input type='file'/> </MenuItem>
                    </MenuList>

                    <TextField
                      id="outlined-textarea"
                      label="Descripción del Concepto"
                      placeholder="Digita el Texto"
                      multiline
                      margin="normal"
                      variant="outlined"
                      fullWidth={100}
                    />
                  </CardContent>
                  <CardActions>
                    <Fab size="small" color="primary" aria-label="Add" className={classes.fab}>
                      <AddIcon />
                    </Fab>
                  </CardActions>
                </Card>
              </Grid>
          </Grid>
         </ExpansionPanelDetails>
      </ExpansionPanel>  
    </div>
  );
}
export default MainConcepto;




