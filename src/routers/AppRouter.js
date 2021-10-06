import React, {useContext} from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginScreen from "../components/login/LoginScreen";
// import MarvelScreen from "../marvel/MarvelScreen";
import DashboardRoutes from "./DashboardRoutes";
import {PrivateRoute} from "./PrivateRoute";
import {AuthContext} from "../auth/AuthContext";

const AppRouter = () => {

  const {user} = useContext(AuthContext);
  return (
    <Router>
      <div>
        {/*<Navbar />*/}
        <Switch>
          <Route exact path='/login' component={LoginScreen}/>
          <PrivateRoute
            path='/'
            component={DashboardRoutes}
            isAuthenticated={user.logged}
          />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
