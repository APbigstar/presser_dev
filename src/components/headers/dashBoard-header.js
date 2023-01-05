import React from 'react'
import { Container, Image, Form, Dropdown } from 'react-bootstrap'
import { Link } from "react-router-dom";

// img
import onboardingLogo from '../../assets/images/logos/logo_new_1.png'
import user1 from '../../assets/images/users/user1.png'
import dropdown from '../../assets/images/icons/dropdown.png'

const DashboardHeader = () => {

    return (
        <>
            <div className="iq-top-navbar white_main_color">
                <Container className='px-sm-0 px-xl-5'>
                    <div className='onboarding_header_nav d-flex justify-content-between align-items-center px-2'>
                        <div className='d-flex align-items-center'>
                            <Link
                                to="/"
                                className="iq-header-logo"
                            >
                                <Image src={onboardingLogo} className="img-fluid onboarding_logo_img" alt="logo_img" />
                            </Link>
                        </div>
                        <div className="iq-search-bar device-search  position-relative">
                            <form action="#" className="searchbox">
                                <Form.Control
                                    type="text"
                                    className="text search-input form-control cutomize-search-input"
                                    placeholder="Search Friend"
                                />
                            </form>
                        </div>
                        <div className="card-header-toolbar dashboard-header-userinfo d-flex align-items-center">
                            <Dropdown>
                                <Link to="#">
                                    <Dropdown.Toggle as="span" className="material-symbols-outlined">
                                        <div className='d-flex align-items-center'>
                                            <div className='header-user-avatar'>
                                                <Image src={user1} className="img-fluid header_user_avatar" alt="user_avatar" />
                                            </div>
                                            <div className='header_user_info'>
                                                <p className='header_user_name fw-bold text-white font-16 m-0 p-0'>Anthony</p>
                                                <p className='header_user_id font-16 m-0 p-0'>@BigStar</p>
                                            </div>
                                            <div className='header_dropdown_icon'>
                                                <Image src={dropdown} className="img-fluid dropdown_icon" alt="drop_down" />
                                            </div>
                                        </div>
                                    </Dropdown.Toggle>
                                </Link>
                                <Dropdown.Menu className="dropdown-menu-right">
                                    <Dropdown.Item to="#">
                                        <i className="iq-icons-list me-2"></i>View</Dropdown.Item>
                                    <Dropdown.Item to="/auth/sign-in"><i className="ri-delete-bin-6-fill me-2"></i>Delete</Dropdown.Item>
                                    <Dropdown.Item to="#"><i className="ri-pencil-fill me-2"></i>Edit</Dropdown.Item>
                                    <Dropdown.Item to="#"><i className="ri-printer-fill me-2"></i>Print</Dropdown.Item>
                                    <Dropdown.Item to="#"><i className="ri-file-download-fill me-2"></i>Download</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default DashboardHeader;
