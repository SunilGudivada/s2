import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {
    Button,
    Box,
    Card, 
    CardActions,
    CardContent,
    Divider,
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    ExpansionPanelActions,
    FormControl,
    FormControlLabel,
    Grid,
    IconButton,
    InputLabel,
    MenuItem,
    Select,
    Switch,
    Typography,
    TextField,
    Tooltip
} from '@material-ui/core';

import { Edit, Clear, Add, } from '@material-ui/icons'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import { grey } from '@material-ui/core/colors';

import PlayArrow from '@material-ui/icons/PlayArrow';
import RotateLeft from '@material-ui/icons/RotateLeft';
import Timer from '@material-ui/icons/Timer';
import Stop from '@material-ui/icons/Stop';
import {green,red,indigo,orange} from '@material-ui/core/colors';

const useStyles = makeStyles((theme)=>({
    root: {
        minWidth: 275,
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
    },
    ruleSetName: {
        fontSize: theme.typography.pxToRem(15),
        color: "grey",
    },
    ruleSetDescription: {
        fontSize: theme.typography.pxToRem(15),
        color: "grey",
    },
    ruleSetScoreThreshold: {
        fontSize: theme.typography.pxToRem(15),
        color: "grey",
    },
    aggregationMethod: {
        margin: theme.spacing(1),
        fontSize: theme.typography.pxToRem(15),
        width: 200,
    },
    addRule:{
        float: 'right',
    },
    actionButtons:{
        float: 'right',
        paddingBottom: '10px',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
      },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    details: {
        alignItems: 'center',
        backgroundColor: grey[200],
    },
    column: {
        flexBasis: '33.33%',
        fontSize: theme.typography.pxToRem(15),
    },
    helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: theme.spacing(1, 2),
    },
    ruleHelper: {
        padding: theme.spacing(1, 2),
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
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
    }
}));

