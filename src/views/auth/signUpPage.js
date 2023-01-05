import React from 'react';
import { Image, Form } from 'react-bootstrap'
import { Link } from "react-router-dom";

import whiteLogo from '../../assets/images/logos/complete_logo1_new.png'
import darkLogo from '../../assets/images/logos/complete_logo1_white.png'


const SignUpPage = () => {

    return (
        <>
            <div className='auth_page signup_page vh-100 d-flex flex-column align-items-center position-relative'>
                <Image src={darkLogo} className="img-fluid auth_dark_logo_img" alt="logo_img" />
                <Image src={whiteLogo} className="img-fluid auth_white_logo_img" alt="logo_img" />
                <div className='auth_page_text_group d-flex flex-column align-items-center'>
                    <p className='auth_page_title font-34 text-black text-center'>Create your Account</p>
                    <Form className="mt-4">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control text-black" id="floatingName" placeholder="Anthony Pen" />
                            <label htmlFor="floatingName" className='text-black'>Full Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control text-black" id="floatingEmail" placeholder="name@example.com" />
                            <label htmlFor="floatingEmail" className='text-black'>E-mail</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control text-black" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword" className='text-black'>Password</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control text-black" id="floatingConfirm" placeholder="confirm Password" />
                            <label htmlFor="floatingConfirm" className='text-black'>Confirm Password</label>
                        </div>
                    </Form>
                    <Link to="/auth/verification-mail" className='btn btn-primary btn-block font-20'>Sign In</Link>
                </div>
            </div>
        </>
    );
};

export default SignUpPage;