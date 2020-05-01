import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteSweep from '@material-ui/icons/DeleteSweep';
import Edit from '@material-ui/icons/Edit';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Box from '@material-ui/core/Box';
import SimpleDialogDemo from '../Modal/AddDataSourceModal'
import { Typography } from '@material-ui/core';

function createData(entity, username, password, jdbcurl) {
    return { entity, username, password, jdbcurl };
}

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});
const rows = [
    createData('Database 1', 'username 1', '********', 'jdbc:db2:hostname:port Number/databaseName', 'A'),
    createData('Database 2', 'username 2', '********', 'SourceColumnMapping.csv', 'A'),
    createData('Database 3', 'username 3', '********', 'jdbc:db2:hostname:port Number/databaseName', 'A'),
    createData('Database 4', 'username 4', '********', 'jdbc:db2:hostname:port Number/databaseName', 'X'),
    createData('Database 5', 'username 5', '********', 'jdbc:db2:hostname:port Number/databaseName', 'X'),
];


export default function DataSource() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (<>
        
        <Typography component={'span'} variant={'body2'}>
            <Box textAlign="center" m={1} fontSize="h5.fontSize" style={{fontWeight: 'bold'}}>
                Data Sources Definitions
            </Box>
        </Typography>
        <SimpleDialogDemo />
        <Typography component={'span'} variant={'body2'}>
            <Box textAlign="center" m={1} fontSize="h5.fontSize" style={{fontWeight: 'bold'}}>
                Available Data Sources
            </Box>
        </Typography>
        <TableContainer component={Paper} style={{ marginBottom: '20px' }}>

            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell >Data Source Name</TableCell>
                        <TableCell >Username</TableCell>
                        <TableCell >Password</TableCell>
                        <TableCell >JDBC URL / File Name</TableCell>
                        <TableCell />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.entity} style={{ height: 15 }}>

                            <TableCell component="th">
                                {row.entity}
                            </TableCell>
                            <TableCell >{row.username}</TableCell>
                            <TableCell >{row.password}</TableCell>
                            <TableCell >{row.jdbcurl}</TableCell>
                            <TableCell align="right">
                                <IconButton aria-label="comments">
                                    <Edit />
                                </IconButton>
                                <IconButton aria-label="comments">
                                    <DeleteSweep />
                                </IconButton>
                                <FormControlLabel control={
                                    <Switch
                                        checked={state.checked}
                                        onChange={handleChange}
                                        name="checkedB"
                                        color="primary"
                                    />
                                } style={{ margin: '2px' }}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>
    )
}
