import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap'
import StepWizard from "react-step-wizard";
import { Link } from "react-router-dom";

import OnboardingHeader from '../../components/headers/onboarding-header';

import logoImg from '../../assets/images/logos/complete_logo1_white.png'
import headingImg1 from '../../assets/images/pages/common/heading_img1.png';
import headingImg2 from '../../assets/images/pages/common/heading_img2.png';
import headingIm3 from '../../assets/images/pages/common/heading_img3.png';
import arrowIcon from '../../assets/images/icons/arrow-right.png';

const Welcome = () => {
    const onStepChange = (stats) => {
        // console.log(stats);
    };

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])
    return (
        <>
            <div>
                {
                    loading ? <div className="p-0 vh-100 d-flex align-items-center justify-content-center white_main_color">
                        <Image src={logoImg} className="img-fluid welcome_logo_img" alt="logo_img" />
                    </div> :
                        <div className='onboarding_page vh-100'>
                            <OnboardingHeader />
                            <div className={'jumbotron'}>
                                <div className='row'>
                                    <div className=''>
                                        <StepWizard
                                            onStepChange={onStepChange}
                                            isHashEnabled
                                        >
                                            <First hashKey={'Heading'} />
                                            <Second hashKey={'Connect'} />
                                            <Last hashKey={'Speak'} />
                                        </StepWizard>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </div>
            {/* <SettingOffCanvas /> */}
        </>
    );
};

export default Welcome;

/**
 * Stats Component - to illustrate the possible functions
 * Could be used for nav buttons or overview
 */
const Stats = ({
    currentStep,
    firstStep,
    goToStep,
    lastStep,
    nextStep,
    previousStep,
    totalSteps,
    step,
}) => (
    <div className='d-flex justify-content-between w-100 align-items-center mt-5'>
        <div className='d-flex flex-column'>
            <div className='d-flex'>
                <span className={`step_dot me-1 ${currentStep === 1 ? 'active' : ''}`} onClick={firstStep}></span>
                <span className={`step_dot me-1 ${currentStep === 2 ? 'active' : ''}`} onClick={() => goToStep(2)}></span>
                <span className={`step_dot ${currentStep === 3 ? 'active' : ''}`} onClick={lastStep}></span>
            </div>
            <Link to="/auth/auth-option" className='m-0 p-0 text-black font-16'>Skip</Link>
        </div>
        {step < totalSteps ?
            <button className='btn btn-primary btn-block' onClick={nextStep}><Image className='arrow_icon' src={arrowIcon} alt="arrow_img" /></button>
            :
            <Link to="/auth/auth-option"><button className='btn btn-primary btn-block'><Image className='arrow_icon' src={arrowIcon} alt="arrow_img" /></button></Link>
        }
    </div>
);

/** Steps */

const First = props => {
    return (
        <div className='stepper-container'>
            <div className='stepper-content mx-auto'>
                <Image src={headingImg1} alt="heading_img" />
                <h1 className='fw-bold text-black mt-5'>Heading 1</h1>
                <p className='text-black mt-3 font-16'>Labore deserunt aliqua qui incididunt. Enim nisi pariatur irure labat consequat labore minim fugiat dese</p>
                <Stats step={1} {...props} />
            </div>
        </div>
    );
};

const Second = props => {
    return (
        <div className='stepper-container'>
            <div className='stepper-content mx-auto'>
                <Image src={headingImg2} alt="heading_img" />
                <h1 className='fw-bold text-black mt-5'>Connect</h1>
                <p className='text-black mt-3 font-16'>Labore deserunt aliqua qui incididunt. Enim nisi pariatur irure labat consequat labore minim fugiat dese</p>
                <Stats step={2} {...props} />
            </div>
        </div>
    );
};

const Last = (props) => {
    return (
        <div className='stepper-container'>
            <div className='stepper-content mx-auto'>
                <Image src={headingIm3} alt="heading_img" />
                <h1 className='fw-bold text-black mt-5'>Speak</h1>
                <p className='text-black mt-3 font-16'>Labore deserunt aliqua qui incididunt. Enim nisi pariatur irure labat consequat labore minim fugiat dese</p>
                <Stats step={3} {...props} />
            </div>
        </div>
    );
};