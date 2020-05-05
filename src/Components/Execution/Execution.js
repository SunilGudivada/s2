import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Box, Card, CardContent , Typography, Tooltip} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import PlayArrow from '@material-ui/icons/PlayArrow';
import RotateLeft from '@material-ui/icons/RotateLeft';
import Timer from '@material-ui/icons/Timer';
import Stop from '@material-ui/icons/Stop';
import {green,red,indigo,orange} from '@material-ui/core/colors';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 240,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
      PlayArrow: {
        color:green[500]
      },
      RotateLeft: {
        color:orange[900]
      },
      Timer: {
        color:indigo[500]
      },
      Stop: {
        color: red[500]
      },
      ruleSuccess:{
        color:green[500],
        backgroundColor: green[100],
      },
      ruleFailure:{
        color:red[500],
        backgroundColor: red[100],
      },
      ruleWarning:{
        color:orange[500],
        backgroundColor: orange[100],
      }
}));

function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

export default function Execution(){
    const classes = useStyles();
    const [ruleName, setRuleName] = React.useState('');

    const handleChange = (event) => {
        setRuleName(event.target.value);
    };

    return(
        <div className={classes.root}>
        <Card className={classes.root} variant="outlined">
            <CardContent>
            <Typography component={'span'} variant={'body2'}>
                <Box textAlign="center" m={1} fontSize="h5.fontSize" style={{fontWeight: 'bold'}}>
                  Execution
                </Box>
            </Typography>

            <Grid container spacing={1}>
                <Grid container item xs={4}>

                </Grid>
                <Grid container item xs={4}>
                <FormControl variant="outlined" fullWidth size="small" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Select Ruleset</InputLabel>
                    <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={ruleName}
                    onChange={handleChange}
                    label="Select Ruleset"
                    >
                    <MenuItem value={10}>Ruleset 01</MenuItem>
                    <MenuItem value={20}>Ruleset 02</MenuItem>
                    <MenuItem value={30}>Ruleset 03</MenuItem>
                    </Select>
                </FormControl>
                </Grid>
                <Grid container item xs>
                    <Tooltip title="Start">
                        <IconButton aria-label="Start" className={classes.PlayArrow}>
                            <PlayArrow />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Stop">
                        <IconButton aria-label="Stop" className={classes.Stop}>
                            <Stop />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Restart">
                        <IconButton aria-label="Restart" className={classes.RotateLeft}>
                            <RotateLeft />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="schedule">
                        <IconButton aria-label="schedule" className={classes.Timer}>
                            <Timer />
                        </IconButton>
                    </Tooltip>
                </Grid>
            </Grid>
            <br></br>

            <Grid container item>
                <Grid container item xs={3}>

                </Grid>
                <Grid  item xs={6}>
                <div className={classes.demo}>
                <Typography component={'span'} variant={'body2'}>
                    <Box textAlign="center" m={1} fontSize="h5.fontSize" style={{fontWeight: 'bold'}}>
                    Execution Details
                    </Box>
                </Typography>
                    <List >
                    {generate(<>
                        <ListItem>
                        <ListItemAvatar >
                            <Avatar className={classes.ruleSuccess}>
                            <FolderIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Rule Set 03"
                            secondary={'Execution Succesful. Please check the events.'}
                        />
                        <ListItemSecondaryAction>
                            <Tooltip title="schedule">
                                <IconButton aria-label="schedule" className={classes.Timer}>
                                    <Timer />
                                </IconButton>
                            </Tooltip>  
                        </ListItemSecondaryAction>
                        </ListItem>

                        <ListItem>
                        <ListItemAvatar >
                            <Avatar className={classes.ruleWarning}>
                            <FolderIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="RuleSet 02"
                            secondary={'  Line 22:8:  "Info" is defined but never used '}
                        />
                        <ListItemSecondaryAction>
                            <Tooltip title="Restart">
                            <IconButton aria-label="Restart" className={classes.RotateLeft}>
                                <RotateLeft />
                            </IconButton>
                            </Tooltip>
                            <Tooltip title="schedule">
                                <IconButton aria-label="schedule" className={classes.Timer}>
                                    <Timer />
                                </IconButton>
                            </Tooltip>  
                        </ListItemSecondaryAction>
                        </ListItem>
                        <ListItem>
                        <ListItemAvatar >
                            <Avatar className={classes.ruleFailure}>
                            <FolderIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Ruleset 04"
                            secondary={'Column mismatch is present for the ruleset {{ NAME }}'}
                        />
                        <ListItemSecondaryAction>
                            <Tooltip title="Restart">
                            <IconButton aria-label="Restart" className={classes.RotateLeft}>
                                <RotateLeft />
                            </IconButton>
                            </Tooltip>
                            <Tooltip title="schedule">
                                <IconButton aria-label="schedule" className={classes.Timer}>
                                    <Timer />
                                </IconButton>
                            </Tooltip>  
                        </ListItemSecondaryAction>
                        </ListItem>
                        <ListItem>
                        <ListItemAvatar >
                            <Avatar className={classes.ruleSuccess}>
                            <FolderIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Ruleset 05"
                            secondary={'Executed succesfully'}
                        />
                        <ListItemSecondaryAction>
                            <Tooltip title="schedule">
                                <IconButton aria-label="schedule" className={classes.Timer}>
                                    <Timer />
                                </IconButton>
                            </Tooltip>  
                        </ListItemSecondaryAction>
                        </ListItem></>,
                    )}
                    </List>
                </div>
                </Grid>
                </Grid>
            </CardContent>
        </Card>
      </div>
    )
}