import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Options from '../Options/Options'

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
});

export default function Standardization() {
        const classes = useStyles();
        return(
            <React.Fragment>
                <Card className={classes.root} variant="outlined">
                <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                     Standardization of Attributes from Multiple Sources
                </Typography>
                <TableContainer>
                    <Table aria-label="simple table">
                      <TableHead>
                        <TableRow>
                            <TableCell>Standardized Attributes</TableCell>
                            <TableCell align="right">Source1 Attributes</TableCell>
                            <TableCell align="right">Source2 Attributes</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {attrArray.map((value,index) => (
                            <TableRow key={index}>
                                <TableCell>{value}</TableCell>
                                <TableCell align="right"><Options /></TableCell>
                                <TableCell align="right"><Options /></TableCell>
                            </TableRow>

                        ))}
                      </TableBody>
                    </Table>
                </TableContainer>
                </CardContent>
                </Card>
            </React.Fragment>
        )
    }