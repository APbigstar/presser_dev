import React, { useState } from 'react'
import { Row, Image, Col, Dropdown, Button, Modal, Form } from 'react-bootstrap'
import Card from '../../components/common/Card'
import CustomToggle from '../../components/common/dropdowns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faRepeat, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { faMessage, faShareFromSquare } from '@fortawesome/free-regular-svg-icons'

//image
import user1 from '../../assets/images/users/user1.png'
import user2 from '../../assets/images/users/user5.png'
import user3 from '../../assets/images/users/user4.jpeg'
import miniLogo from '../../assets/images/logos/mini_logo1.png'
import cardImg from '../../assets/images/page-img/main1.png'
import cardImg1 from '../../assets/images/page-img/main2.png'
import loader from '../../assets/images/page-img/page-load-loader.gif'

const Speaks = () => {
    const [showShare, setShowShare] = useState(false);
    const handleCloseShare = () => setShowShare(false);
    const handleShowShare = () => setShowShare(true);

    const handleClickRemove = (e) => {
        if (e.target.classList.contains('card_see_less_btn') && e.target.closest(".card").querySelector('.body-img')) {
            e.target.closest(".card").querySelector('.body-img').classList.add('d-none');
        }
    };

    const handleClickAdd = (e) => {
        if (e.target.classList.contains('card_see_more_btn') && e.target.closest(".card").querySelector('.body-img')) {
            e.target.closest(".card").querySelector('.body-img').classList.remove('d-none');
        }
    };

    const toggleComments = (e) => {
        if (e.target.closest('.comments-btn') && e.target.closest(".card").querySelector('.speak-card-comment')) {
            e.target.closest(".card").querySelector('.speak-card-comment').classList.toggle('d-none');
        }
    };

    return (
        <>
            <Col sm={12} >
                <Card className="speaks_card">
                    <Card.Header className="d-flex justify-content-between">
                        <div className='card_header_left d-flex align-items-center'>
                            <Image src={user1} alt="user_avatar" />
                            <div className='user_info d-flex flex-column ms-3'>
                                <div className='d-flex align-items-center'>
                                    <span className='user_id font-16 color-main fw-bold me-2'>@bigstar</span>
                                    <Image src={miniLogo} alt="site_logo" />
                                </div>
                                <span className='last_visited font-14 color-second'>7:23 PM</span>
                            </div>
                        </div>
                        <div className='card_header_right d-flex align-items-center'>
                            <div className="card-header-toolbar d-flex align-items-center me-2">
                                <Dropdown>
                                    <Dropdown.Toggle as={CustomToggle} id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                        <FontAwesomeIcon className='color-second font-16' icon={faEllipsis} />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className=" dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                        <Dropdown.Item href="#">Report</Dropdown.Item>
                                        <Dropdown.Item className='card_see_less_btn' onClick={handleClickRemove} >See less</Dropdown.Item>
                                        <Dropdown.Item className='card_see_more_btn' onClick={handleClickAdd} >See more</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <Card.Body.Text className="font-16 text-black">
                            Went on a wild hike this afternoon and was able to capture this amazing shot of the surrounding mountains during sunset. #nature
                        </Card.Body.Text>
                        <Card.Body.Image>
                            <Image src={cardImg} alt="card_img" className='card_img' />
                        </Card.Body.Image>
                    </Card.Body>
                    <Card.Footer>
                        <Row>
                            <Col sm={3}>
                                <div className='feedback-items d-flex align-items-center'>
                                    <FontAwesomeIcon className='color-main font-14' icon={faHeart} />
                                    <span className='feedback-text color-second ms-1 font-14'>10 Likes</span>
                                </div>
                            </Col>
                            <Col sm={3} >
                                <div className='feedback-items comments-btn d-flex align-items-center' onClick={toggleComments} >
                                    <FontAwesomeIcon className='color-second font-14' icon={faMessage} />
                                    <span className='feedback-text color-second ms-1 font-14'>5 Comments</span>
                                </div>
                            </Col>
                            <Col sm={3}>
                                <div className='feedback-items d-flex align-items-center'>
                                    <FontAwesomeIcon className='color-second font-14' icon={faRepeat} />
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
                        <div className='speak-card-comment mt-3 py-3'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <h2 className='font-18 color-main fw-bold'>Comments</h2>
                                <div className='comment_sort d-flex'>
                                    <span className='color-second font-14 me-3 active'>Newest</span>
                                    <span className='color-second font-14'>Best</span>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between comment-input mt-3'>
                                <Image src={user3} alt="user_avatar" className='user_avatar' />
                                <div className="position-relative ms-3 w-100">
                                    <form action="#" className="comment_box">
                                        <Form.Control
                                            type="text"
                                            className="text search-input form-control cutomize-search-input"
                                            placeholder="Add Comment"
                                        />
                                    </form>
                                </div>
                            </div>
                            <Row className='mt-3'>
                                <Col sm={1} className="text-center">
                                    <Image src={user2} alt="user_avatar" className='comment_user_avatar ms-2' />
                                </Col>
                                <Col sm={10}>
                                    <div className='d-flex align-items-center ms-2'>
                                        <span className='user_name color-main font-14 fw-bold'>
                                            witty_alice
                                        </span>
                                        <span className='dot mx-2'></span>
                                        <span className='user_id color-second'>
                                            @alice
                                        </span>
                                        <span className='dot mx-2'></span>
                                        <span className='posted_time color-second'>
                                            10 min ago
                                        </span>
                                    </div>
                                    <div className='coment_content_box ms-2'>
                                        <div className='comment_content_box_media'>
                                            {/* <Image src={cardImg1} alt="card_img" className='my-2 card_img w-100' /> */}
                                        </div>
                                        <p className='comment_content_box_text p-0 m-0 text-black font-16'>
                                            Beautiful photo!
                                        </p>
                                        <div className='comment_content_box_reply d-flex align-items-center'>
                                            <span className='color-second me-3'>2 Likes</span>
                                            <span className='color-second me-3'>Reply</span>
                                            <span className='color-second'>Share</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={1} className="">
                                    <Dropdown>
                                        <Dropdown.Toggle as={CustomToggle} id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                            <FontAwesomeIcon className='color-second font-16' icon={faEllipsis} />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className=" dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                            <Dropdown.Item href="#">Report</Dropdown.Item>
                                            <Dropdown.Item className='card_see_less_btn' onClick={handleClickRemove} >See less</Dropdown.Item>
                                            <Dropdown.Item className='card_see_more_btn' onClick={handleClickAdd} >See more</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={1}></Col>
                                <Col sm={11}>
                                    <Row className='mt-3'>
                                        <Col sm={1} className="text-center">
                                            <Image src={user2} alt="user_avatar" className='comment_user_avatar ms-2' />
                                        </Col>
                                        <Col sm={10}>
                                            <div className='d-flex align-items-center ms-2'>
                                                <span className='user_name color-main font-14 fw-bold'>
                                                    witty_alice
                                                </span>
                                                <span className='dot mx-2'></span>
                                                <span className='user_id color-second'>
                                                    @alice
                                                </span>
                                                <span className='dot mx-2'></span>
                                                <span className='posted_time color-second'>
                                                    10 min ago
                                                </span>
                                            </div>
                                            <div className='coment_content_box ms-2'>
                                                <div className='comment_content_box_media'>
                                                    <Image src={cardImg1} alt="card_img" className='my-2 card_img w-100' />
                                                </div>
                                                <p className='comment_content_box_text p-0 m-0 text-black font-16'>
                                                    Beautiful photo!
                                                </p>
                                                <div className='comment_content_box_reply d-flex align-items-center'>
                                                    <span className='color-second me-3'>2 Likes</span>
                                                    <span className='color-second me-3'>Reply</span>
                                                    <span className='color-second'>Share</span>
                                                </div>
                                            </div>
                                            <div className="position-relative mt-3 w-100">
                                                <form action="#" className="comment_box">
                                                    <Form.Control
                                                        type="text"
                                                        className="text search-input form-control cutomize-search-input"
                                                        placeholder="Add Reply"
                                                    />
                                                </form>
                                            </div>
                                        </Col>
                                        <Col sm={1} className="">
                                            <Dropdown>
                                                <Dropdown.Toggle as={CustomToggle} id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                                    <FontAwesomeIcon className='color-second font-16' icon={faEllipsis} />
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className=" dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                                    <Dropdown.Item href="#">Report</Dropdown.Item>
                                                    <Dropdown.Item className='card_see_less_btn' onClick={handleClickRemove} >See less</Dropdown.Item>
                                                    <Dropdown.Item className='card_see_more_btn' onClick={handleClickAdd} >See more</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Card.Footer>
                </Card>
                <Card className="speaks_card">
                    <Card.Header className="d-flex justify-content-between">
                        <div className='card_header_left d-flex align-items-center'>
                            <Image src={user1} alt="user_avatar" />
                            <div className='user_info d-flex flex-column ms-3'>
                                <div className='d-flex align-items-center'>
                                    <span className='user_id font-16 color-main fw-bold me-2'>@bigstar</span>
                                    <Image src={miniLogo} alt="site_logo" />
                                </div>
                                <span className='last_visited font-14 color-second'>7:23 PM</span>
                            </div>
                        </div>
                        <div className='card_header_right d-flex align-items-center'>
                            <div className="card-header-toolbar d-flex align-items-center me-2">
                                <Dropdown>
                                    <Dropdown.Toggle as={CustomToggle} id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                        <FontAwesomeIcon className='color-second font-16' icon={faEllipsis} />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className=" dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                        <Dropdown.Item href="#">Report</Dropdown.Item>
                                        <Dropdown.Item className='card_see_less_btn' onClick={handleClickRemove} >See less</Dropdown.Item>
                                        <Dropdown.Item className='card_see_more_btn' onClick={handleClickAdd} >See more</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <Card.Body.Text className="font-16 text-black">
                            Went on a wild hike this afternoon and was able to capture this amazing shot of the surrounding mountains during sunset. #nature
                        </Card.Body.Text>
                        <Card.Body.Image>
                            {/* <Image src={cardImg} alt="card_img" className='card_img' /> */}
                        </Card.Body.Image>
                    </Card.Body>
                    <Card.Footer>
                        <Row>
                            <Col sm={3}>
                                <div className='feedback-items d-flex align-items-center'>
                                    <FontAwesomeIcon className='color-main font-14' icon={faHeart} />
                                    <span className='feedback-text color-second ms-1 font-14'>10 Likes</span>
                                </div>
                            </Col>
                            <Col sm={3} >
                                <div className='feedback-items comments-btn d-flex align-items-center' onClick={toggleComments} >
                                    <FontAwesomeIcon className='color-second font-14' icon={faMessage} />
                                    <span className='feedback-text color-second ms-1 font-14'>5 Comments</span>
                                </div>
                            </Col>
                            <Col sm={3}>
                                <div className='feedback-items d-flex align-items-center'>
                                    <FontAwesomeIcon className='color-second font-14' icon={faRepeat} />
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
                        <div className='speak-card-comment mt-3 py-3'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <h2 className='font-18 color-main fw-bold'>Comments</h2>
                                <div className='comment_sort d-flex'>
                                    <span className='color-second font-14 me-3 active'>Newest</span>
                                    <span className='color-second font-14'>Best</span>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between comment-input mt-3'>
                                <Image src={user3} alt="user_avatar" className='user_avatar' />
                                <div className="position-relative ms-3 w-100">
                                    <form action="#" className="comment_box">
                                        <Form.Control
                                            type="text"
                                            className="text search-input form-control cutomize-search-input"
                                            placeholder="Add Comment"
                                        />
                                    </form>
                                </div>
                            </div>
                            <Row className='mt-3'>
                                <Col sm={1} className="text-center">
                                    <Image src={user2} alt="user_avatar" className='comment_user_avatar ms-2' />
                                </Col>
                                <Col sm={10}>
                                    <div className='d-flex align-items-center ms-2'>
                                        <span className='user_name color-main font-14 fw-bold'>
                                            witty_alice
                                        </span>
                                        <span className='dot mx-2'></span>
                                        <span className='user_id color-second'>
                                            @alice
                                        </span>
                                        <span className='dot mx-2'></span>
                                        <span className='posted_time color-second'>
                                            10 min ago
                                        </span>
                                    </div>
                                    <div className='coment_content_box ms-2'>
                                        <div className='comment_content_box_media'>
                                            {/* <Image src={cardImg1} alt="card_img" className='my-2 card_img w-100' /> */}
                                        </div>
                                        <p className='comment_content_box_text p-0 m-0 text-black font-16'>
                                            Beautiful photo!
                                        </p>
                                        <div className='comment_content_box_reply d-flex align-items-center'>
                                            <span className='color-second me-3'>2 Likes</span>
                                            <span className='color-second me-3'>Reply</span>
                                            <span className='color-second'>Share</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={1} className="">
                                    <Dropdown>
                                        <Dropdown.Toggle as={CustomToggle} id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                            <FontAwesomeIcon className='color-second font-16' icon={faEllipsis} />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className=" dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                            <Dropdown.Item href="#">Report</Dropdown.Item>
                                            <Dropdown.Item className='card_see_less_btn' onClick={handleClickRemove} >See less</Dropdown.Item>
                                            <Dropdown.Item className='card_see_more_btn' onClick={handleClickAdd} >See more</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={1}></Col>
                                <Col sm={11}>
                                    <Row className='mt-3'>
                                        <Col sm={1} className="text-center">
                                            <Image src={user2} alt="user_avatar" className='comment_user_avatar ms-2' />
                                        </Col>
                                        <Col sm={10}>
                                            <div className='d-flex align-items-center ms-2'>
                                                <span className='user_name color-main font-14 fw-bold'>
                                                    witty_alice
                                                </span>
                                                <span className='dot mx-2'></span>
                                                <span className='user_id color-second'>
                                                    @alice
                                                </span>
                                                <span className='dot mx-2'></span>
                                                <span className='posted_time color-second'>
                                                    10 min ago
                                                </span>
                                            </div>
                                            <div className='coment_content_box ms-2'>
                                                <div className='comment_content_box_media'>
                                                    <Image src={cardImg1} alt="card_img" className='my-2 card_img w-100' />
                                                </div>
                                                <p className='comment_content_box_text p-0 m-0 text-black font-16'>
                                                    Beautiful photo!
                                                </p>
                                                <div className='comment_content_box_reply d-flex align-items-center'>
                                                    <span className='color-second me-3'>2 Likes</span>
                                                    <span className='color-second me-3'>Reply</span>
                                                    <span className='color-second'>Share</span>
                                                </div>
                                            </div>
                                            <div className="position-relative mt-3 w-100">
                                                <form action="#" className="comment_box">
                                                    <Form.Control
                                                        type="text"
                                                        className="text search-input form-control cutomize-search-input"
                                                        placeholder="Add Reply"
                                                    />
                                                </form>
                                            </div>
                                        </Col>
                                        <Col sm={1} className="">
                                            <Dropdown>
                                                <Dropdown.Toggle as={CustomToggle} id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                                    <FontAwesomeIcon className='color-second font-16' icon={faEllipsis} />
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className=" dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                                    <Dropdown.Item href="#">Report</Dropdown.Item>
                                                    <Dropdown.Item className='card_see_less_btn' onClick={handleClickRemove} >See less</Dropdown.Item>
                                                    <Dropdown.Item className='card_see_more_btn' onClick={handleClickAdd} >See more</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Card.Footer>
                </Card>
                <Card className="speaks_card">
                    <Card.Header className="d-flex justify-content-between">
                        <div className='card_header_left d-flex align-items-center'>
                            <Image src={user1} alt="user_avatar" />
                            <div className='user_info d-flex flex-column ms-3'>
                                <div className='d-flex align-items-center'>
                                    <span className='user_id font-16 color-main fw-bold me-2'>@bigstar</span>
                                    <Image src={miniLogo} alt="site_logo" />
                                </div>
                                <span className='last_visited font-14 color-second'>7:23 PM</span>
                            </div>
                        </div>
                        <div className='card_header_right d-flex align-items-center'>
                            <div className="card-header-toolbar d-flex align-items-center me-2">
                                <Dropdown>
                                    <Dropdown.Toggle as={CustomToggle} id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                        <FontAwesomeIcon className='color-second font-16' icon={faEllipsis} />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className=" dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                        <Dropdown.Item href="#">Report</Dropdown.Item>
                                        <Dropdown.Item className='card_see_less_btn' onClick={handleClickRemove} >See less</Dropdown.Item>
                                        <Dropdown.Item className='card_see_more_btn' onClick={handleClickAdd} >See more</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <Card.Body.Text className="font-16 text-black">
                            Went on a wild hike this afternoon and was able to capture this amazing shot of the surrounding mountains during sunset. #nature
                        </Card.Body.Text>
                        <Card.Body.Image>
                            {/* <Image src={cardImg} alt="card_img" className='card_img' /> */}
                        </Card.Body.Image>
                    </Card.Body>
                    <Card.Footer>
                        <Row>
                            <Col sm={3}>
                                <div className='feedback-items d-flex align-items-center'>
                                    <FontAwesomeIcon className='color-main font-14' icon={faHeart} />
                                    <span className='feedback-text color-second ms-1 font-14'>10 Likes</span>
                                </div>
                            </Col>
                            <Col sm={3} >
                                <div className='feedback-items comments-btn d-flex align-items-center' onClick={toggleComments} >
                                    <FontAwesomeIcon className='color-second font-14' icon={faMessage} />
                                    <span className='feedback-text color-second ms-1 font-14'>5 Comments</span>
                                </div>
                            </Col>
                            <Col sm={3}>
                                <div className='feedback-items d-flex align-items-center'>
                                    <FontAwesomeIcon className='color-second font-14' icon={faRepeat} />
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
                        <div className='speak-card-comment mt-3 py-3'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <h2 className='font-18 color-main fw-bold'>Comments</h2>
                                <div className='comment_sort d-flex'>
                                    <span className='color-second font-14 me-3 active'>Newest</span>
                                    <span className='color-second font-14'>Best</span>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between comment-input mt-3'>
                                <Image src={user3} alt="user_avatar" className='user_avatar' />
                                <div className="position-relative ms-3 w-100">
                                    <form action="#" className="comment_box">
                                        <Form.Control
                                            type="text"
                                            className="text search-input form-control cutomize-search-input"
                                            placeholder="Add Comment"
                                        />
                                    </form>
                                </div>
                            </div>
                            <Row className='mt-3'>
                                <Col sm={1} className="text-center">
                                    <Image src={user2} alt="user_avatar" className='comment_user_avatar ms-2' />
                                </Col>
                                <Col sm={10}>
                                    <div className='d-flex align-items-center ms-2'>
                                        <span className='user_name color-main font-14 fw-bold'>
                                            witty_alice
                                        </span>
                                        <span className='dot mx-2'></span>
                                        <span className='user_id color-second'>
                                            @alice
                                        </span>
                                        <span className='dot mx-2'></span>
                                        <span className='posted_time color-second'>
                                            10 min ago
                                        </span>
                                    </div>
                                    <div className='coment_content_box ms-2'>
                                        <div className='comment_content_box_media'>
                                            {/* <Image src={cardImg1} alt="card_img" className='my-2 card_img w-100' /> */}
                                        </div>
                                        <p className='comment_content_box_text p-0 m-0 text-black font-16'>
                                            Beautiful photo!
                                        </p>
                                        <div className='comment_content_box_reply d-flex align-items-center'>
                                            <span className='color-second me-3'>2 Likes</span>
                                            <span className='color-second me-3'>Reply</span>
                                            <span className='color-second'>Share</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={1} className="">
                                    <Dropdown>
                                        <Dropdown.Toggle as={CustomToggle} id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                            <FontAwesomeIcon className='color-second font-16' icon={faEllipsis} />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className=" dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                            <Dropdown.Item href="#">Report</Dropdown.Item>
                                            <Dropdown.Item className='card_see_less_btn' onClick={handleClickRemove} >See less</Dropdown.Item>
                                            <Dropdown.Item className='card_see_more_btn' onClick={handleClickAdd} >See more</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                            </Row>
                            {/* <Row>
                                <Col sm={1}></Col>
                                <Col sm={11}>
                                    <Row className='mt-3'>
                                        <Col sm={1} className="text-center">
                                            <Image src={user2} alt="user_avatar" className='comment_user_avatar ms-2' />
                                        </Col>
                                        <Col sm={10}>
                                            <div className='d-flex align-items-center ms-2'>
                                                <span className='user_name color-main font-14 fw-bold'>
                                                    witty_alice
                                                </span>
                                                <span className='dot mx-2'></span>
                                                <span className='user_id color-second'>
                                                    @alice
                                                </span>
                                                <span className='dot mx-2'></span>
                                                <span className='posted_time color-second'>
                                                    10 min ago
                                                </span>
                                            </div>
                                            <div className='coment_content_box ms-2'>
                                                <div className='comment_content_box_media'>
                                                    <Image src={cardImg1} alt="card_img" className='my-2 card_img w-100' />
                                                </div>
                                                <p className='comment_content_box_text p-0 m-0 text-black font-16'>
                                                    Beautiful photo!
                                                </p>
                                                <div className='comment_content_box_reply d-flex align-items-center'>
                                                    <span className='color-second me-3'>2 Likes</span>
                                                    <span className='color-second me-3'>Reply</span>
                                                    <span className='color-second'>Share</span>
                                                </div>
                                            </div>
                                            <div className="position-relative mt-3 w-100">
                                                <form action="#" className="comment_box">
                                                    <Form.Control
                                                        type="text"
                                                        className="text search-input form-control cutomize-search-input"
                                                        placeholder="Add Reply"
                                                    />
                                                </form>
                                            </div>
                                        </Col>
                                        <Col sm={1} className="">
                                            <Dropdown>
                                                <Dropdown.Toggle as={CustomToggle} id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                                    <FontAwesomeIcon className='color-second font-16' icon={faEllipsis} />
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className=" dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                                    <Dropdown.Item href="#">Report</Dropdown.Item>
                                                    <Dropdown.Item className='card_see_less_btn' onClick={handleClickRemove} >See less</Dropdown.Item>
                                                    <Dropdown.Item className='card_see_more_btn' onClick={handleClickAdd} >See more</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row> */}
                        </div>
                    </Card.Footer>
                </Card>
            </Col>
            <div className="col-sm-12 text-center">
                <img src={loader} alt="loader" style={{ height: "100px" }} />
            </div>
        </>
    )
}

export default Speaks
