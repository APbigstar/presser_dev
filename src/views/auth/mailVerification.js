import React from 'react';
import { Image } from 'react-bootstrap'
import { Link } from "react-router-dom";

import whiteLogo from '../../assets/images/logos/complete_logo1_new.png'
import darkLogo from '../../assets/images/logos/complete_logo1_white.png'
import mailLogo from '../../assets/images/pages/common/mail.png'


const MailVerification = () => {

    return (
        <>
            <div className='auth_page verification_page vh-100 d-flex flex-column align-items-center position-relative'>
                <Image src={darkLogo} className="img-fluid auth_dark_logo_img" alt="logo_img" />
                <Image src={whiteLogo} className="img-fluid auth_white_logo_img" alt="logo_img" />
                <div className='auth_page_text_group d-flex flex-column align-items-center'>
                    <p className='font-24 color-main fw-bold'>Email Verificatioin</p>
                    <p className='font-16 text-black text-center'>Hi, you’re almost ready to start enjoy Presser. <br />
                        We’ve send a verification to to email you provided, please check your mailbox.</p>
                </div>
                <Image src={mailLogo} className="img-fluid mail_logo_img" alt="mail_img" />

                <Link to="/auth/confirm-mail" className='btn btn-transparent btn-block fw-bold font-20'>Go checking my email</Link>
            </div>
        </>
    );
};

export default MailVerification;