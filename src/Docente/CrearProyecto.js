import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import firebase from 'firebase'
//mio
import MainTema from './MainTema'
import MainConcepto from './MainConcepto'
import MainPractica from './MainPractica'
import MainEvaluacion from './MainEvaluacion'
import UploadImage from '../Images/UploadImage'


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  space: {
    marginLeft: theme.spacing(2),
  }
}));

function CrearProyecto() {

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [keyProject,setkeyProject]= React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  function getSteps() {
    return ['Nombre del proyecto', 'Temas', 'Conceptos', 'Prácticas', 'Evaluación'];
  }
  function setValueFirebase(e){
      var dataProjecct={
        projectName:e.target.value
      }
      // Get a key for a new Post.
      var newKey = firebase.database().ref().child('project').push().key;
      setkeyProject(newKey)
      var updates = {};
      updates['/project/' + newKey] = dataProjecct;
      return firebase.database().ref().update(updates);
  }
  function getStepContent(step) {
    switch (step) {
      case 0:
        return (<div>
          <TextField
         id="standard-name"
         label="Nombre"
         margin="normal"
         onBlur={setValueFirebase}
   />
     </div>
   )
      case 1:
        return (<MainTema/>)
          
      case 2:
        return (<MainConcepto keyProject={keyProject}/>)
  
      case 3: 
        return (<MainPractica keyProject={keyProject}/>)
  
      case 4: 
        return (<MainEvaluacion keyProject={keyProject}/>)
  
    }
  }
  

  function isStepOptional(step) {
    return step === 1;
  }

  function isStepSkipped(step) {
    return skipped.has(step);
  }

  function handleNext() {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
      
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleSkip() {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  }

  function handleReset() {
    setActiveStep(0);
  }

  return (

    <div className={classes.root} className={classes.space}>
      <Typography variant="h6" gutterBottom >
        Crear Proyecto
      </Typography>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              El proyecto ha sido guardado
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Atrás
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Guardar Proyecto' : 'Siguiente'}
              </Button>

              <br/>
              <br/>
              <br/>

              <UploadImage />

            </div>




          </div>
        )}
      </div>
    </div>
  );
}
export default CrearProyecto;