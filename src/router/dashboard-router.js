import React from 'react'

//router
import { Switch, Route } from 'react-router-dom'

//pages
import Speaks from '../views/dashboard/speaks';
import News from '../views/dashboard/news';
import Trending from '../views/dashboard/trending';
import Settings from '../views/setting/settings';
import Messages from '../views/common/messages';
// import GroupDetail from '../views/dashboard/app/group-detail';
// import FriendList from '../views/dashboard/app/friend-list'
// import ProfileImages from '../views/dashboard/app/profile-images';
// import ProfileVideos from '../views/dashboard/app/profile-videos';
// import ProfileEvents from '../views/dashboard/app/profile-events';
// import EventDetail from '../views/dashboard/app/event-detail';
// import Calendar from '../views/dashboard/app/calendar';
// import Birthday from '../views/dashboard/app/birthday';
// import Weather from '../views/dashboard/app/weather'
// import Music from '../views/dashboard/app/music';
// import CatergoryGrid from '../views/dashboard/store/store-category-grid';
// import CatergoryList from '../views/dashboard/store/store-category-list';
// import StoreDetail from '../views/dashboard/store/store-detail';
// import StoreCheckout from '../views/dashboard/store/store-checkout';

//market and profile pages
// import Market1 from '../views/dashboard/market-place/market1';
// import Market2 from '../views/dashboard/market-place/market2';
// import Profile1 from '../views/dashboard/profiles/profile1';
// import Profile2 from '../views/dashboard/profiles/profile2';
// import Profile3 from '../views/dashboard/profiles/profile3';

const Layout1Router = () => {
    return (
        <>
            <Switch>
                <Route path="/dashboard/app/speaks" component={Speaks}></Route>
                <Route path="/dashboard/app/news" component={News}></Route>
                <Route path="/dashboard/app/trending" component={Trending}></Route>
                <Route path="/dashboard/settings" component={Settings}></Route>
                <Route path="/dashboard/messages" component={Messages}></Route>
            </Switch>
        </>
    )
}

export default Layout1Router
