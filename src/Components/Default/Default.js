import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {Button,Container} from '@material-ui/core';
import Grow from '@material-ui/core/Grow';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '90vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  }
}));

export default function Default(){
    const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      
      <Grid item xs={12} component={Paper} variant="outlined" square>
        <div className={classes.paper}>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...{ timeout: 1000 }}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Welcome Admin
            </Typography>
            </Grow>
            <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...{ timeout: 1500 }}>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              This is the demo site, please dont upload your personal information.
            </Typography>
            </Grow>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...{ timeout: 2000 }}>
                  <Button href="#/MapToSource" variant="contained" color="primary">
                    Map to Source
                  </Button>
                  </Grow>
                </Grid>
                <Grid item>
                <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...{ timeout: 2000 }}>
                  <Button href="#/Ruleset/add" variant="outlined" color="primary">
                    Create Rule
                  </Button>
                  </Grow>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
          
        </div>
      </Grid>
    </Grid>
  );
}