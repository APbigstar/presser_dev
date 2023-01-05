import React from 'react';
import { Accordion } from 'react-bootstrap'

const Settings = () => {
    return (
        <>
            <Accordion defaultActiveKey="0" className='settings-accordion'>
                <Accordion.Item className="" eventKey="100">
                    <Accordion.Header>
                        <h1 className='font-34 fw-bold'>
                            Settings and Privacy
                        </h1>
                    </Accordion.Header>
                </Accordion.Item>
                <Accordion.Item className="" eventKey="9">
                    <Accordion.Header>
                        Account
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="" eventKey="1">
                    <Accordion.Header>
                        Privacy and Safety
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="" eventKey="2">
                    <Accordion.Header>
                        Notification
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="" eventKey="3">
                    <Accordion.Header>
                        Content Preferences
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="" eventKey="5">
                    <Accordion.Header>
                        About
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>commodo id mollit deserunt elit. Minim mollit ipsum quis ad non voluptate eiusmod. Duis fugiat deserunt consectetur Lorem ex et dolore proident. Lorem sit nostrud deserunt exercitation. Elit eu nisi veniam aute laboris laboris cupidatat est ea officia. Labore consectetur do enim est fugiat non nulla reprehenderit consectetur. Elit elit Lorem ex cillum pariatur adipisicing qui enim elit excepteur laboris cillum dolore. Proident reprehenderit dolor in consequat magna.commodo id mollit deserunt elit. Minim mollit ipsum quis ad non voluptate eiusmod. Duis fugiat deserunt consectetur Lorem ex et dolore proident. Lorem sit nostrud deserunt exercitation. Elit eu nisi veniam aute laboris laboris cupidatat est ea officia. Labore consectetur do enim est fugiat non nulla reprehenderit consectetur. Elit elit Lorem ex cillum pariatur adipisicing qui enim elit excepteur laboris cillum dolore. Proident reprehenderit dolor in consequat magna.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="" eventKey="6">
                    <Accordion.Header id="heading7">
                        Favorites
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="" eventKey="7">
                    <Accordion.Header>
                        Terms of Service
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>commodo id mollit deserunt elit. Minim mollit ipsum quis ad non voluptate eiusmod. Duis fugiat deserunt consectetur Lorem ex et dolore proident. Lorem sit nostrud deserunt exercitation. Elit eu nisi veniam aute laboris laboris cupidatat est ea officia. Labore consectetur do enim est fugiat non nulla reprehenderit consectetur. Elit elit Lorem ex cillum pariatur adipisicing qui enim elit excepteur laboris cillum dolore. Proident reprehenderit dolor in consequat magna.commodo id mollit deserunt elit. Minim mollit ipsum quis ad non voluptate eiusmod. Duis fugiat deserunt consectetur Lorem ex et dolore proident. Lorem sit nostrud deserunt exercitation. Elit eu nisi veniam aute laboris laboris cupidatat est ea officia. Labore consectetur do enim est fugiat non nulla reprehenderit consectetur. Elit elit Lorem ex cillum pariatur adipisicing qui enim elit excepteur laboris cillum dolore. Proident reprehenderit dolor in consequat magna.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="" eventKey="8">
                    <Accordion.Header>
                        Help
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>commodo id mollit deserunt elit. Minim mollit ipsum quis ad non voluptate eiusmod. Duis fugiat deserunt consectetur Lorem ex et dolore proident. Lorem sit nostrud deserunt exercitation. Elit eu nisi veniam aute laboris laboris cupidatat est ea officia. Labore consectetur do enim est fugiat non nulla reprehenderit consectetur. Elit elit Lorem ex cillum pariatur adipisicing qui enim elit excepteur laboris cillum dolore. Proident reprehenderit dolor in consequat magna.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <p className='mt-5 font-14 fw-bold color-main'>These settings affect all of your Presser.io accounts on this device.</p>
        </>
    )
}

export default Settings