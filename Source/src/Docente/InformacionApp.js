import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

//Media
import Logo from '../Images/LectoSord.png'
import ScrollDialog from '../Estudiante/Scroll';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 1200,
  },
  media: {
    height: 270,
    width: 400,
    marginLeft: theme.spacing(40),
    marginTop: theme.spacing(2),
  },
  text: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(2),
  }
}));

function InformacionApp(props) {
  const classes = useStyles();

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

          <CardContent>
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
      </Card>

    </div>

      
   
    
  );
}
export default InformacionApp;