function RuleSet() {
    const classes = useStyles();
    const [ruleSetNameEdit, setRuleSetNameEdit] = React.useState(false);
    const [ruleSetName, setRuleSetName] = React.useState('Rule Set Name');
    const [ruleSetScoreThresholdEdit, setRuleSetScoreThresholdEdit] = React.useState(false);
    const [ruleSetScoreThreshold, setRuleSetScoreThreshold] = React.useState(10);
    const [ruleSetDescriptionEdit, setRuleSetDescriptionEdit] = React.useState(false);
    const [ruleSetDescription, setRuleSetDescription] = React.useState('This is the place for Rule Set Description. Please click on the edit button to edit the content.');
    const [aggregationMethod, setAggregationMethod] = React.useState('No Method selected');
    const [aggregationMethodEdit, setAggregationMethodEdit] = React.useState(false);

    const handleAggregationMethod = (event) => {
        setAggregationMethod(event.target.value);
      };
    const [ruleStatus, setRuleStatus] = React.useState({
        checkedA: true,
        checkedB: true,
    });
    const handleRuleStatusChange = (event) => {
        setRuleStatus({ ...ruleStatus, [event.target.name]: event.target.checked });
    };
    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
            <Grid item>
                <Typography component={'span'} variant={'body2'}>
                    <Box textAlign="center" m={1} fontSize="h5.fontSize" style={{ fontWeight: 'bold' }}>
                        Deduplication Rules
                    </Box>
                </Typography>
                </Grid>
                <Grid className={classes.actionButtons}>
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
                

                
                <Grid container>
                    <Grid item xs={4}>
                        {!ruleSetNameEdit ? (
                            <div>
                                <div className={classes.ruleSetName}><b>Ruleset Name: <br/></b> {ruleSetName}
                                    <IconButton aria-label="delete" className={classes.margin} onClick={() => setRuleSetNameEdit(true)}>
                                        <Edit fontSize="small" />
                                    </IconButton>
                                </div>
                            </div>
                        ) : (
                                <div>
                                    <TextField id="outlined-basic" size="small" label="Rule Set Name" value={ruleSetName} variant="outlined" onChange={e => setRuleSetName(e.target.value)} />
                                    <IconButton aria-label="delete" className={classes.margin} onClick={() => setRuleSetNameEdit(false)}>
                                        <Clear fontSize="small" />
                                    </IconButton>
                                </div>
                            )}

                    </Grid>
                    <Grid item xs={4}>

                    </Grid>
                    <Grid item xs={4}>
                        {!ruleSetDescriptionEdit ? (
                            <div>
                                <div className={classes.ruleSetDescription}><b>Ruleset Description: <br/></b> {ruleSetDescription}
                                    <IconButton aria-label="delete" className={classes.margin} onClick={() => setRuleSetDescriptionEdit(true)}>
                                        <Edit fontSize="small" />
                                    </IconButton>
                                </div>
                            </div>
                        ) : (
                                <div>
                                    <FormControl fullWidth className={classes.margin}>
                                        <TextField id="outlined-multiline-static" label="Rulset Description" multiline rows={3} variant="outlined" value={ruleSetDescription} onChange={e => setRuleSetDescription(e.target.value)} />
                                        <IconButton aria-label="delete" className={classes.margin} onClick={() => setRuleSetDescriptionEdit(false)}>
                                            <Clear fontSize="small" />
                                        </IconButton>
                                    </FormControl>
                                </div>
                            )}

                    </Grid>


                    <Grid item xs={4}>
                    {!aggregationMethodEdit ? (
                            <div>
                                <div className={classes.ruleSetName}><b>Aggregation Method: <br/></b> {aggregationMethod}
                                    <IconButton aria-label="delete" className={classes.margin} onClick={() => setAggregationMethodEdit(true)}>
                                        <Edit fontSize="small" />
                                    </IconButton>
                                </div>
                            </div>
                        ) : (
                        <div>
                            <FormControl size="small" variant="outlined" className={classes.aggregationMethod}>
                            <InputLabel id="demo-simple-select-outlined-label">Aggregation Method</InputLabel>
                            <Select labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined"
                            value={aggregationMethod}
                            onChange={handleAggregationMethod}
                            label="Select Aggregation Method"
                            >
                            <MenuItem value="" disabled>
                                Aggregation Method
                            </MenuItem>
                            <MenuItem value='Minimum'>Minimum</MenuItem>
                            <MenuItem value='Maximum'>Maximum</MenuItem>
                            <MenuItem value='Average'>Average</MenuItem>    
                            </Select>
                        </FormControl>
                        <IconButton aria-label="delete" className={classes.margin} onClick={() => setAggregationMethodEdit(false)}>
                            <Clear fontSize="small" />
                        </IconButton>
                        </div>

                        )}
                    </Grid>
                    <Grid item xs={4}>

                    </Grid>
                    <Grid item xs={4}>
                        {!ruleSetScoreThresholdEdit ? (
                            <div>
                                <div className={classes.ruleSetScoreThreshold}><b>Ruleset Score Threshold: <br/></b> {ruleSetScoreThreshold}
                                    <IconButton aria-label="delete" className={classes.margin} onClick={() => setRuleSetScoreThresholdEdit(true)}>
                                        <Edit fontSize="small" />
                                    </IconButton>
                                </div>
                            </div>
                        ) : (
                                <div>
                                    <TextField id="outlined-basic" size="small" label="Ruleset Score Threshold" value={ruleSetScoreThreshold} variant="outlined" onChange={e => setRuleSetScoreThreshold(e.target.value)} />
                                    <IconButton aria-label="delete" className={classes.margin} onClick={() => setRuleSetScoreThresholdEdit(false)}>
                                        <Clear fontSize="small" />
                                    </IconButton>
                                </div>
                            )}

                    </Grid>
                </Grid>
                
                <Button variant="outlined" size="small" color="primary" className={classes.addRule} >
                    <Add fontSize="small"/> Add Rule
                </Button>
                <br/>
                <Typography component={'span'} variant={'body2'}>
                    <Box textAlign="center" m={1} fontSize="h5.fontSize" style={{ fontWeight: 'bold' }}>
                        Available Rules
                    </Box>
                </Typography>
                
                <div key={`section-1`}>
                <ExpansionPanel >
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                    >
                    <div className={classes.column}>
                        <Typography className={classes.heading}>Rule 1</Typography>
                    </div>
                    <div className={classes.column}>
                        <Typography className={classes.secondaryHeading}>This is the place for Description</Typography>
                    </div>
                    <div className={classes.column}>
                        <Typography className={classes.secondaryHeading}>Rule Weightage - 25</Typography>
                    </div>

                    </ExpansionPanelSummary>
                    <div className={clsx(classes.column)} style={{backgroundColor: grey[300]}}>
                        <Grid container>
                            <Grid item xs={2} className={classes.ruleHelper}>
                                <Typography variant="caption"><b>Rule Name: </b><br/> Rule 1</Typography>
                            </Grid>
                            <Grid item xs={4} className={classes.ruleHelper}>
                                <Typography variant="caption"><b>Rule Description</b><br/>Description about the rule will be mentioned here</Typography>
                            </Grid>
                            <Grid item xs={2} className={classes.ruleHelper}>
                                <Typography variant="caption"><b>Rule Weightage</b><br/> 25</Typography>
                            </Grid>
                            <Grid item xs={4} className={classes.ruleHelper}>
                                <Button variant="outlined" size="small" className={classes.addRule} >
                                    <Add fontSize="small"/> Add Attribute 
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                    <Divider />
                    <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Attribute</b><br/> Full Name</Typography>
                    </div>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Matching Method</b><br/> 
                            Fuzzy
                        </Typography>
                    </div>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Fuzzy Value: </b><br/> 
                            25
                        </Typography>
                    </div>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Fuzzy Cut Off </b><br/> 
                            23
                        </Typography>
                    </div>
                    <div className={classes.column} >
                        <IconButton aria-label="delete" className={classes.margin} onClick={() =>{}}>
                            <Edit fontSize="small" />
                        </IconButton>
                        <IconButton aria-label="delete" className={classes.margin} onClick={() => {}}>
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                        <FormControlLabel control={
                            <Switch
                                checked={ruleStatus.checked}
                                onChange={handleRuleStatusChange}
                                name="checkedB"
                                color="primary"
                            />
                        } style={{ margin: '2px' }}
                        />
                    </div>
                    
                    </ExpansionPanelDetails>
                    <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Attribute</b><br/> DOB</Typography>
                    </div>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Matching Method</b><br/> 
                            Exact Match
                        </Typography>
                    </div>
                    <div className={classes.column} >
                    </div>
                    <div className={classes.column} >
                    </div>
                    <div className={classes.column} >
                        <IconButton aria-label="delete" className={classes.margin} onClick={() =>{}}>
                            <Edit fontSize="small" />
                        </IconButton>
                        <IconButton aria-label="delete" className={classes.margin} onClick={() => {}}>
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                        <FormControlLabel control={
                            <Switch
                                checked={ruleStatus.checked}
                                onChange={handleRuleStatusChange}
                                name="checkedB"
                                color="primary"
                            />
                        } style={{ margin: '2px' }}
                        />
                    </div>
                    
                    </ExpansionPanelDetails>
                    <Divider />
                    <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Attribute</b><br/> Email</Typography>
                    </div>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Matching Method</b><br/> 
                            Exact Match
                        </Typography>
                    </div>
                    <div className={classes.column} >
                    </div>
                    <div className={classes.column} >
                    </div>
                    <div className={classes.column} >
                        <IconButton aria-label="delete" className={classes.margin} onClick={() =>{}}>
                            <Edit fontSize="small" />
                        </IconButton>
                        <IconButton aria-label="delete" className={classes.margin} onClick={() => {}}>
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                        <FormControlLabel control={
                            <Switch
                                checked={ruleStatus.checked}
                                onChange={handleRuleStatusChange}
                                name="checkedB"
                                color="primary"
                            />
                        } style={{ margin: '2px' }}
                        />
                    </div>
                    
                    </ExpansionPanelDetails>
                        
                    
                    
                    <Divider />
                    <ExpansionPanelActions>
                    <Button size="small">Cancel</Button>
                    <Button size="small" color="primary">
                        Save
                    </Button>
                    </ExpansionPanelActions>
                </ExpansionPanel>

               </div> 





               <div key={`section-2`}>
                <ExpansionPanel >
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                    >
                    <div className={classes.column}>
                        <Typography className={classes.heading}>Rule 2</Typography>
                    </div>
                    <div className={classes.column}>
                        <Typography className={classes.secondaryHeading}>This is the place for Description</Typography>
                    </div>
                    <div className={classes.column}>
                        <Typography className={classes.secondaryHeading}>Rule Weightage - 45</Typography>
                    </div>

                    </ExpansionPanelSummary>
                    <div className={clsx(classes.column)} style={{backgroundColor: grey[300]}}>
                        <Grid container>
                            <Grid item xs={2} className={classes.ruleHelper}>
                                <Typography variant="caption"><b>Rule Name: </b><br/> Rule 2</Typography>
                            </Grid>
                            <Grid item xs={4} className={classes.ruleHelper}>
                                <Typography variant="caption"><b>Rule Description</b><br/>Description about the rule will be mentioned here</Typography>
                            </Grid>
                            <Grid item xs={2} className={classes.ruleHelper}>
                                <Typography variant="caption"><b>Rule Weightage</b><br/> 45</Typography>
                            </Grid>
                            <Grid item xs={4} className={classes.ruleHelper}>
                                <Button variant="outlined" size="small" className={classes.addRule} >
                                    <Add fontSize="small"/> Add Attribute 
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                    <Divider />
                    <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Attribute</b><br/> Full Name</Typography>
                    </div>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Matching Method</b><br/> 
                            Fuzzy
                        </Typography>
                    </div>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Fuzzy Value: </b><br/> 
                            25
                        </Typography>
                    </div>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Fuzzy Cut Off </b><br/> 
                            23
                        </Typography>
                    </div>
                    <div className={classes.column} >
                        <IconButton aria-label="delete" className={classes.margin} onClick={() =>{}}>
                            <Edit fontSize="small" />
                        </IconButton>
                        <IconButton aria-label="delete" className={classes.margin} onClick={() => {}}>
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                        <FormControlLabel control={
                            <Switch
                                checked={ruleStatus.checked}
                                onChange={handleRuleStatusChange}
                                name="checkedB"
                                color="primary"
                            />
                        } style={{ margin: '2px' }}
                        />
                    </div>
                    
                    </ExpansionPanelDetails>
                    <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Attribute</b><br/> DOB</Typography>
                    </div>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Matching Method</b><br/> 
                            Exact Match
                        </Typography>
                    </div>
                    <div className={classes.column} >
                    </div>
                    <div className={classes.column} >
                    </div>
                    <div className={classes.column} >
                        <IconButton aria-label="delete" className={classes.margin} onClick={() =>{}}>
                            <Edit fontSize="small" />
                        </IconButton>
                        <IconButton aria-label="delete" className={classes.margin} onClick={() => {}}>
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                        <FormControlLabel control={
                            <Switch
                                checked={ruleStatus.checked}
                                onChange={handleRuleStatusChange}
                                name="checkedB"
                                color="primary"
                            />
                        } style={{ margin: '2px' }}
                        />
                    </div>
                    
                    </ExpansionPanelDetails>
                    <Divider />
                    <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Attribute</b><br/> Nationality</Typography>
                    </div>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Matching Method</b><br/> 
                            Exact Match
                        </Typography>
                    </div>
                    <div className={classes.column} >
                    </div>
                    <div className={classes.column} >
                    </div>
                    <div className={classes.column} >
                        <IconButton aria-label="delete" className={classes.margin} onClick={() =>{}}>
                            <Edit fontSize="small" />
                        </IconButton>
                        <IconButton aria-label="delete" className={classes.margin} onClick={() => {}}>
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                        <FormControlLabel control={
                            <Switch
                                checked={ruleStatus.checked}
                                onChange={handleRuleStatusChange}
                                name="checkedB"
                                color="primary"
                            />
                        } style={{ margin: '2px' }}
                        />
                    </div>
                    
                    </ExpansionPanelDetails>
                        
                    
                    
                    <Divider />
                    <ExpansionPanelActions>
                    <Button size="small">Cancel</Button>
                    <Button size="small" color="primary">
                        Save
                    </Button>
                    </ExpansionPanelActions>
                </ExpansionPanel>

               </div> 











               <div key={`section-3`}>
                <ExpansionPanel >
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                    >
                    <div className={classes.column}>
                        <Typography className={classes.heading}>Rule 3</Typography>
                    </div>
                    <div className={classes.column}>
                        <Typography className={classes.secondaryHeading}>This is the place for Description</Typography>
                    </div>
                    <div className={classes.column}>
                        <Typography className={classes.secondaryHeading}>Rule Weightage - 47</Typography>
                    </div>

                    </ExpansionPanelSummary>
                    <div className={clsx(classes.column)} style={{backgroundColor: grey[300]}}>
                        <Grid container>
                            <Grid item xs={2} className={classes.ruleHelper}>
                                <Typography variant="caption"><b>Rule Name: </b><br/> Rule 3</Typography>
                            </Grid>
                            <Grid item xs={4} className={classes.ruleHelper}>
                                <Typography variant="caption"><b>Rule Description</b><br/>Description about the rule will be mentioned here</Typography>
                            </Grid>
                            <Grid item xs={2} className={classes.ruleHelper}>
                                <Typography variant="caption"><b>Rule Weightage</b><br/> 47</Typography>
                            </Grid>
                            <Grid item xs={4} className={classes.ruleHelper}>
                                <Button variant="outlined" size="small" className={classes.addRule} >
                                    <Add fontSize="small"/> Add Attribute 
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                    <Divider />
                    <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Attribute</b><br/> Full Name</Typography>
                    </div>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Matching Method</b><br/> 
                            Fuzzy
                        </Typography>
                    </div>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Fuzzy Value: </b><br/> 
                            25
                        </Typography>
                    </div>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Fuzzy Cut Off </b><br/> 
                            23
                        </Typography>
                    </div>
                    <div className={classes.column} >
                        <IconButton aria-label="delete" className={classes.margin} onClick={() =>{}}>
                            <Edit fontSize="small" />
                        </IconButton>
                        <IconButton aria-label="delete" className={classes.margin} onClick={() => {}}>
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                        <FormControlLabel control={
                            <Switch
                                checked={ruleStatus.checked}
                                onChange={handleRuleStatusChange}
                                name="checkedB"
                                color="primary"
                            />
                        } style={{ margin: '2px' }}
                        />
                    </div>
                    
                    </ExpansionPanelDetails>
                    <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Attribute</b><br/> Phone Number</Typography>
                    </div>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Matching Method</b><br/> 
                            Exact Match
                        </Typography>
                    </div>
                    <div className={classes.column} >
                    </div>
                    <div className={classes.column} >
                    </div>
                    <div className={classes.column} >
                        <IconButton aria-label="delete" className={classes.margin} onClick={() =>{}}>
                            <Edit fontSize="small" />
                        </IconButton>
                        <IconButton aria-label="delete" className={classes.margin} onClick={() => {}}>
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                        <FormControlLabel control={
                            <Switch
                                checked={ruleStatus.checked}
                                onChange={handleRuleStatusChange}
                                name="checkedB"
                                color="primary"
                            />
                        } style={{ margin: '2px' }}
                        />
                    </div>
                    
                    </ExpansionPanelDetails>
                    <Divider />
                    <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Attribute</b><br/> Email</Typography>
                    </div>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Matching Method</b><br/> 
                            Fuzzy
                        </Typography>
                    </div>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Fuzzy Value: </b><br/> 
                            32
                        </Typography>
                    </div>
                    <div className={classes.column} >
                        <Typography variant="caption"><b>Fuzzy Cut Off </b><br/> 
                            5
                        </Typography>
                    </div>
                    <div className={classes.column} >
                        <IconButton aria-label="delete" className={classes.margin} onClick={() =>{}}>
                            <Edit fontSize="small" />
                        </IconButton>
                        <IconButton aria-label="delete" className={classes.margin} onClick={() => {}}>
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                        <FormControlLabel control={
                            <Switch
                                checked={ruleStatus.checked}
                                onChange={handleRuleStatusChange}
                                name="checkedB"
                                color="primary"
                            />
                        } style={{ margin: '2px' }}
                        />
                    </div>
                    
                    </ExpansionPanelDetails>
                        
                    
                    
                    <Divider />
                    <ExpansionPanelActions>
                    <Button size="small">Cancel</Button>
                    <Button size="small" color="primary">
                        Save
                    </Button>
                    </ExpansionPanelActions>
                </ExpansionPanel>

               </div> 





                
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default RuleSet
