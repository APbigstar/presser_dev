import React from 'react';
import { Image } from 'react-bootstrap'
import { Link } from "react-router-dom";

import whiteLogo from '../../assets/images/logos/complete_logo1_new.png'
import darkLogo from '../../assets/images/logos/complete_logo1_white.png'


const AuthPage = () => {

    return (
        <>
            <div className='auth_page vh-100 d-flex flex-column align-items-center position-relative'>
                <Image src={darkLogo} className="img-fluid auth_dark_logo_img" alt="logo_img" />
                <Image src={whiteLogo} className="img-fluid auth_white_logo_img" alt="logo_img" />
                <div className='auth_page_text_group d-flex flex-column align-items-center'>
                    <p className='font-24 text-black'>Don’t have an account? <Link to='/auth/sign-up'><b>SignUp</b></Link></p>
                    <p className='font-20 text-black'>OR</p>
                    <Link to="/auth/sign-in" className='btn btn-primary btn-block font-20'>Sign In</Link>
                </div>
                <p className='font-16 position-absolute text-center text-black'>By Signing in, you will create an account and agree to
                    our <Link to='/'>Terms of Service</Link>  and <Link to='/'>Privacy Policy</Link></p>
            </div>
        </>
    );
};

export default AuthPage;