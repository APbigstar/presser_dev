import React from 'react'

//router
import { Switch, Route } from 'react-router-dom'

//layoutpages
import Default from '../layouts/default'
import Dashboard from '../layouts/dashboard'
import Auth from '../layouts/auth'

//settingoffCanvas
import SettingOffCanvas from '../components/setting/SettingOffCanvas'

const IndexRouters = () => {
    return (
        <>
            <Switch>
                <Route path="/auth" component={Auth}></Route>
                <Route path="/dashboard" component={Dashboard}></Route>
                {/* <Route path="/errors" component={Auth}></Route> */}
                {/* <Route path="/extra-pages" component={Auth}></Route> */}

                {/* default router - always bottom */}
                <Route path="/" component={Default}></Route>
            </Switch>
            <SettingOffCanvas />
        </>
    )
}

export default IndexRouters
