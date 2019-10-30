import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
//Media
import Logo from '../src/Images/LectoSord.png'


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    marginLeft: theme.spacing(75),
  },  
  button2: {
    margin: theme.spacing(1),
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(27),
  }, 
  input: {
    display: 'none',
  },
  card: {
    width: theme.spacing(168.5),
  },
  card2: {
    maxWidth: 500,
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(50),
    marginRight: theme.spacing(5),
  },
  media: {
    height: 270,
    width: 400,
    marginLeft: theme.spacing(60),
    marginTop: theme.spacing(2),
  },
  textField: {
    flexBasis: 200,
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(16),
  },
  text: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(6),
  }
}));

function IndexApp(props) {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };
    
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  function handleEntrar(){ //Entrar como Docente
    props.changeView(7);
    props.changeMode("profesor","");
  }
  function handleClickOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }

/*  function handleView(){
      switch(this.state.option){
        case 1:
          return (<MainDocente >  </MainDocente>)
        default:
          return (<IndexApp  changeView={this.changeView.bind(this)}/>)
      }
  }*/

    return (
      <div>
        
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={Logo}
              title="LectoSord"
              position={'center'}
            />
            <CardContent className={classes.card}>
              <Typography gutterBottom variant="h5" component="h2" className={classes.text}>
                LectoSord
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" align="justify" className={classes.text}>
                LectoSord es una aplicación que sirve para agregar contenidos educativos en 
                forma de proyectos, temas, conceptos, prácticas y evaluaciones, para enseñar diferentes 
                contenidos a los estudiantes.

                Los estudiantes a su vez pueden acceder a la información cargada por el docente para 
                visualizar, realizar prácticas de organizar, escribir y comprender, de igual manera, pueden 
                realizar evaluaciones dependiendo de su nivel de conocimiento.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button variant="contained" color="primary" className={classes.button}  onClick={handleClickOpen}>
              Iniciar Sesion
            </Button>
          </CardActions>
        </Card>

        {/*<Card className={classes.card2}>
          <TextField
            id="outlined-adornment-password"
            className={(classes.margin, classes.textField)}
            variant="outlined"
            type={values.showPassword ? 'text' : 'password'}
            label="Password"
            value={values.password}
            onChange={handleChange('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    aria-label="Toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Card>
          */}


        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Iniciar Sesion</DialogTitle>
        <DialogContent>

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Usuario"
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Contraseña"
            type="email"
            fullWidth
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    aria-label="Toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleClose} color="primary" onClick={handleEntrar}>
            Iniciar sesion
          </Button>
        </DialogActions>
      </Dialog>

      </div>

    

    );
}
export default IndexApp;