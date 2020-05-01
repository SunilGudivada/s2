import React from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

const NumberOfSources = (props) => {
    const { onNumberInputChange, count } = props;
    return (
        <>
            <Container maxWidth="sm">
                <TextField id="outlined-basic" label="Number of Sources" variant="outlined" onChange={e => onNumberInputChange(e)} value={count} />
            </Container>
        </>
    )
}

export default NumberOfSources;