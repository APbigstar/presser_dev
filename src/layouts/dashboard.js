import React from 'react'
import { Col } from 'react-bootstrap'

//header
import Header from '../components/headers/dashBoard-header'
import CardBar from '../components/sidebars/cardbar'
import MainNav from '../components/sidebars/mainnav'

//sidebar
// import RightSidebar from '../../components/partials/dashboard/SidebarStyle/rightsidebar'

//sidebar
import Sidebar from '../components/sidebars/sidebar'

//footer
// import Footer from '../../components/partials/dashboard/FooterStyle/footer'

//default 
import DashboardRouter from '../router/dashboard-router'

// share-offcanvas
// import ShareOffcanvas from '../../components/share-offcanvas'

const Layout1 = () => {
    return (
        <>
            <Header />
            <div className='container'>
                <div className='d-flex jutify-content-between dashboard-body px-sm-0 px-xl-5'>
                    <Sidebar />
                    <div className='row dashbord-container w-100'>
                        <Col lg={1}></Col>
                        <Col lg={7} className="row m-0 p-0">
                            {/* <Col lg={12}> */}
                            <MainNav />
                            {/* </Col> */}
                            <Col lg={12}>
                                <DashboardRouter />
                            </Col>
                        </Col>
                        <Col lg={1}></Col>
                        <Col lg={3}>
                            <CardBar />
                        </Col>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout1
