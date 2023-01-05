import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Breadcrumb } from 'react-bootstrap'

const MainNav = () => {

    let location = useLocation();
    let breakingPath = '/dashboard/app/breaking';
    let speaksPath = '/dashboard/app/speaks';
    let newsPath = '/dashboard/app/news';
    let trendingPath = '/dashboard/app/trending';
    let livePath = '/dashboard/app/live';
    let channelPath = '/dashboard/app/channel';
    let settingPath = '/dashboard/settings';
    let messagePath = '/dashboard/messages';


    return (
        <>
            <div className={`${location.pathname === settingPath || location.pathname === messagePath ? 'd-none' : ''}`}>
                <div className='dashboard-nav-bar-container'>
                    <div className='dashboard-nav-bar-content d-flex align-items-center justify-content-around'>
                        <Link className={`${location.pathname === breakingPath ? 'active' : ''} nav-item text-black font-16`} to={breakingPath}>Breaking</Link>
                        <Link className={`${location.pathname === speaksPath ? 'active' : ''} nav-item text-black font-16`} to={speaksPath}>Speaks</Link>
                        <Link className={`${location.pathname === newsPath ? 'active' : ''} nav-item text-black font-16`} to={newsPath}>News</Link>
                        <Link className={`${location.pathname === trendingPath ? 'active' : ''} nav-item text-black font-16`} to={trendingPath}>Trending</Link>
                        <Link className={`${location.pathname === livePath ? 'active' : ''} nav-item text-black font-16`} to={livePath}>Live</Link>
                        <Link className={`${location.pathname === channelPath ? 'active' : ''} nav-item text-black font-16`} to={channelPath}>Channel</Link>
                    </div>
                </div>
                <div className='dashboard-breadcrumbs-nav'>
                    <Breadcrumb bsPrefix="breadcrumb">
                        <Breadcrumb.Item href={speaksPath}>Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>{(location.pathname).split("/").reverse()[0]}</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className='dashboard-breadcrumbs d-flex justify-content-between align-items-center'>
                        <h1 className='text-black fw-bold'>
                            {
                                (() => {
                                    if (location.pathname === breakingPath)
                                        return ("Breaking");
                                    if (location.pathname === speaksPath)
                                        return ("Speaks");
                                    if (location.pathname === newsPath)
                                        return ("Top News Stories");
                                    if (location.pathname === trendingPath)
                                        return ("Trending Now");
                                    if (location.pathname === livePath)
                                        return ("Live");
                                    if (location.pathname === channelPath)
                                        return ("Channel");
                                })()
                            }
                        </h1>
                        <div className={`${location.pathname === breakingPath || location.pathname === speaksPath ? 'd-flex' : 'd-none'} dashboard-breadcrumbs-tab align-items-center`}>
                            <span className='text-black active'>Newest</span>
                            <span className='text-black'>Best</span>
                        </div>
                        <div className={`${location.pathname === newsPath ? 'd-flex' : 'd-none'} dashboard-breadcrumbs-tab align-items-center`}>
                            <Link to={breakingPath} className='text-black breaking_news_tab'>Show Breaking News</Link>
                        </div>
                    </div>
                    <div className={`${location.pathname === newsPath ? 'd-flex' : 'd-none'} justify-content-end align-items-center news_page_tab py-2 mb-2`}>
                        <div className={`${location.pathname === newsPath ? 'd-flex' : 'd-none'} dashboard-breadcrumbs-tab align-items-center`}>
                            <span className='text-black active'>Today</span>
                            <span className='text-black'>This Week</span>
                            <span className='text-black'>Last Week</span>
                        </div>
                    </div>
                    <div className={`${location.pathname === trendingPath ? 'd-flex' : 'd-none'} justify-content-between align-items-center news_page_tab py-2 mb-2`}>
                        <p className='p-0 m-0 text-decoration-underline'>View news from: </p>
                        <div className={`${location.pathname === trendingPath ? 'd-flex' : 'd-none'} dashboard-breadcrumbs-tab align-items-center`}>
                            <span className='text-black active'>Newest</span>
                            <span className='text-black'>Best</span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MainNav
