import React from 'react'
import { Image, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faGear, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Card from '../../components/common/Card'

//image
import joinLogo from '../../assets/images/logos/logo_new_1_light.png'
import starRating from '../../assets/images/logos/star_rating.png'

const CardBar = () => {

    return (
        <>
            <Card className="join-card py-2 px-3">
                <div className='row justify-content-between'>
                    <Col sm={7} className='join-card-left d-flex flex-column'>
                        <Image src={joinLogo} className="w-100 mb-2" alt="logo_png" />
                        <Image src={starRating} className="star_rating_img mb-1" alt="logo_png" />
                        <span className='font-14 text-black'>Sponsored</span>
                    </Col>
                    <Col sm={3} className='join-card-right d-flex flex-column justify-content-between align-items-end'>
                        <FontAwesomeIcon icon={faClose} />
                        <h1 className='font-20 color-main fw-bold'>JOIN</h1>
                    </Col>
                </div>
            </Card>
            <Card className="previous-search-card">
                <Card.Header className="d-flex justify-content-between align-items-center p-2">
                    <h1 className="text-black font-20 fw-bold">Previous Searches</h1>
                    <FontAwesomeIcon className="font-20 color-main" icon={faGear} />
                </Card.Header>
                <Card.Body>
                    <div className="search-item d-flex justify-content-between py-2">
                        <div className="search-item-left d-flex flex-column">
                            <span className="search-item-date font-14 color-second my-1">23 January, 2021</span>
                            <span className="search-item-content font-16 text-black fw-bold">Fransa'da 15,5</span>
                        </div>
                        <FontAwesomeIcon className="font-16 color-second" icon={faChevronDown} />
                    </div>
                    <div className="search-item d-flex justify-content-between py-2">
                        <div className="search-item-left d-flex flex-column">
                            <span className="search-item-date font-14 color-second my-1">23 January, 2021</span>
                            <span className="search-item-content font-16 text-black fw-bold">14 Haziran'da</span>
                        </div>
                        <FontAwesomeIcon className="font-16 color-second" icon={faChevronDown} />
                    </div>
                    <div className="search-item d-flex justify-content-between py-2">
                        <div className="search-item-left d-flex flex-column">
                            <span className="search-item-date font-14 color-second my-1">23 January, 2021</span>
                            <span className="search-item-content font-16 text-black fw-bold">#diyanetkapatılsın</span>
                        </div>
                        <FontAwesomeIcon className="font-16 color-second" icon={faChevronDown} />
                    </div>
                    <div className="search-item d-flex justify-content-between py-2">
                        <div className="search-item-left d-flex flex-column">
                            <span className="search-item-date font-14 color-second my-1">23 January, 2021</span>
                            <span className="search-item-content font-16 text-black fw-bold">#KabineSınavıErteler</span>
                        </div>
                        <FontAwesomeIcon className="font-16 color-second" icon={faChevronDown} />
                    </div>
                    <div className="search-item d-flex justify-content-between py-2">
                        <div className="search-item-left d-flex flex-column">
                            <span className="search-item-date font-14 color-second my-1">23 January, 2021</span>
                            <span className="search-item-content font-16 text-black fw-bold">Travis Scott</span>
                        </div>
                        <FontAwesomeIcon className="font-16 color-second" icon={faChevronDown} />
                    </div>
                </Card.Body>
                <Card.Footer className="py-2">
                    <span className='color-main font-16'>
                        Show More
                    </span>
                </Card.Footer>
            </Card>
        </>
    )
}

export default CardBar
