import React, { useState } from 'react'
import { Row, Image, Col, Button, Modal } from 'react-bootstrap'
import Card from '../../components/common/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faRepeat } from '@fortawesome/free-solid-svg-icons'
import { faMessage, faShareFromSquare } from '@fortawesome/free-regular-svg-icons'

//image
import cardImg from '../../assets/images/page-img/main1.png'
import loader from '../../assets/images/page-img/page-load-loader.gif'


const News = () => {
    const [showShare, setShowShare] = useState(false);
    const handleCloseShare = () => setShowShare(false);
    const handleShowShare = () => setShowShare(true);

    return (
        <>
            <Col sm={12} >
                <Card className="news_card">
                    <Card.Body className="mt-3">
                        <Row className='align-items-center'>
                            <Col sm={4}>
                                <Card.Body.Image>
                                    <Image src={cardImg} className="news_card_img" alt="card_img" />
                                </Card.Body.Image>
                            </Col>
                            <Col sm={8}>
                                <div className='news_card_text_box'>
                                    <h3 className='font-16 fw-bold text-black m-0 p-0'>What you need to know about Tesla’s Cybertruck</h3>
                                    <p className='font-14 color-second my-2'>35 min ago</p>
                                    <p className="font-16 text-black m-0 p-0 news_card_text_description">
                                        Economic Times - Last year, Elon Musk unveiled the Tesla Motors Cybertruck, at the Tesla design studio after which it went viral for its striking design and its great sample text dots
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                    <Card.Footer>
                        <Row className='mt-3'>
                            <Col sm={3}>
                                <div className='feedback-items d-flex align-items-center'>
                                    <FontAwesomeIcon className='color-main font-6' icon={faHeart} />
                                    <span className='feedback-text color-second ms-1 font-14'>10 Likes</span>
                                </div>
                            </Col>
                            <Col sm={3}>
                                <div className='feedback-items d-flex align-items-center'>
                                    <FontAwesomeIcon className='color-second font-16' icon={faMessage} />
                                    <span className='feedback-text color-second ms-1 font-14'>5 Comments</span>
                                </div>
                            </Col>
                            <Col sm={3}>
                                <div className='feedback-items d-flex align-items-center'>
                                    <FontAwesomeIcon className='color-second font-16' icon={faRepeat} />
                                    <span className='feedback-text color-second ms-1 font-14'>Re-post</span>
                                </div>
                            </Col>
                            <Col sm={3}>
                                <div className='feedback-items d-flex align-items-center cursor-pointer' onClick={handleShowShare}>
                                    <FontAwesomeIcon className='color-second font-14' icon={faShareFromSquare} />
                                    <span className='feedback-text color-second ms-1 font-14'>Share</span>
                                </div>
                                <Modal centered show={showShare} onHide={handleCloseShare}>
                                    <Modal.Header closeButton className='px-5 pt-5'></Modal.Header>
                                    <Modal.Body className='pt-0 px-5 pb-5' >
                                        <p className='fw-bold font-20 color-second'>Share</p>
                                        <div className='d-flex align-items-center justify-content-between mb-5'>
                                            <input type="text" className="share_modal_input font-18" value="https://dgdfgf.preeser.io" readOnly />
                                            <Button variant="primary px-5 ms-5 font-18 fw-bold">
                                                COPY
                                            </Button>
                                        </div>
                                        <p className='font-18 color-second mb-2 cursor-pointer'>Share via Email</p>
                                        <p className='font-18 color-second mb-2 cursor-pointer'>Save to Favorites</p>
                                    </Modal.Body>
                                </Modal>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
                <Card className="news_card">
                    <Card.Body className="mt-3">
                        <Row className='align-items-center'>
                            <Col sm={4}>
                                <Card.Body.Image>
                                    <Image src={cardImg} className="news_card_img" alt="card_img" />
                                </Card.Body.Image>
                            </Col>
                            <Col sm={8}>
                                <div className='news_card_text_box'>
                                    <h3 className='font-16 fw-bold text-black m-0 p-0'>What you need to know about Tesla’s Cybertruck</h3>
                                    <p className='font-14 color-second my-2'>35 min ago</p>
                                    <p className="font-16 text-black m-0 p-0 news_card_text_description">
                                        Economic Times - Last year, Elon Musk unveiled the Tesla Motors Cybertruck, at the Tesla design studio after which it went viral for its striking design and its great sample text dots
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                    <Card.Footer>
                        <Row className='mt-3'>
                            <Col sm={3}>
                                <div className='feedback-items d-flex align-items-center'>
                                    <FontAwesomeIcon className='color-main font-6' icon={faHeart} />
                                    <span className='feedback-text color-second ms-1 font-14'>10 Likes</span>
                                </div>
                            </Col>
                            <Col sm={3}>
                                <div className='feedback-items d-flex align-items-center'>
                                    <FontAwesomeIcon className='color-second font-16' icon={faMessage} />
                                    <span className='feedback-text color-second ms-1 font-14'>5 Comments</span>
                                </div>
                            </Col>
                            <Col sm={3}>
                                <div className='feedback-items d-flex align-items-center'>
                                    <FontAwesomeIcon className='color-second font-16' icon={faRepeat} />
                                    <span className='feedback-text color-second ms-1 font-14'>Re-post</span>
                                </div>
                            </Col>
                            <Col sm={3}>
                                <div className='feedback-items d-flex align-items-center cursor-pointer' onClick={handleShowShare}>
                                    <FontAwesomeIcon className='color-second font-14' icon={faShareFromSquare} />
                                    <span className='feedback-text color-second ms-1 font-14'>Share</span>
                                </div>
                                <Modal centered show={showShare} onHide={handleCloseShare}>
                                    <Modal.Header closeButton className='px-5 pt-5'></Modal.Header>
                                    <Modal.Body className='pt-0 px-5 pb-5' >
                                        <p className='fw-bold font-20 color-second'>Share</p>
                                        <div className='d-flex align-items-center justify-content-between mb-5'>
                                            <input type="text" className="share_modal_input font-18" value="https://dgdfgf.preeser.io" readOnly />
                                            <Button variant="primary px-5 ms-5 font-18 fw-bold">
                                                COPY
                                            </Button>
                                        </div>
                                        <p className='font-18 color-second mb-2 cursor-pointer'>Share via Email</p>
                                        <p className='font-18 color-second mb-2 cursor-pointer'>Save to Favorites</p>
                                    </Modal.Body>
                                </Modal>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
                <Card className="news_card">
                    <Card.Body className="mt-3">
                        <Row className='align-items-center'>
                            <Col sm={4}>
                                <Card.Body.Image>
                                    <Image src={cardImg} className="news_card_img" alt="card_img" />
                                </Card.Body.Image>
                            </Col>
                            <Col sm={8}>
                                <div className='news_card_text_box'>
                                    <h3 className='font-16 fw-bold text-black m-0 p-0'>What you need to know about Tesla’s Cybertruck</h3>
                                    <p className='font-14 color-second my-2'>35 min ago</p>
                                    <p className="font-16 text-black m-0 p-0 news_card_text_description">
                                        Economic Times - Last year, Elon Musk unveiled the Tesla Motors Cybertruck, at the Tesla design studio after which it went viral for its striking design and its great sample text dots
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                    <Card.Footer>
                        <Row className='mt-3'>
                            <Col sm={3}>
                                <div className='feedback-items d-flex align-items-center'>
                                    <FontAwesomeIcon className='color-main font-6' icon={faHeart} />
                                    <span className='feedback-text color-second ms-1 font-14'>10 Likes</span>
                                </div>
                            </Col>
                            <Col sm={3}>
                                <div className='feedback-items d-flex align-items-center'>
                                    <FontAwesomeIcon className='color-second font-16' icon={faMessage} />
                                    <span className='feedback-text color-second ms-1 font-14'>5 Comments</span>
                                </div>
                            </Col>
                            <Col sm={3}>
                                <div className='feedback-items d-flex align-items-center'>
                                    <FontAwesomeIcon className='color-second font-16' icon={faRepeat} />
                                    <span className='feedback-text color-second ms-1 font-14'>Re-post</span>
                                </div>
                            </Col>
                            <Col sm={3}>
                                <div className='feedback-items d-flex align-items-center cursor-pointer' onClick={handleShowShare}>
                                    <FontAwesomeIcon className='color-second font-14' icon={faShareFromSquare} />
                                    <span className='feedback-text color-second ms-1 font-14'>Share</span>
                                </div>
                                <Modal centered show={showShare} onHide={handleCloseShare}>
                                    <Modal.Header closeButton className='px-5 pt-5'></Modal.Header>
                                    <Modal.Body className='pt-0 px-5 pb-5' >
                                        <p className='fw-bold font-20 color-second'>Share</p>
                                        <div className='d-flex align-items-center justify-content-between mb-5'>
                                            <input type="text" className="share_modal_input font-18" value="https://dgdfgf.preeser.io" readOnly />
                                            <Button variant="primary px-5 ms-5 font-18 fw-bold">
                                                COPY
                                            </Button>
                                        </div>
                                        <p className='font-18 color-second mb-2 cursor-pointer'>Share via Email</p>
                                        <p className='font-18 color-second mb-2 cursor-pointer'>Save to Favorites</p>
                                    </Modal.Body>
                                </Modal>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
                <Card className="news_card">
                    <Card.Body className="mt-3">
                        <Row className='align-items-center'>
                            <Col sm={4}>
                                <Card.Body.Image>
                                    <Image src={cardImg} className="news_card_img" alt="card_img" />
                                </Card.Body.Image>
                            </Col>
                            <Col sm={8}>
                                <div className='news_card_text_box'>
                                    <h3 className='font-16 fw-bold text-black m-0 p-0'>What you need to know about Tesla’s Cybertruck</h3>
                                    <p className='font-14 color-second my-2'>35 min ago</p>
                                    <p className="font-16 text-black m-0 p-0 news_card_text_description">
                                        Economic Times - Last year, Elon Musk unveiled the Tesla Motors Cybertruck, at the Tesla design studio after which it went viral for its striking design and its great sample text dots
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                    <Card.Footer>
                        <Row className='mt-3'>
                            <Col sm={3}>
                                <div className='feedback-items d-flex align-items-center'>
                                    <FontAwesomeIcon className='color-main font-6' icon={faHeart} />
                                    <span className='feedback-text color-second ms-1 font-14'>10 Likes</span>
                                </div>
                            </Col>
                            <Col sm={3}>
                                <div className='feedback-items d-flex align-items-center'>
                                    <FontAwesomeIcon className='color-second font-16' icon={faMessage} />
                                    <span className='feedback-text color-second ms-1 font-14'>5 Comments</span>
                                </div>
                            </Col>
                            <Col sm={3}>
                                <div className='feedback-items d-flex align-items-center'>
                                    <FontAwesomeIcon className='color-second font-16' icon={faRepeat} />
                                    <span className='feedback-text color-second ms-1 font-14'>Re-post</span>
                                </div>
                            </Col>
                            <Col sm={3}>
                                <div className='feedback-items d-flex align-items-center cursor-pointer' onClick={handleShowShare}>
                                    <FontAwesomeIcon className='color-second font-14' icon={faShareFromSquare} />
                                    <span className='feedback-text color-second ms-1 font-14'>Share</span>
                                </div>
                                <Modal centered show={showShare} onHide={handleCloseShare}>
                                    <Modal.Header closeButton className='px-5 pt-5'></Modal.Header>
                                    <Modal.Body className='pt-0 px-5 pb-5' >
                                        <p className='fw-bold font-20 color-second'>Share</p>
                                        <div className='d-flex align-items-center justify-content-between mb-5'>
                                            <input type="text" className="share_modal_input font-18" value="https://dgdfgf.preeser.io" readOnly />
                                            <Button variant="primary px-5 ms-5 font-18 fw-bold">
                                                COPY
                                            </Button>
                                        </div>
                                        <p className='font-18 color-second mb-2 cursor-pointer'>Share via Email</p>
                                        <p className='font-18 color-second mb-2 cursor-pointer'>Save to Favorites</p>
                                    </Modal.Body>
                                </Modal>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
            </Col>
            <div className="col-sm-12 text-center">
                <img src={loader} alt="loader" style={{ height: "100px" }} />
            </div>
        </>
    )
}

export default News
