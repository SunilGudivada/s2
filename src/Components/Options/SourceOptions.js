import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 240,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


export default function SourceOptions(props){
    
    const { handleChange,selectedType } = props;
    const classes = useStyles();

    const attrArray = [
        'File',
        'Database'
    ]
    return (
        <Grid style={{ paddingTop: '10px' }}>
        <Grid item xs={12} sm={6}>
            <FormControl required className={classes.formControl}>
            <InputLabel id="demo-simple-select-required-label">Select Source Option</InputLabel>
            <Select
                labelId="demo-simple-select-required-label"
                id="demo-simple-select-required"
                value={selectedType}
                onChange={e => handleChange(e)} 
                className={classes.selectEmpty}
            >
                <MenuItem value="" disabled>
                    Select Source Option
                </MenuItem>
                
                {attrArray.map((value,index)=>(
                    <MenuItem key= {index} value={value}>{value}</MenuItem>
                ))}
                
            </Select>
            </FormControl>
        </Grid>

        { 
        
        selectedType?
        (selectedType === "File"? (
            <Grid item xs={12} sm={6} style={{marginTop: '18px'}}>
                <Button variant="contained" component="label" color="primary">
                    Upload File
                <input type="file" style={{ display: "none" }}/>
                </Button>
                <IconButton aria-label="delete" className={classes.margin}>
                    <DeleteIcon />
                </IconButton>
            </Grid>
        ):(
            <Grid item xs={12} sm={6} style={{paddingTop:'9px'}}>
            <TextField id="standard-basic" label="Database" />
            <IconButton aria-label="delete" className={classes.margin}>
                <DeleteIcon />
            </IconButton>
            <IconButton aria-label="delete" className={classes.margin}>
                <Edit />
            </IconButton>
            </Grid>
        )):("")}
        
        
        </Grid>
    );
}