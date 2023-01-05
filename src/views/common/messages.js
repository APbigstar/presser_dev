import React from 'react'
import { Container, Image, Form, Dropdown, Row, Col, Button, Modal } from 'react-bootstrap'

import Card from '../../components/common/Card'
import user1 from '../../assets/images/users/user1.png'
import user2 from '../../assets/images/users/user5.png'
import user3 from '../../assets/images/users/user4.jpeg'

const Messages = () => {

    const toggleMessageView = (e) => {
        if (e.target.closest('.message_card')) {
            e.target.closest(".message_card").querySelector('.message_text').classList.toggle('overflow_visible');
            e.target.closest(".message_card").querySelector('.message_text').classList.toggle('display_block');
        }
    };

    return (
        <>
            <div className='messages-container' >
                <div className="position-relative mb-5">
                    <form action="#" className="searchbox">
                        <Form.Control
                            type="text"
                            className="text search-input form-control cutomize-search-input"
                            placeholder="Search Messages"
                        />
                    </form>
                </div>
                <div onClick={toggleMessageView}>
                    <Card className="message_card py-3" >
                        <Card.Body>
                            <Row className='justify-content-between'>
                                <Col sm={10}>
                                    <div className='d-flex'>
                                        <Image src={user1} className="message_img me-3" alt="card_img" />
                                        <div className='message_text_content'>
                                            <div className='d-flex align-items-center'>
                                                <span className='font-16 text-black fw-bold user_name'>
                                                    Jessica Gryffon
                                                </span>
                                                <span className='message_badge text-white ms-3'>Sent</span>
                                            </div>
                                            <p className='mt-3 mb-0 message_text font-14'>
                                                I hope you had a brilliant Christmas and New Year.
                                                I hope you had a brilliant Christmas and New Year.
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={2}>
                                    <p className='p-0 m-0 message_time text-end font-14'>7:38 PM</p>
                                </Col>
                            </Row>

                        </Card.Body>
                    </Card>
                </div>
                <div onClick={toggleMessageView}>
                    <Card className="message_card py-3" >
                        <Card.Body>
                            <Row className='justify-content-between'>
                                <Col sm={10}>
                                    <div className='d-flex'>
                                        <Image src={user2} className="message_img me-3" alt="card_img" />
                                        <div className='message_text_content'>
                                            <div className='d-flex align-items-center'>
                                                <span className='font-16 text-black fw-bold user_name'>
                                                    Jessica Gryffon
                                                </span>
                                                <span className='message_badge text-white ms-3'>Received</span>
                                            </div>
                                            <p className='mt-3 mb-0 message_text font-14'>
                                                I hope you had a brilliant Christmas and New Year.
                                                I hope you had a brilliant Christmas and New Year.
                                                I hope you had a brilliant Christmas and New Year.
                                                I hope you had a brilliant Christmas and New Year.
                                                I hope you had a brilliant Christmas and New Year.
                                                I hope you had a brilliant Christmas and New Year.
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={2}>
                                    <p className='p-0 m-0 message_time text-end font-14'>7:38 PM</p>
                                </Col>
                            </Row>

                        </Card.Body>
                    </Card>
                </div>
                <div onClick={toggleMessageView}>
                    <Card className="message_card py-3" >
                        <Card.Body>
                            <Row className='justify-content-between'>
                                <Col sm={10}>
                                    <div className='d-flex'>
                                        <Image src={user3} className="message_img me-3" alt="card_img" />
                                        <div className='message_text_content'>
                                            <div className='d-flex align-items-center'>
                                                <span className='font-16 text-black fw-bold user_name'>
                                                    Jessica Gryffon
                                                </span>
                                                <span className='message_badge text-white ms-3'>Sent</span>
                                            </div>
                                            <p className='mt-3 mb-0 message_text font-14'>
                                                I hope you had a brilliant Christmas and New Year.
                                                I hope you had a brilliant Christmas and New Year.
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={2}>
                                    <p className='p-0 m-0 message_time text-end font-14'>7:38 PM</p>
                                </Col>
                            </Row>

                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    );
};

export default Messages;