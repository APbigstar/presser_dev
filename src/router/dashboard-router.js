import React from 'react'

//router
import { Switch, Route } from 'react-router-dom'

//pages
import Speaks from '../views/dashboard/speaks';
import News from '../views/dashboard/news';
import Trending from '../views/dashboard/trending';
import Settings from '../views/setting/settings';
import Messages from '../views/common/messages';
import Groups from '../views/groups/groups';

const Layout1Router = () => {
    return (
        <>
            <Switch>
                <Route path="/dashboard/app/speaks" component={Speaks}></Route>
                <Route path="/dashboard/app/news" component={News}></Route>
                <Route path="/dashboard/app/trending" component={Trending}></Route>
                <Route path="/dashboard/settings" component={Settings}></Route>
                <Route path="/dashboard/messages" component={Messages}></Route>
                <Route path="/dashboard/groups" component={Groups}></Route>
            </Switch>
        </>
    )
}

export default Layout1Router
