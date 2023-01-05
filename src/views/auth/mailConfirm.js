import React from 'react';
import { Image } from 'react-bootstrap'
import { Link } from "react-router-dom";

import whiteLogo from '../../assets/images/logos/complete_logo1_new.png'
import darkLogo from '../../assets/images/logos/complete_logo1_white.png'
import mailLogo from '../../assets/images/pages/common/mail.png'


const MailConfirm = () => {

    return (
        <>
            <div className='auth_page verification_page vh-100 d-flex flex-column align-items-center position-relative'>
                <Image src={darkLogo} className="img-fluid auth_dark_logo_img" alt="logo_img" />
                <Image src={whiteLogo} className="img-fluid auth_white_logo_img" alt="logo_img" />
                <div className='auth_page_text_group d-flex flex-column align-items-center'>
                    <p className='font-24 color-main fw-bold'>Email Confirmation</p>
                    <p className='font-16 text-black text-center'>Hi, you’re almost ready to start enjoy Presser. <br />
                        Simply click the big blue button below to verify your account.</p>
                </div>
                <Image src={mailLogo} className="img-fluid mail_logo_img" alt="mail_img" />

                <Link to="/dashboard/app/speaks" className='btn btn-primary btn-block fw-bold font-20'>Verify</Link>
            </div>
        </>
    );
};

export default MailConfirm;