import React, { useState } from 'react';
import { Tab, Nav, Image, Button, Modal, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Card from '../../components/common/Card'

import group1 from '../../assets/images/users/star_logo1.png'
import group2 from '../../assets/images/users/wow-omg.png'
import group3 from '../../assets/images/users/wow-pretty.jpg'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
const Groups = () => {
    const [showShare, setShowShare] = useState(false);
    const handleCloseShare = () => setShowShare(false);
    const handleShowShare = () => setShowShare(true);

    return (
        <>
            <div className='group-page'>
                <Tab.Container defaultActiveKey="first">
                    <Nav as="ul" variant="pills" className="mb-5 nav-fill" id="pills-tab-1" role="tablist">
                        <Nav.Item className="nav-item">
                            <Nav.Link eventKey="first" className="nav-link font-18" data-bs-toggle="pill" href="#pills-home-fill" role="tab" aria-controls="pills-home" aria-selected="true">Pinned Groups</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="nav-item">
                            <Nav.Link eventKey="second" className="nav-link font-18" data-bs-toggle="pill" href="#pills-profile-fill" role="tab" aria-controls="pills-profile" aria-selected="false">Your Groups</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="nav-item">
                            <Nav.Link eventKey="third" className="nav-link font-18" data-bs-toggle="pill" href="#pills-contact-fill" role="tab" aria-controls="pills-contact" aria-selected="false">Other Groups</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content className="tab-content" id="pills-tabContent-1">
                        <Tab.Pane eventKey="first" className="fade show" role="tabpanel" aria-labelledby="pills-home-tab-fill">
                            <Card className="group_card py-3" >
                                <Card.Body>
                                    <div className='d-flex'>
                                        <Image src={group1} className="group_img me-3" alt="card_img" />
                                        <div className='group_text_content d-flex flex-column justify-content-between'>
                                            <p className='font-16 text-black fw-bold user_name p-0 m-0'>
                                                Coding in Bay Area
                                            </p>
                                            <p className='m-0 p-0 font-14'>
                                                Updated 1 month ago
                                            </p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className="group_card py-3" >
                                <Card.Body>
                                    <div className='d-flex'>
                                        <Image src={group2} className="group_img me-3" alt="card_img" />
                                        <div className='group_text_content d-flex flex-column justify-content-between'>
                                            <p className='font-16 text-black fw-bold user_name p-0 m-0'>
                                                Dragon Friends
                                            </p>
                                            <p className='m-0 p-0 font-14'>
                                                Updated 1 month ago
                                            </p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second" className="fade show" role="tabpanel" aria-labelledby="pills-profile-tab-fill">
                            <Card className="group_card py-3" >
                                <Card.Body>
                                    <div className='d-flex'>
                                        <Image src={group1} className="group_img me-3" alt="card_img" />
                                        <div className='group_text_content d-flex flex-column justify-content-between'>
                                            <p className='font-16 text-black fw-bold user_name p-0 m-0'>
                                                Coding in Bay Area
                                            </p>
                                            <p className='m-0 p-0 font-14'>
                                                Updated 1 month ago
                                            </p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className="group_card py-3" >
                                <Card.Body>
                                    <div className='d-flex'>
                                        <Image src={group2} className="group_img me-3" alt="card_img" />
                                        <div className='group_text_content d-flex flex-column justify-content-between'>
                                            <p className='font-16 text-black fw-bold user_name p-0 m-0'>
                                                Dragon Friends
                                            </p>
                                            <p className='m-0 p-0 font-14'>
                                                Updated 1 month ago
                                            </p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className="group_card py-3" >
                                <Card.Body>
                                    <div className='d-flex'>
                                        <Image src={group3} className="group_img me-3" alt="card_img" />
                                        <div className='group_text_content d-flex flex-column justify-content-between'>
                                            <p className='font-16 text-black fw-bold user_name p-0 m-0'>
                                                Warm Heart Friends
                                            </p>
                                            <p className='m-0 p-0 font-14'>
                                                Updated 1 month ago
                                            </p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third" className="fade show" role="tabpanel" aria-labelledby="pills-contact-tab-fill">
                            <div className='d-flex justify-content-between align-items-center mb-3 mt-5'>
                                <h2 className='font-18 fw-bold text-black'>
                                    Create a New Group
                                </h2>
                                <Button variant="primary px-5 ms-5 font-18 fw-bold" onClick={handleShowShare}>
                                    <FontAwesomeIcon icon={faCirclePlus} className="me-3" />
                                    New Group
                                </Button>
                            </div>
                            <Modal centered show={showShare} onHide={handleCloseShare}>
                                <Modal.Header closeButton className='px-5 pt-5'>
                                    <h2 className='font-18 fw-bold'>Create New Group</h2>
                                </Modal.Header>
                                <Modal.Body className='pt-0 px-5 pb-5' >
                                    <div className='group-modal-content'>
                                        <p className='font-14 fw-bold text-black mb-2'>Name</p>
                                        <div className="position-relative mb-3">
                                            <form action="#" className="searchbox">
                                                <Form.Control
                                                    type="text"
                                                    className="text form-control"
                                                    placeholder="Name Your Group"
                                                />
                                            </form>
                                        </div>
                                        <Form.Group className="form-group">
                                            <p className='font-14 fw-bold text-black mb-2'>Privacy</p>
                                            <select className="form-select" data-trigger name="choices-single-default" id="choices-single-default">
                                                <option defaultValue>Choose Privacy</option>
                                                <option value="Choice 1">Privacy</option>
                                                <option value="Choice 2">Publish</option>
                                            </select>
                                        </Form.Group>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <Button variant="primary font-18 fw-bold">
                                            <FontAwesomeIcon icon={faCirclePlus} className="me-3" />
                                            Add Group
                                        </Button>
                                    </div>
                                </Modal.Body>
                            </Modal>
                            <Card className="group_card py-3" >
                                <Card.Body>
                                    <div className='d-flex'>
                                        <Image src={group1} className="group_img me-3" alt="card_img" />
                                        <div className='group_text_content d-flex flex-column justify-content-between'>
                                            <p className='font-16 text-black fw-bold user_name p-0 m-0'>
                                                Coding in Bay Area
                                            </p>
                                            <p className='m-0 p-0 font-14'>
                                                Updated 1 month ago
                                            </p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className="group_card py-3" >
                                <Card.Body>
                                    <div className='d-flex'>
                                        <Image src={group2} className="group_img me-3" alt="card_img" />
                                        <div className='group_text_content d-flex flex-column justify-content-between'>
                                            <p className='font-16 text-black fw-bold user_name p-0 m-0'>
                                                Dragon Friends
                                            </p>
                                            <p className='m-0 p-0 font-14'>
                                                Updated 1 month ago
                                            </p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className="group_card py-3" >
                                <Card.Body>
                                    <div className='d-flex'>
                                        <Image src={group3} className="group_img me-3" alt="card_img" />
                                        <div className='group_text_content d-flex flex-column justify-content-between'>
                                            <p className='font-16 text-black fw-bold user_name p-0 m-0'>
                                                Warm Heart Friends
                                            </p>
                                            <p className='m-0 p-0 font-14'>
                                                Updated 1 month ago
                                            </p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </div>
        </>
    )
}

export default Groups