import React from 'react'
import { Container, Image } from 'react-bootstrap'
import { Link } from "react-router-dom";

// img
import onboardingLogo from '../../assets/images/logos/logo_new_1.png'
import loginIcon from '../../assets/images/icons/login_icon.png'

const OnboardingHeader = () => {
    return (
        <>
            <div className="iq-top-navbar white_main_color">
                <Container className='px-sm-1 px-xl-5'>
                    <div className='onboarding_header_nav d-flex justify-content-between align-items-center px-2'>
                        <Link
                            to="/"
                            className="iq-header-logo"
                        >
                            <Image src={onboardingLogo} className="img-fluid onboarding_logo_img" alt="logo_img" />
                        </Link>
                        <Link
                            to="/auth/auth-option"
                            className="iq-header-logo"
                        >
                            <div className='d-flex flex-column align-items-center'>
                                <Image src={loginIcon} className="img-fluid onboarding_login_img" alt="login_img" />
                                <span className='text-white font-small'>Sign In</span>
                            </div>
                        </Link>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default OnboardingHeader;
