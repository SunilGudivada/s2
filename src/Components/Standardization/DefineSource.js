import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import NumberOfSources from './NumberOfSources'
import { Container } from '@material-ui/core';
import SourceOptions from '../Options/SourceOptions';


export default class DefineSource extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            noOfFieldsRequired: 1,
            sources: [{
                type: ''
            }],
        }
    }

    numberInputHandler(event) {

        const value = event.target.value;
        if (parseInt(value) >= 0) {
            this.setState(prevState => ({
                noOfFieldsRequired: value
            }))
            // this.setState({ noOfFieldsRequired: parseInt(event.target.value) })
        } else if (value === '') {
            this.setState({ noOfFieldsRequired: parseInt(0) })
        }
        
        var allSources = [];
        
        for (let i = 0; i < value; i++) {
            allSources[i] = { type: ''}
        }
        
        this.setState({sources: allSources})
        
    }

    getMultipleInputFields() {
        var { noOfFieldsRequired } = this.state;
        var allSources = [];
        for (let i = 0; i < noOfFieldsRequired; i++) {
            allSources.push({ type: '' })
        }
        return allSources;
    }

    sourceOptionHandler(e,index){
        let allSources = this.state.sources;
        allSources[index].type = e.target.value;
        this.setState({sources: allSources});   
        return e.target.value;     
    }

    render() {
        const { noOfFieldsRequired } = this.state;
        
        return (
            <div>
                <NumberOfSources
                    onNumberInputChange={(event) => this.numberInputHandler(event)}
                    count={noOfFieldsRequired} />
                <Container  maxWidth="sm">
                    <Grid container style={{ paddingBottom: '45px' }}>
                        {noOfFieldsRequired > 0 ? this.state.sources.map((value, index) => (

                            <Grid item xs={12} key={index}>
                                <SourceOptions handleChange={(event) => this.sourceOptionHandler(event,index)}
                                selectedType={(value.type)} />
                            </Grid>
                        )) : null}
                    </Grid>
                </Container >
            </div>
        )
    }
}
