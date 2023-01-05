import React from 'react'
import { Switch, Route } from 'react-router-dom'

// auth pages
import AuthPage from '../views/auth/authPage'
import SignInPage from '../views/auth/signInPage'
import SignUpPage from '../views/auth/signUpPage'
import MailVerification from '../views/auth/mailVerification'
import MailConfirm from '../views/auth/mailConfirm'

// errors pages
// import Error404 from '../views/dashboard/errors/error404'
// import Error500 from '../views/dashboard/errors/error500'

//extrpages pages
// import Maintenance from '../views/dashboard/extrapages/maintenance'
// import ComingSoon from '../views/dashboard/extrapages/comingsoon'

const AuthRouter = () => {
    return (
        <>
            <Switch>

                {/* auth pages */}
                <Route path="/auth/verification-mail" component={MailVerification} />
                <Route path="/auth/confirm-mail" component={MailConfirm} />
                <Route path="/auth/auth-option" component={AuthPage} />
                <Route path="/auth/sign-in" component={SignInPage} />
                <Route path="/auth/sign-up" component={SignUpPage} />
                {/* <Route path="/auth/lock-screen" component={LockScreen} /> */}
                {/* <Route path="/auth/recoverpw" component={Recoverpw} /> */}

                {/* error pages */}
                {/* <Route path="/errors/error404" component={Error404} /> */}
                {/* <Route path="/errors/error500" component={Error500} /> */}

                {/* extra pages */}
                {/* <Route path="/extra-pages/pages-maintenance" component={Maintenance} /> */}
                {/* <Route path="/extra-pages/pages-comingsoon" component={ComingSoon} /> */}

            </Switch>
        </>
    )
}

export default AuthRouter
