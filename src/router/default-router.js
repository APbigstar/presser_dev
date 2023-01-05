import React from 'react'

//router
import { Switch, Route } from 'react-router-dom'
// import SettingOffCanvas from '../components/setting/SettingOffCanvas'

//WelcomePage
import Index from '../views/common/welcome'

const IndexRouters = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={Index} />
            </Switch>
        </>
    )
}

export default IndexRouters
