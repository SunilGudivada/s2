import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Options from '../Options/Options';

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
const useStyles = makeStyles({
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
    tableCellStyle:{
        padding:0
    },
    tableContainer:{

    }
});

export default function Standardization(props) {
        
        const classes = useStyles();
        return(<>
                <Typography component={'span'} variant={'body2'}>
                    <Box textAlign="center" m={1} fontSize="h5.fontSize" style={{fontWeight: 'bold'}}>
                        Standardization of Attributes from Multiple Sources
                    </Box>
                </Typography>
                <TableContainer className={classes.tableContainer}>
                    <Table aria-label="simple table">
                      <TableHead>
                        <TableRow>
                            <TableCell className={classes.tableCellStyle}>Standardized Attributes</TableCell>
                            <TableCell className={classes.tableCellStyle} align="center">Source1 Attributes</TableCell>
                            <TableCell className={classes.tableCellStyle} align="center">Source2 Attributes</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {attrArray.map((value,index) => (
                            <TableRow key={index}>
                                <TableCell className={classes.tableCellStyle}>{value}</TableCell>
                                <TableCell align="center" className={classes.tableCellStyle}><Options /></TableCell>
                                <TableCell align="center"className={classes.tableCellStyle}><Options /></TableCell>
                            </TableRow>

                        ))}
                      </TableBody>
                    </Table>
                </TableContainer>
                </>
        )
    }