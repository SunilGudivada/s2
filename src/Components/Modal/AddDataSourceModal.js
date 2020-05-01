import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Description from '@material-ui/icons/Description';
import Storage from '@material-ui/icons/Storage';
import { blue } from '@material-ui/core/colors';
import { FormControl,Grid, Card, CardContent, CardActions, TextField, OutlinedInput, InputAdornment, IconButton, InputLabel} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import clsx from 'clsx';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Cancel from '@material-ui/icons/Cancel';

const dataSourceTypes = ['Database', 'File'];
const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },root: {
    minWidth: 275,
    flexGrow: 1,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },margin: {
    margin: theme.spacing(0),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
  addDataSourceForm:{
    margin: '8px'
  },
  actionButton: {
    marginRight: theme.spacing(1),
  }
}));

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  
  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Select Data Source Type</DialogTitle>
      <List>
        {dataSourceTypes.map((dataSource) => (
          <ListItem button onClick={() => handleListItemClick(dataSource)} key={dataSource}>
            <ListItemAvatar>

              {dataSource === "Database" ? (
                <Avatar className={classes.avatar}>
                  <Storage />
                </Avatar>
              ):(
                <Avatar className={classes.avatar}>
                  <Description />
                </Avatar>
              )}
              
            </ListItemAvatar>
            <ListItemText primary={dataSource} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState('');
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} style={{float:"right"}}>
        Add Data Source
      </Button>
      <br />
        <Grid container style={{marginTop:'36px', marginBottom:'10px'}}>
          {selectedValue=== 'Database' ?(
            <Card className={clsx(classes.root,classes.avatar)} variant="outlined" >
             
              <CardContent style={{padding:'16px'}}>
                <TextField size="small" id="outlined-basic" label="Data source Name" variant="outlined" className={classes.addDataSourceForm}/>
                <TextField size="small" id="outlined-basic" label="Username" variant="outlined" className={classes.addDataSourceForm}/>
                <FormControl size="small" className={clsx(classes.margin, classes.textField,classes.addDataSourceForm)} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput id="outlined-adornment-password" type={values.showPassword ? 'text' : 'password'}
                  onChange={handleChange('password')}

                  endAdornment={
                    <InputAdornment position="end" >
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={150}
                />
                </FormControl>
                <TextField style={{width:'70%'}} id="outlined-basic" size="small" label="JDBC String" variant="outlined" className={classes.addDataSourceForm}/>
                <Button href="/" color="primary" onClick={(event)=>event.preventDefault()} className={classes.addDataSourceForm}> Test Connection </Button>
              </CardContent>
              <CardActions style={{margin:'0px 16px 16px 16px'}}>
                <Button disableElevation variant="outlined" size="large" color="primary" className={classes.button} startIcon={<CheckCircle fontSize="large" />} > Save </Button>
                <Button disableElevation variant="outlined" size="large" color="primary" className={classes.button} startIcon={<Cancel fontSize="large"/>} onClick={() => setSelectedValue(' ')}> cancel </Button>
                </CardActions>
            </Card>
          ): selectedValue=== 'File' ? (
            
            <Card className={clsx(classes.root,classes.avatar)} variant="outlined" >
             
              <CardContent style={{padding:'16px'}}>
              
                <TextField size="small" id="outlined-basic" label="Data source Name" variant="outlined" className={classes.addDataSourceForm}/>
                <TextField size="small" id="outlined-basic" label="Username" variant="outlined" className={classes.addDataSourceForm}/>  
                <FormControl size="small" className={clsx(classes.margin, classes.textField,classes.addDataSourceForm)} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput id="outlined-adornment-password" type={values.showPassword ? 'text' : 'password'}
                  onChange={handleChange('password')}

                  endAdornment={
                    <InputAdornment position="end" >
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={150}
                />
                </FormControl>
                <div className={classes.addDataSourceForm}>
                  <input accept="file/*" style={{display: 'none'}} id="contained-button-file" multiple type="file"/> 
                  <label htmlFor="contained-button-file">
                    <Button variant="contained" size="large" color="primary" component="span">
                      Upload File
                    </Button>
                  </label>
                </div>
                
              </CardContent>
              <CardActions style={{margin:'0px 16px 16px 16px'}}>
                <Button disableElevation variant="outlined" size="large" color="primary" className={classes.button} startIcon={<CheckCircle fontSize="large" />} > Save </Button>
                <Button disableElevation variant="outlined" size="large" color="primary" className={classes.button} startIcon={<Cancel fontSize="large"/>} onClick={() => setSelectedValue(' ')}> cancel </Button>
                </CardActions>
            </Card>



          ): (" ")}
        </Grid>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </div>
  );
}