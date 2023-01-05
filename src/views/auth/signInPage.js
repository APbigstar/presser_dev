import React from 'react';
import { Image, Form } from 'react-bootstrap'
import { Link } from "react-router-dom";

import whiteLogo from '../../assets/images/logos/complete_logo1_new.png'
import darkLogo from '../../assets/images/logos/complete_logo1_white.png'


const SignInPage = () => {

    return (
        <>
            <div className='auth_page signin_page vh-100 d-flex flex-column align-items-center position-relative'>
                <Image src={darkLogo} className="img-fluid auth_dark_logo_img" alt="logo_img" />
                <Image src={whiteLogo} className="img-fluid auth_white_logo_img" alt="logo_img" />
                <div className='auth_page_text_group d-flex flex-column align-items-center'>
                    <p className='auth_page_title font-34 text-black text-center'>Login your Account</p>
                    <Form className="mt-4">
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control text-black" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput" className='text-black'>E-mail</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control text-black" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword" className='text-black'>Password</label>
                        </div>
                    </Form>
                    <Link to="/dashboard/app/speaks" className='btn btn-primary btn-block font-20'>Sign In</Link>
                </div>
            </div>
        </>
    );
};

export default SignInPage;