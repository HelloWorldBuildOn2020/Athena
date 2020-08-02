import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['รายละเอียดการซื้อและจัดส่ง','ชำระเงิน', 'แจ้งโอนและรอตรวจสอบ'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <StepOne/>;
    case 1:
      return <StepTwo/>;
    case 2:
      return <StepThree/>;
    default:
      return 'Unknown step';
  }
}

export default function HorizontalNonLinearAlternativeLabelStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const totalSteps = () => {
    return getSteps().length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleFinish = () => {
    setActiveStep(2);
  };

  return (
    <div className={classes.root}>
      <Stepper alternativeLabel nonLinear activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const buttonProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepButton
                onClick={handleStep(index)}
                {...buttonProps}
              >
                {label}
              </StepButton>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length - 2 ? (
          <div>
						<Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
						<Button onClick={handleFinish} variant="contained" color="primary">แจ้งโอน</Button>
          </div>
        ) : (
          <div>
					{activeStep === 2 ? (
						<Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
					) : (
						<div>
							<Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
							<div>
								<Button
									variant="contained"
									color="primary"
									onClick={handleNext}
									className={classes.button}
								>
									ขั้นตอนถัดไป
								</Button>
							</div>
						</div>
					)}  
          </div>
        )}
      </div>
    </div>
  );
}