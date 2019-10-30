import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
//mio
import EvaluacionOrganizar from './EvaluacionOrganizar';
import EvaluacionEscribir from './EvaluacionEscribir';
import EvaluacionComprender from './EvaluacionComprender';
//images
import MuyBien from '../Images/Muybien.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
  },
  backButton: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(70)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  card: {
    maxWidth: 1200,
  },
  media: {
    height: 150,
    width: 215,
  },
  title: {
    marginTop: 20,
    marginLeft: 390
  },
  textTitle: {
    marginTop: 20,
    marginLeft: 455
  },
  images: {
    marginTop: 20,
    width: 100,
    height: 100,
    marginRight: 500
  },
  image: {
    marginLeft: 750,
    height: 130,
    width: 200
  },
  backgroundStudent: {
    backgroundColor: '#F8FCC6'
  }
}));

  
function getSteps() {
  return ['Organizar', 'Escribir', 'Comprender'];
}

function EvaluacionEstudiante(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return (<EvaluacionOrganizar      
        image={props.object.evaluacion.organizar}
        estudiante={props.estudiante}
        escritura={true}
      />);
    case 1:
      return (<EvaluacionEscribir      
        image={props.object.evaluacion.escribir}
        estudiante={props.estudiante}
        escritura={true}
      />);
    case 2:
      return (<EvaluacionComprender      
        image={props.object.evaluacion.comprender}
        estudiante={props.estudiante}
        escritura={true}
      />);
  }
}

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  return (
    <div >
      
      <Typography variant="h5" color='Primary' gutterBottom className={classes.title}>
        Evaluación
      </Typography>

      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}> Muy Bien </Typography>

              <CardMedia align='center'
                className={classes.media}
                image={MuyBien}
                title="Muybien"
              />
            

            <Typography variant="h5" className={classes.textResumen} color='Primary'>
                RESUMEN 
            </Typography>
            <Typography variant="h5" className={classes.textTitle}>
                Organizar
            </Typography>
            <br/> 
            <Typography variant="h6" gutterBottom>
              <EvaluacionOrganizar 
                image={props.object.evaluacion.organizar}
                estudiante={props.estudiante}
                escritura={false}
              />
            </Typography>

            <Typography variant="h5" className={classes.textTitle}>
                Escribir 
            </Typography>
            <br/> 
            <Typography variant="h6" gutterBottom>
              <EvaluacionEscribir 
                image={props.object.evaluacion.escribir}
                estudiante={props.estudiante}
                escritura={false}
              />
            </Typography>
            
            <Typography variant="h5" className={classes.textTitle}>
                Comprender 
            </Typography>
            <br/>
            <Typography variant="h6" gutterBottom>
              <EvaluacionComprender 
                image={props.object.evaluacion.comprender}
                estudiante={props.estudiante}
                escritura={false}
              />
            </Typography>

            <Button onClick={handleReset}>Volver a Evaluar</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Atrás
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Guardar' : 'Siguiente'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default EvaluacionEstudiante;
