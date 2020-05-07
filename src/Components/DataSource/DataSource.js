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
import { grey } from '@material-ui/core/colors';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import Cancel from '@material-ui/icons/Cancel';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Button from '@material-ui/core/Button';

function createData(entity, username, password, jdbcurl, active, dFlag) {
    return { entity, username, password, jdbcurl, active, dFlag };
}

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
      },
    tablecell: {
        padding:'5px',
    }
}));
const rows = [
    createData('Database 1', 'username 1', '********', 'jdbc:db2:hostname:port Number/databaseName', 'A','A'),
    createData('Database 4', 'username 4', '********', 'SourceColumnMapping.csv', 'A','A'),
    createData('Database 3', 'username 3', '********', 'jdbc:db2:hostname:port Number/databaseName', 'A','A'),
    createData('Database 2', 'username 2', '********', 'jdbc:db2:hostname:port Number/databaseName', 'X','A'),
    createData('Database 5', 'username 5', '********', 'jdbc:db2:hostname:port Number/databaseName', 'X','A'),
];

function reducer(state,action){

    let currentDataSources = [...state];
    let index = 99999999;
    switch(action.type){
        case 'add':
            return [...currentDataSources, action.value];
        case "updateActiveStatus":
            index = currentDataSources.findIndex(element => element.entity === action.value);
            currentDataSources[index].active = currentDataSources[index].active === 'A' ? 'X': 'A';
            return currentDataSources;
        case "delete":
            index = currentDataSources.findIndex(element => element.entity === action.value);
            currentDataSources[index].dFlag = 'X';
            return currentDataSources;
        default:
            return currentDataSources.filter(element => element.dFlag !== 'X');
    }
}

export default function DataSource() {
    const classes = useStyles();

    // const [availableDataSources, setAvailableDataSources] = React.useState([]);

    const [availableDataSources, dispatch] = React.useReducer(reducer, rows);
    const [loader, setLoader] = React.useState(false);

    // React.useEffect(()=>{
    //     setAvailableDataSources(data);
    // },[availableDataSources])

    const [editDataSource,setEditDataSource] = React.useState('');
    const [userName,setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [jdbcurl, setJdbcurl] = React.useState('');
    // const [type,setTypeValue] = React.useState('');
    
    return (<>
        <Backdrop className={classes.backdrop} open={loader}>
            <CircularProgress color="inherit" />
        </Backdrop>
        <Typography component={'span'} variant={'body2'}>
            <Box textAlign="center" m={1} fontSize="h5.fontSize" style={{fontWeight: 'bold'}}>
                Data Sources Definitions
            </Box>
        </Typography>
        <SimpleDialogDemo/>
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
                {availableDataSources.filter(data => data.active === 'A' && data.dFlag === 'A').map((row) => (
                        <TableRow key={row.entity} style={{ height: 15 }}>

                            <TableCell component="th">
                                {row.entity}
                            </TableCell>
                            <TableCell className={classes.tablecell}> {editDataSource === row.entity ? (<TextField size="small" id="outlined-basic" label="Username" variant="outlined" value={userName}/>): ( row.username)} </TableCell>
                            <TableCell className={classes.tablecell}>{editDataSource === row.entity ? (<TextField size="small" id="outlined-basic" label="Password" variant="outlined" value={password}/>): ( row.password)} </TableCell>
                            <TableCell className={classes.tablecell}>
                                {editDataSource === row.entity ?
                                    (<>
                                        <TextField size="small" id="outlined-basic" label="JDBC Url" variant="outlined" value={jdbcurl}/>
                                        <Button href="/" style={{padding: '7px', marginLeft:'3px'}} color="primary" size="small" onClick={(event)=>event.preventDefault()} className={classes.addDataSourceForm}> Test Connection </Button></>
                                    ): ( row.jdbcurl)} </TableCell>
                            <TableCell align="right" className={classes.tablecell}>
                            {editDataSource === row.entity ?(<>
                                 <IconButton aria-label="save" style={{color: 'green'}} onClick={()=>{setLoader(true);setInterval(() => {setLoader(false);}, 2000);setEditDataSource('');}}>
                                 <CheckCircle />
                             </IconButton>
                             <IconButton aria-label="cancel"  style={{color: 'red'}}  onClick={()=>{setLoader(true);setInterval(() => {setLoader(false);}, 2000);setEditDataSource('');}}>
                                 <Cancel />
                             </IconButton>
                             </>
                            ): (<>
                                <IconButton aria-label="edit" onClick={()=>{setEditDataSource(row.entity);setUserName(row.username); setPassword(row.password); setJdbcurl(row.jdbcurl)}} >
                                    <Edit />
                                </IconButton>
                                <IconButton aria-label="delete"  onClick={()=>{setLoader(true);setInterval(() => {setLoader(false);}, 2000);dispatch({ type: "delete", value: row.entity });  }}>
                                    <DeleteSweep />
                                </IconButton>
                                <FormControlLabel control={
                                    <Switch
                                        checked={true}
                                        onChange={()=>{setLoader(true);setInterval(() => {setLoader(false);}, 2000);dispatch({ type: "updateActiveStatus", value: row.entity });  }}
                                        name={row.entity}
                                        color="primary"
                                    />
                                } style={{ margin: '2px' }}
                                /></>)}
                            </TableCell>
                        </TableRow>
                    ))}

                    {availableDataSources.filter(data => data.active === 'X' && data.dFlag === 'A').map((row) => (
                        <TableRow key={row.entity} style={{ height: 15, backgroundColor:grey[300] }}>

                            <TableCell component="th">
                                {row.entity}
                            </TableCell>
                            <TableCell className={classes.tablecell}>{row.username}</TableCell>
                            <TableCell className={classes.tablecell}>{row.password}</TableCell>
                            <TableCell className={classes.tablecell}>{row.jdbcurl}</TableCell>
                            <TableCell align="right" className={classes.tablecell}>

                            {editDataSource === row.entity ?(<>
                                <IconButton aria-label="save" style={{color: 'green'}} onClick={()=>{setLoader(true);setInterval(() => {setLoader(false);}, 2000);setEditDataSource('');}}>
                                 <CheckCircle />
                             </IconButton>
                             <IconButton aria-label="cancel"  style={{color: 'red'}}  onClick={()=>{setLoader(true);setInterval(() => {setLoader(false);}, 2000);setEditDataSource('');}}>
                                 <Cancel />
                             </IconButton>
                             </>
                            ): (<>
                                <IconButton aria-label="comments"  onClick={()=>{setLoader(true);setInterval(() => {setLoader(false);}, 2000);dispatch({ type: "delete", value: row.entity });  }}>
                                    <DeleteSweep />
                                </IconButton>
                                <FormControlLabel control={
                                    <Switch
                                        checked={false}
                                        onChange={()=>{setLoader(true);setInterval(() => {setLoader(false);}, 2000);dispatch({ type: "updateActiveStatus", value: row.entity });  }}
                                        name={row.entity}
                                        color="primary"
                                    />
                                } style={{ margin: '2px' }}
                                /></>)}
                                
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>
    )
}
