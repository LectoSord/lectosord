import React from 'react';
import Typography from '@material-ui/core/Typography';

//mio
import InformacionApp from '../Docente/InformacionApp'

class MainEstudiante extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: '', option:0};
      }

    changeView(option){
        this.setState({option})
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
      return (
       <>
        <Typography variant="h3" color='initial' align={"center"}> Bienvenido!</Typography>
        <InformacionApp/>
       </>
      );
    }
  }
export default MainEstudiante;