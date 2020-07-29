import React from 'react'
import StepZilla from 'react-stepzilla'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import 'react-stepzilla/src/css/main.css'

const MultiStep = (props) => {
	
	const steps =
  [
    {name: 'Step 1', component: <StepOne />},
    {name: 'Step 2', component: <StepTwo />},
    {name: 'Step 3', component: <StepThree />}
	]
	
	return(
		<div className='step-progress'>
        <StepZilla
          steps={steps}
          stepsNavigation={true}
          nextButtonText='ขั้นตอนถัดไป'
          backButtonText='ก่อนหน้า'
          nextButtonCls='btn btn-success float-right'
          backButtonCls='btn btn-primary float-left'
          nextTextOnFinalActionStep={'แจ้งโอน'}
          startAtStep={
            window.sessionStorage.getItem('step')? 1 : 1
          }
        />
    </div>
	)
}

export default MultiStep

