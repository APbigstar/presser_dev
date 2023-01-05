import React, { useState, useContext } from 'react'

//router
import { Link, useLocation } from 'react-router-dom'

//react-bootstrap
import { Accordion, useAccordionButton, AccordionContext, Image, Tooltip, OverlayTrigger } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faEnvelope, faUserGroup, faBell, faCircleUser, faGear } from '@fortawesome/free-solid-svg-icons'
// import { fahouse } from '@fortawesome/free-regular-svg-icons'

import speakImg from "../../assets/images/icons/sidebar/Speak.png"


function CustomToggle({ children, eventKey, onClick }) {

    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(eventKey, (active) => onClick({ state: !active, eventKey: eventKey }));

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
        <Link to="#" aria-expanded={isCurrentEventKey ? 'true' : 'false'} className="nav-link" role="button" onClick={(e) => {
            decoratedOnClick(isCurrentEventKey)
        }}>
            {children}
        </Link>
    );
}

const VerticalNav = React.memo(() => {
    const [activeMenu, setActiveMenu] = useState(false)
    const [active, setActive] = useState('')
    //location
    let location = useLocation();
    // console.log(document);


    return (
        <React.Fragment>
            <Accordion as="ul" className="navbar-nav iq-main-menu" id="sidebar-menu">
                <li className={`${(location.pathname).split("/")[2] == 'app' ? 'active' : ''} nav-item `}>
                    <Link className={`${(location.pathname).split("/")[2] == 'app' ? 'active' : ''} nav-link `} aria-current="page" to="/dashboard/app/speaks">
                        <OverlayTrigger placement="right" overlay={<Tooltip>Home</Tooltip>}>
                            <FontAwesomeIcon icon={faHouse} />
                        </OverlayTrigger>
                        <span className="item-name">Home</span>
                    </Link>
                </li>
                <li className={`${location.pathname.split("/")[2] == 'common' ? 'active' : ''} nav-item `}>
                    <Link className={`${location.pathname.split("/")[2] == 'common' ? 'active' : ''} nav-link `} aria-current="page" to="/dashboard/messages">
                        <OverlayTrigger placement="right" overlay={<Tooltip>Messages</Tooltip>}>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </OverlayTrigger>
                        <span className="item-name">Messages</span>
                    </Link>
                </li>
                <li className={`${location.pathname === '/' ? 'active' : ''} nav-item `}>
                    <Link className={`${location.pathname === '/' ? 'active' : ''} nav-link `} aria-current="page" to="/">
                        <OverlayTrigger placement="right" overlay={<Tooltip>Groups</Tooltip>}>
                            <FontAwesomeIcon icon={faUserGroup} />
                        </OverlayTrigger>
                        <span className="item-name">Groups</span>
                    </Link>
                </li>
                <li className={`${location.pathname === '/' ? 'active' : ''} nav-item `}>
                    <Link className={`${location.pathname === '/' ? 'active' : ''} nav-link `} aria-current="page" to="/">
                        <OverlayTrigger placement="right" overlay={<Tooltip>Notifications</Tooltip>}>
                            <FontAwesomeIcon icon={faBell} />
                        </OverlayTrigger>
                        <span className="item-name">Notifications</span>
                    </Link>
                </li>
                <li className={`${location.pathname === '/' ? 'active' : ''} nav-item `}>
                    <Link className={`${location.pathname === '/' ? 'active' : ''} nav-link `} aria-current="page" to="/">
                        <OverlayTrigger placement="right" overlay={<Tooltip>Profile</Tooltip>}>
                            <FontAwesomeIcon icon={faCircleUser} />
                        </OverlayTrigger>
                        <span className="item-name">Profile</span>
                    </Link>
                </li>
                <li className={`${location.pathname.split("/")[2] == 'settings' ? 'active' : ''} nav-item `}>
                    <Link className={`${location.pathname.split("/")[2] == 'settings' ? 'active' : ''} nav-link `} aria-current="page" to="/dashboard/settings">
                        <OverlayTrigger placement="right" overlay={<Tooltip>Settings</Tooltip>}>
                            <FontAwesomeIcon icon={faGear} />
                        </OverlayTrigger>
                        <span className="item-name">Settings</span>
                    </Link>
                </li>
                <li className={`${(location.pathname) === '/' ? 'active' : ''} nav-item `}>
                    <Link className={`${(location.pathname) === '/' ? 'active' : ''} nav-link nav-link-speak `} aria-current="page" to="/">
                        <OverlayTrigger placement="right" overlay={<Tooltip>Speak</Tooltip>}>
                            <Image src={speakImg} alt="speak_img" />
                        </OverlayTrigger>
                    </Link>
                </li>


            </Accordion>
        </React.Fragment>
    )
})

export default VerticalNav
