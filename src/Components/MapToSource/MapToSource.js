import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Standardization from '../Standardization/Standardization';
import DataSource from '../DataSource/DataSource';
import StepButton from '@material-ui/core/StepButton';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Define Data Source', 'Map to Standard'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return (<DataSource />);
    case 1:
      return (<Standardization />);
    default:
      return 'Unknown stepIndex';
  }
}

export default function MapToSource() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
        // find the first step that has been completed
        steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  // const handleComplete = () => {
  //   const newCompleted = completed;
  //   newCompleted[activeStep] = true;
  //   setCompleted(newCompleted);
  //   handleNext();
  // };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepButton onClick={handleStep(index)} completed={completed[index]}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <div>
          {allStepsCompleted() ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you&apos;re finished
            </Typography>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
              <div>
                <Typography component={'span'} variant={'body2'} className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                <div>
                  <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                    Back
              </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    Next
              </Button>
                  {activeStep !== steps.length &&
                    (completed[activeStep] ? (
                      <Typography component={'span'} variant="caption" className={classes.completed}>
                        Step {activeStep + 1} already completed
                      </Typography>
                    ) : (
                        // <Button variant="contained" color="primary" onClick={handleComplete}>
                        //   {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
                        // </Button>
                        " "
                      ))}
                </div>
              </div>
            )}
        </div>
      </CardContent >
    </Card>
  );
}