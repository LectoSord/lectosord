import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuList from '@material-ui/core/MenuList';
import { MenuItem, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    width: '80%',
    display: 'absolute',
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
  formControl: {
    margin: theme.spacing(1),
  },

}));

function MainPractica() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  return (
    <div className={classes.root}>

      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          >
          
          <Typography className={classes.heading}>Tema 1</Typography>
          <Typography className={classes.secondaryHeading}>
          </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
              <MenuList>  
                  <MenuItem>
                      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                          <ExpansionPanelSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                          >
                          <Typography className={classes.heading}>Organizar</Typography>
                          <Typography className={classes.secondaryHeading}></Typography>
                          </ExpansionPanelSummary>
                          <ExpansionPanelDetails>
                              <div>
                                  <Card className={classes.card}>
                                  <CardContent>
                                    <Grid container>
                                      <Grid>
                                          <MenuList>
                                          <h4 align='center'> Imagen </h4>
                                          <MenuItem> <input type='file'  /> </MenuItem>
                                          <MenuItem> <input type='file'  /> </MenuItem>
                                          <MenuItem> <input type='file'  /> </MenuItem>
                                          <MenuItem> <input type='file'  /> </MenuItem>
                                          </MenuList>
                                      </Grid>

                                      <Grid>
                                          <MenuList>
                                              <h4 align='center'> Palabra </h4>
                                              <MenuItem> <input align='center'  /> </MenuItem>
                                              <MenuItem> <input align='center' /> </MenuItem>
                                              <MenuItem> <input align='center'  /> </MenuItem>
                                              <MenuItem> <input align='center' /> </MenuItem>
                                          </MenuList>
                                      </Grid>
                                    </Grid>
                                  </CardContent>
                                  </Card>
                              </div>
                          </ExpansionPanelDetails>
                      </ExpansionPanel>
                  </MenuItem>
                  <MenuItem>
                      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                          <ExpansionPanelSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                          >
                          <Typography className={classes.heading}>Escribir</Typography>
                          <Typography className={classes.secondaryHeading}>
                          </Typography>
                          </ExpansionPanelSummary>
                          <ExpansionPanelDetails>
                              <div>
                                  <Card>
                                  <CardContent>
                                      <Grid container>
                                      <Grid >
                                          <MenuList>
                                          <h4 align='center'> Imagen </h4>
                                          <MenuItem> <input type='file'/> </MenuItem>
                                          <MenuItem> <input type='file'/> </MenuItem>
                                          </MenuList>
                                      </Grid>
                                      </Grid>
                                  </CardContent>
                                  </Card>
                              </div>
                          </ExpansionPanelDetails>
                      </ExpansionPanel>
                                  
                  </MenuItem>
                  <MenuItem>
                      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                          <ExpansionPanelSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                          >
                          <Typography className={classes.heading}>Comprender</Typography>
                          <Typography className={classes.secondaryHeading}>
                          </Typography>
                          </ExpansionPanelSummary>
                          <ExpansionPanelDetails>
                              <div>
                                  <Card>
                                  <CardContent>
                                      <Grid container>
                                      <Grid>
                                          <MenuList>
                                              <h4 align='center'> Imagen </h4>
                                              <MenuItem> <input type='file' /> </MenuItem>
                                              <MenuItem> <input type='file' /> </MenuItem>
                                          </MenuList>
                                      </Grid>

                                      <Grid>
                                          <h4 align='center'> Texto </h4>
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
                                      </Grid>
                                  </CardContent>
                                  </Card>
                              </div>
                          </ExpansionPanelDetails>
                      </ExpansionPanel>
                  </MenuItem>
              </MenuList>
          </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          >
          
          <Typography className={classes.heading}>Tema 2</Typography>
          <Typography className={classes.secondaryHeading}>
          </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
              <MenuList>  
                  <MenuItem>
                      <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                          <ExpansionPanelSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel2bh-content"
                          id="panel2bh-header"
                          >
                          <Typography className={classes.heading}>Organizar</Typography>
                          <Typography className={classes.secondaryHeading}></Typography>
                          </ExpansionPanelSummary>
                          <ExpansionPanelDetails>
                              <div>
                                  <Card className={classes.card}>
                                  <CardContent>
                                      <Grid container>
                                      <Grid>
                                          <MenuList>
                                          <h4 align='center'> Imagen </h4>
                                          <MenuItem> <input type='file' /> </MenuItem>
                                          <MenuItem> <input type='file'  /> </MenuItem>
                                          <MenuItem> <input type='file' /> </MenuItem>
                                          <MenuItem> <input type='file'  /> </MenuItem>
                                          </MenuList>
                                      </Grid>

                                      <Grid>
                                          <MenuList>
                                              <h4 align='center'> Palabra </h4>
                                              <MenuItem> <input align='center'  /> </MenuItem>
                                              <MenuItem> <input align='center'  /> </MenuItem>
                                              <MenuItem> <input align='center' /> </MenuItem>
                                              <MenuItem> <input align='center' /> </MenuItem>
                                          </MenuList>
                                      </Grid>
                                      </Grid>
                                  </CardContent>
                                  </Card>
                              </div>
                          </ExpansionPanelDetails>
                      </ExpansionPanel>
                  </MenuItem>

                  <MenuItem>
                      <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                          <ExpansionPanelSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel2bh-content"
                          id="panel2bh-header"
                          >
                          <Typography className={classes.heading}>Escribir</Typography>
                          <Typography className={classes.secondaryHeading}>
                          </Typography>
                          </ExpansionPanelSummary>
                          <ExpansionPanelDetails>
                              <div>
                                <Card>
                                  <CardContent>
                                    <Grid container>
                                      <Grid >
                                        <MenuList>
                                          <h4 align='center'> Imagen </h4>
                                          <MenuItem> <input type='file'  /> </MenuItem>
                                          <MenuItem> <input type='file'  /> </MenuItem>
                                        </MenuList>
                                      </Grid>
                                    </Grid>
                                  </CardContent>
                                </Card>
                              </div>
                          </ExpansionPanelDetails>
                      </ExpansionPanel>
                                  
                  </MenuItem>
                  <MenuItem>
                      <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                          <ExpansionPanelSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel2bh-content"
                          id="panel2bh-header"
                          >
                          <Typography className={classes.heading}>Comprender</Typography>
                          <Typography className={classes.secondaryHeading}>
                          </Typography>
                          </ExpansionPanelSummary>
                          <ExpansionPanelDetails>
                              <div>
                                <Card>
                                  <CardContent>
                                    <Grid container>
                                      <Grid>
                                        <MenuList>
                                          <h4 align='center'> Imagen </h4>
                                          <MenuItem> <input type='file' /> </MenuItem>
                                          <MenuItem> <input type='file'  /> </MenuItem>
                                        </MenuList>
                                      </Grid>

                                      <Grid>
                                          <h4 align='center'> Texto </h4>
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
                                    </Grid>
                                  </CardContent>
                                </Card>
                              </div>
                          </ExpansionPanelDetails>
                      </ExpansionPanel>
                  </MenuItem>
              </MenuList>
          </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>

  );
}

export default MainPractica;
