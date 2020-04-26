import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 240,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


export default function Options(){
    const classes = useStyles();
    const [attribute,setAttribute] = React.useState('');

    const handleChange = (event) => {
        setAttribute(event.target.value);
    };
    const attrArray = [
        'First Name',
        'Middle Name',
        'Last Name',
        'Alias Name',
        'Full Name',
        'DOB',
        'Nationality',
        'Personal Email',
        'Business Email',
        'Personal Phone',
        'Mobile Phone',
        'Work Address',
        'Home Address'
    ]
    return (
        <FormControl required className={classes.formControl}>
        <InputLabel id="demo-simple-select-required-label">Select Matching Attribute</InputLabel>
        <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={attribute}
            onChange={handleChange}
            className={classes.selectEmpty}
        >
            <MenuItem value="" disabled>
                Select Matching Attribute
            </MenuItem>
            
            {attrArray.map((value,index)=>(
                <MenuItem key= {index} value={value}>{value}</MenuItem>
            ))}
            
        </Select>
        </FormControl>
    );
}